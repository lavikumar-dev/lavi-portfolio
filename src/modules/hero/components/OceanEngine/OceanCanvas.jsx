import { useEffect, useRef } from "react";

export default function OceanCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationId;
    let width;
    let height;
    let time = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.012;

      ctx.clearRect(0, 0, width, height);

      const baseY = height * 0.84;

      drawWave(baseY, 0, 1);
      drawWave(baseY + 18, 1.2, 0.7);
      drawWave(baseY + 36, 2.1, 0.45);

      animationId = requestAnimationFrame(draw);
    };

    function drawWave(yOffset, phase, alpha) {
      ctx.beginPath();

      for (let x = -40; x <= width + 40; x += 8) {
        const y =
          yOffset +
          Math.sin(x * 0.005 + time + phase) * 18 +
          Math.sin(x * 0.002 + time * 0.7) * 10;

        if (x === -40) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(34,211,238,${0.18 * alpha})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(34,211,238,.6)";
      ctx.stroke();
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        pointer-events-none
      "
    />
  );
}