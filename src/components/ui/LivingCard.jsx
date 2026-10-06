import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

import "../../styles/About.css";

export default function LivingCard({
  children,
  className = "",
  onHover,
  onClick,
  interactive = false,
  as: Tag = "div",
}) {
  const cardRef = useRef(null);
  const frameRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0, px: 50, py: 50 });
  const currentRef = useRef({ x: 0, y: 0, px: 50, py: 50 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const update = () => {
    frameRef.current = 0;
    const element = cardRef.current;
    if (!element) return;

    const current = currentRef.current;
    const target = targetRef.current;

    current.x += (target.x - current.x) * 0.16;
    current.y += (target.y - current.y) * 0.16;
    current.px += (target.px - current.px) * 0.18;
    current.py += (target.py - current.py) * 0.18;

    element.style.setProperty("--tilt-x", `${current.x.toFixed(3)}deg`);
    element.style.setProperty("--tilt-y", `${current.y.toFixed(3)}deg`);
    element.style.setProperty("--pointer-x", `${current.px.toFixed(2)}%`);
    element.style.setProperty("--pointer-y", `${current.py.toFixed(2)}%`);

    const settling =
      Math.abs(target.x - current.x) > 0.01 ||
      Math.abs(target.y - current.y) > 0.01 ||
      Math.abs(target.px - current.px) > 0.02 ||
      Math.abs(target.py - current.py) > 0.02;

    if (settling) frameRef.current = requestAnimationFrame(update);
  };

  const handlePointerMove = (event) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;

    targetRef.current = {
      x: (50 - py) * 0.07,
      y: (px - 50) * 0.08,
      px,
      py,
    };

    if (!frameRef.current) frameRef.current = requestAnimationFrame(update);
  };

  const handlePointerLeave = () => {
    targetRef.current = { x: 0, y: 0, px: 50, py: 50 };
    if (!frameRef.current) frameRef.current = requestAnimationFrame(update);
  };

  return (
    <Tag
      ref={cardRef}
      className={`about-living-card ${interactive ? "about-living-card-interactive" : ""} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      <div className="about-card-light" aria-hidden="true" />
      <div className="about-card-sheen" aria-hidden="true" />
      <div className="about-card-depth about-card-depth-back" aria-hidden="true" />
      <div className="about-card-content">{children}</div>
    </Tag>
  );
}
