"use client";
import { useEffect, useRef } from "react";

type Star = { angle:number; radius:number; speed:number; size:number; hue:number; alpha:number; };

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const pr = Math.min(window.devicePixelRatio || 1, 2);

    let stars: Star[] = [];
    let w = 0, h = 0, cx = 0, cy = 0;
    const STAR_DENSITY = 0.00012;
    const BASE_SPEED = 0.0006;

    function resize() {
      const vw = window.innerWidth, vh = window.innerHeight;
      w = canvas.width = Math.floor(vw * pr);
      h = canvas.height = Math.floor(vh * pr);
      canvas.style.width = vw + "px";
      canvas.style.height = vh + "px";
      cx = w / 2; cy = h / 2;

      const target = Math.floor(w * h * STAR_DENSITY);
      stars = new Array(target).fill(0).map(() => {
        const r = Math.sqrt(Math.random()) * Math.hypot(w, h) * 0.45;
        return {
          angle: Math.random() * Math.PI * 2,
          radius: r,
          speed: (0.3 + Math.random()) * BASE_SPEED * (1 + r / (Math.max(w, h))),
          size: (Math.random() * 0.7 + 0.3) * pr,
          hue: 210 + Math.random() * 80,
          alpha: 0.15 + Math.random() * 0.85,
        };
      });
    }

    function drawNebula(t: number) {
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.55);
      g.addColorStop(0.0, "rgba(80,120,255,0.10)");
      g.addColorStop(0.4, "rgba(130,90,255,0.08)");
      g.addColorStop(0.8, "rgba(0,0,0,0.0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.00015);
      for (let i = 0; i < 3; i++) {
        ctx.rotate((Math.PI * 2) / 3);
        const grad = ctx.createLinearGradient(0, 0, Math.max(w, h) * 0.6, 0);
        grad.addColorStop(0, "rgba(160,120,255,0.05)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, -8 * pr);
        ctx.quadraticCurveTo(Math.max(w, h) * 0.25, 0, Math.max(w, h) * 0.6, 6 * pr);
        ctx.quadraticCurveTo(Math.max(w, h) * 0.22, 2 * pr, 0, -8 * pr);
        ctx.fill();
      }
      ctx.restore();
    }

    function tick(t: number) {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(5,5,8,0.35)";
      ctx.fillRect(0, 0, w, h);
      drawNebula(t);
      ctx.globalCompositeOperation = "lighter";
      for (const s of stars) {
        s.angle += s.speed;
        const x = cx + Math.cos(s.angle) * s.radius;
        const y = cy + Math.sin(s.angle) * s.radius;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${s.alpha})`;
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} />
      <div className="absolute inset-0 galaxy-nebula-overlay" aria-hidden />
    </div>
  );
}
