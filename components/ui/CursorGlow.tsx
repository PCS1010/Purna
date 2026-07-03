"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9990] hidden md:block"
      style={{
        width: 400,
        height: 400,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.08s ease, top 0.08s ease",
      }}
    />
  );
}
