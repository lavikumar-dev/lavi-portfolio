import { useEffect, useRef } from "react";

export default function OceanCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;
    let last = performance.now();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawWave = (yOffset, phase, alpha) => {
      ctx.beginPath();
      for (let x = -40; x <= width + 40; x += 12) {
        const y =
          yOffset +
          Math.sin(x * 0.005 + time + phase) * 18 +
          Math.sin(x * 0.002 + time * 0.7) * 10;

        if (x === -40) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(34,211,238,${0.14 * alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const draw = (now) => {
      const delta = Math.min(now - last, 32);
      last = now;
      time += (delta / 1000) * 0.72;

      ctx.clearRect(0, 0, width, height);
      const baseY = height * 0.84;

      drawWave(baseY, 0, 1);
      drawWave(baseY + 18, 1.2, 0.7);
      drawWave(baseY + 36, 2.1, 0.45);

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
