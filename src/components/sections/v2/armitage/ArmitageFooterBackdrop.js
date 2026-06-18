"use client";

import { useEffect, useRef } from "react";

const CHARS = "ITAwintermute{}[]<>/\\|@#$%&*+=~";

function createSpherePoints(count) {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push({
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
      char: CHARS[i % CHARS.length],
      showChar: i % 7 === 0,
    });
  }

  return points;
}

function lerp(current, target, amount) {
  return current + (target - current) * amount;
}

function rotatePoint(point, rotX, rotY) {
  const { x, y, z } = point;

  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const x1 = x * cosY + z * sinY;
  const z1 = -x * sinY + z * cosY;

  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);
  const y2 = y * cosX - z1 * sinX;
  const z2 = y * sinX + z1 * cosX;

  return { x: x1, y: y2, z: z2 };
}

export default function ArmitageFooterBackdrop({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrapper = containerRef?.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const points = createSpherePoints(900);
    const pointer = { x: 0.5, y: 0.35, active: false };
    let rotX = 0;
    let rotY = 0;
    let idleAngle = 0;
    let frameId = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onMouseMove = (event) => {
      const rect = wrapper.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.active = true;
    };

    const onMouseLeave = () => {
      pointer.active = false;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      const targetRotY = pointer.active
        ? (pointer.x - 0.5) * Math.PI * 0.95
        : Math.sin(idleAngle) * 0.18;
      const targetRotX = pointer.active
        ? (pointer.y - 0.42) * Math.PI * 0.42
        : Math.cos(idleAngle * 0.8) * 0.08;

      const ease = pointer.active ? 0.12 : 0.04;
      rotX = lerp(rotX, targetRotX, ease);
      rotY = lerp(rotY, targetRotY, ease);

      const centerX = lerp(
        width * 0.5,
        width * (0.5 + (pointer.x - 0.5) * 0.08),
        pointer.active ? 0.35 : 0,
      );
      const centerY = lerp(
        height * 0.42,
        height * (0.42 + (pointer.y - 0.42) * 0.06),
        pointer.active ? 0.35 : 0,
      );
      const scale = Math.min(width, height) * 0.34;

      const projected = points
        .map((point) => rotatePoint(point, rotX, rotY))
        .sort((a, b) => a.z - b.z);

      for (const point of projected) {
        const depth = (point.z + 1) * 0.5;
        const perspective = 1.8 / (1.8 + point.z);
        const px = centerX + point.x * scale * perspective;
        const py = centerY + point.y * scale * perspective;
        const alpha = 0.12 + depth * 0.55;

        ctx.fillStyle = `rgba(13, 207, 207, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.1 * perspective, 0, Math.PI * 2);
        ctx.fill();

        if (point.showChar && depth > 0.55) {
          ctx.fillStyle = `rgba(13, 207, 207, ${0.35 + depth * 0.45})`;
          ctx.font = `${Math.max(7, 9 * perspective)}px ui-monospace, monospace`;
          ctx.fillText(point.char, px - 3, py + 3);
        }
      }

      if (!prefersReduced) {
        if (pointer.active) {
          const glowX = pointer.x * width;
          const glowY = pointer.y * height;
          const gradient = ctx.createRadialGradient(
            glowX,
            glowY,
            0,
            glowX,
            glowY,
            Math.min(width, height) * 0.28,
          );
          gradient.addColorStop(0, "rgba(13, 207, 207, 0.14)");
          gradient.addColorStop(1, "rgba(13, 207, 207, 0)");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
        }

        idleAngle += pointer.active ? 0.0025 : 0.004;
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    wrapper.addEventListener("mousemove", onMouseMove);
    wrapper.addEventListener("mouseleave", onMouseLeave);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      wrapper.removeEventListener("mousemove", onMouseMove);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [containerRef]);

  return <canvas className="armitage-footer__canvas" aria-hidden="true" />;
}
