"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      buildStars();
    };

    const buildStars = () => {
      const count = Math.min(Math.floor((w * h) / 3600), 300);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.55 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // Deep space gradient — dark purple-indigo at top fading to near-black
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0,    "#0c0618");
      bg.addColorStop(0.45, "#09090f");
      bg.addColorStop(1,    "#030209");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Nebula glow — top left
      const neb1 = ctx.createRadialGradient(w * 0.15, h * 0.05, 0, w * 0.15, h * 0.05, w * 0.45);
      neb1.addColorStop(0, "rgba(110, 50, 200, 0.11)");
      neb1.addColorStop(1, "transparent");
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, w, h);

      // Nebula glow — bottom right
      const neb2 = ctx.createRadialGradient(w * 0.85, h * 0.75, 0, w * 0.85, h * 0.75, w * 0.4);
      neb2.addColorStop(0, "rgba(80, 30, 160, 0.09)");
      neb2.addColorStop(1, "transparent");
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, w, h);

      // Twinkling stars
      const now = t * 0.001;
      for (const s of stars) {
        const brightness = s.alpha * (0.5 + 0.5 * Math.sin(now * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 200, 255, ${brightness})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
