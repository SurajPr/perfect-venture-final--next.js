"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Start off-screen
    let mx = -2000, my = -2000;
    let ox = -2000, oy = -2000;
    let ix = -2000, iy = -2000;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      // Outer trails slowly for a dreamy smear
      ox += (mx - ox) * 0.055;
      oy += (my - oy) * 0.055;
      // Inner follows faster for a crisp core
      ix += (mx - ix) * 0.14;
      iy += (my - iy) * 0.14;

      outer.style.transform = `translate(${ox - 300}px, ${oy - 300}px)`;
      inner.style.transform = `translate(${ix - 70}px, ${iy - 70}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Large slow-trailing outer halo */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none w-[600px] h-[600px] rounded-full"
        style={{
          zIndex: 6,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0.03) 45%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Small fast inner sparkle */}
      <div
        ref={innerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none w-[140px] h-[140px] rounded-full"
        style={{
          zIndex: 6,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.22) 0%, rgba(124,58,237,0.10) 45%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </>
  );
}
