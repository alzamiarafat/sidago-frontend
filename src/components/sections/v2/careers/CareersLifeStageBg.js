"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 56;
const LINK_DISTANCE = 132;
const MAX_LINKS_PER_NODE = 5;

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const leftBias = index < PARTICLE_COUNT * 0.7;
    const x = leftBias
      ? Math.random() * width * 0.62
      : Math.random() * width;
    const y = Math.random() * height;

    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24,
      r: leftBias ? Math.random() * 1.4 + 0.9 : Math.random() * 1.1 + 0.7,
      pulse: Math.random() * Math.PI * 2,
      weight: leftBias ? 1.35 : 1,
    };
  });
}

export default function CareersLifeStageBg({ active = false }) {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !active) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let frameId;
    let particles = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!particles.length) {
        particles = createParticles(width, height);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.018;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
      }

      for (let i = 0; i < particles.length; i += 1) {
        let links = 0;
        for (let j = i + 1; j < particles.length; j += 1) {
          if (links >= MAX_LINKS_PER_NODE) break;

          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist > LINK_DISTANCE) continue;

          links += 1;
          const leftBoost =
            1 + (1 - (a.x + b.x) / (2 * width)) * 0.55;
          const alpha = (1 - dist / LINK_DISTANCE) * 0.28 * leftBoost;
          ctx.strokeStyle = `rgba(255,255,255,${Math.min(alpha, 0.42)})`;
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const particle of particles) {
        const glow = 0.45 + Math.sin(particle.pulse) * 0.2;
        const leftBoost = 1 + (1 - particle.x / width) * 0.4;
        ctx.fillStyle = `rgba(255,255,255,${glow * 0.72 * particle.weight * leftBoost})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    };

    resize();
    frameId = requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [active, reduce]);

  if (reduce) return null;

  return (
    <div className="careers-life-bg-layer pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <canvas ref={canvasRef} className="careers-life-bg-canvas absolute inset-0 h-full w-full" />

      <div className="careers-life-bg-rings careers-life-bg-rings--left">
        <span />
        <span />
        <span />
      </div>

      <div className="careers-life-bg-rings careers-life-bg-rings--right">
        <span />
        <span />
      </div>
    </div>
  );
}
