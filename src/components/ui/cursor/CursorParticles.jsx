import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const MAX_PARTICLES = 14;
const SPAWN_DISTANCE = 20;
const LIFE = 720;

const CursorParticles = forwardRef(function CursorParticles(_, ref) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);

  useImperativeHandle(ref, () => ({
    move(x, y) {
      const state = stateRef.current;
      if (!state) return;

      const dx = x - state.lastMouseX;
      const dy = y - state.lastMouseY;

      if (Math.hypot(dx, dy) < SPAWN_DISTANCE) return;

      state.lastMouseX = x;
      state.lastMouseY = y;

      const angle = Math.atan2(dy, dx);
      const side = Math.random() > 0.5 ? 1 : -1;
      const drift = (Math.random() * 0.035 + 0.015) * side;

      state.particles.push({
        x,
        y,
        vx: Math.cos(angle) * -drift,
        vy: Math.sin(angle) * -drift,
        size: Math.random() * 1.7 + 1.3,
        life: LIFE,
        maxLife: LIFE,
        phase: Math.random() * Math.PI * 2,
      });

      if (state.particles.length > MAX_PARTICLES) {
        state.particles.shift();
      }

      if (!state.running) {
        state.running = true;
        state.lastTime = performance.now();
        state.frame = requestAnimationFrame(state.tick);
      }
    },
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 1024) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const state = {
      width: 0,
      height: 0,
      dpr: 1,
      frame: 0,
      running: false,
      lastTime: performance.now(),
      lastMouseX: -1000,
      lastMouseY: -1000,
      color: "#67E8F9",
      colorRefresh: 0,
      particles: [],
      tick: null,
    };

    stateRef.current = state;

    const resize = () => {
      state.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      state.width = window.innerWidth;
      state.height = window.innerHeight;

      canvas.width = Math.floor(state.width * state.dpr);
      canvas.height = Math.floor(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;

      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    };

    const getColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--cursor")
        .trim() || "#67E8F9";

    state.color = getColor();

    state.tick = (now) => {
      const delta = Math.min(now - state.lastTime, 32);
      state.lastTime = now;
      state.colorRefresh += delta;

      if (state.colorRefresh > 500) {
        state.color = getColor();
        state.colorRefresh = 0;
      }

      ctx.clearRect(0, 0, state.width, state.height);

      for (let i = state.particles.length - 1; i >= 0; i -= 1) {
        const particle = state.particles[i];
        particle.life -= delta;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.phase += delta * 0.008;

        if (particle.life <= 0) {
          state.particles.splice(i, 1);
          continue;
        }

        const progress = 1 - particle.life / particle.maxLife;
        const fadeIn = Math.min(progress / 0.12, 1);
        const fadeOut = Math.min((1 - progress) / 0.28, 1);
        const alpha = fadeIn * fadeOut;
        const pulse = 0.82 + Math.sin(particle.phase) * 0.18;
        const size = particle.size * (0.75 + alpha * 0.45);

        ctx.globalAlpha = alpha * 0.82 * pulse;
        ctx.fillStyle = state.color;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 0.55, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = alpha * 0.55 * pulse;
        ctx.fillRect(particle.x - size * 1.8, particle.y - 0.45, size * 3.6, 0.9);
        ctx.fillRect(particle.x - 0.45, particle.y - size * 1.8, 0.9, size * 3.6);
      }

      ctx.globalAlpha = 1;

      if (state.particles.length > 0) {
        state.frame = requestAnimationFrame(state.tick);
      } else {
        state.running = false;
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(state.frame);
      stateRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9996]"
      aria-hidden="true"
    />
  );
});

export default CursorParticles;
