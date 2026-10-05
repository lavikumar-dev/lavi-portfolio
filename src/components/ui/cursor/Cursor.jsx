import { useEffect, useRef, useState } from "react";

import CursorParticles from "./CursorParticles";
import useTheme from "../../../personalization/hooks/useTheme";

function getCursorShape(shape) {
  switch (shape) {
    case "square":
      return "6px";
    case "leaf":
      return "100% 0 100% 0";
    case "petal":
      return "70% 30% 70% 30%";
    case "diamond":
      return "5px";
    case "dot-ring":
      return "50%";
    default:
      return "50%";
  }
}

export default function Cursor() {
  const { design, effects } = useTheme();

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [desktop, setDesktop] = useState(false);

  const hoveringRef = useRef(false);
  const visibleRef = useRef(false);
  const particlesRef = useRef(null);

  const cursorRef = useRef(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");

    const update = () => setDesktop(media.matches);
    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  useEffect(() => {
    if (!desktop || !design || !effects.cursor) return undefined;

    document.body.style.cursor = "none";

    const root = document.documentElement;

    const render = () => {
      frameRef.current = 0;

      const { x, y } = pointerRef.current;
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
    };

    const scheduleRender = () => {
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(render);
      }
    };

    const move = (event) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;

      particlesRef.current?.move(event.clientX, event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      scheduleRender();
    };

    const enter = () => {
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    const hoverStart = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest("button, a, img, .project-card, [data-cursor-hover]")) {
        if (!hoveringRef.current) {
          hoveringRef.current = true;
          setHovering(true);
        }
      }
    };

    const hoverEnd = (event) => {
      const related = event.relatedTarget;
      const target = event.target;

      if (!(target instanceof Element)) return;
      if (related instanceof Node && target.contains(related)) return;

      const nextTarget = related instanceof Element ? related : null;

      if (
        nextTarget?.closest(
          "button, a, img, .project-card, [data-cursor-hover]"
        )
      ) {
        return;
      }

      if (hoveringRef.current) {
        hoveringRef.current = false;
        setHovering(false);
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("pointerover", hoverStart, { passive: true });
    document.addEventListener("pointerout", hoverEnd, { passive: true });

    return () => {
      document.body.style.cursor = "";

      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("pointerover", hoverStart);
      document.removeEventListener("pointerout", hoverEnd);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }

      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, [desktop, design, effects.cursor]);

  if (!desktop || !design || !effects.cursor) return null;

  const cursor = design.cursor;
  const shape = getCursorShape(cursor.shape);
  const isDiamond = cursor.shape === "diamond";
  const ringSize = hovering ? cursor.hoverSize : cursor.size;
  const dotSize = hovering ? 9 : 7;
  const rotation = isDiamond ? 45 : cursor.rotation;

  return (
    <>
      <CursorParticles ref={particlesRef} />

      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          willChange: "transform",
          transition: "width 120ms ease-out, height 120ms ease-out, opacity 80ms ease-out",
        }}
      >
        <div
          className="absolute inset-0 border"
          style={{
            borderColor: "var(--cursor)",
            borderRadius: shape,
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "50% 50%",
            boxShadow: hovering
              ? "0 0 8px var(--cursor-glow), 0 0 18px var(--cursor-glow)"
              : "0 0 5px var(--cursor-glow), 0 0 11px color-mix(in srgb, var(--cursor-glow) 55%, transparent)",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            background: "var(--cursor)",
            transform: "translate3d(-50%, -50%, 0)",
            boxShadow: hovering
              ? "0 0 8px var(--cursor), 0 0 18px var(--cursor-glow)"
              : "0 0 6px var(--cursor), 0 0 12px var(--cursor-glow)",
            transition:
              "width 80ms ease-out, height 80ms ease-out, box-shadow 100ms ease-out",
          }}
        />
      </div>
    </>
  );
}
