"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  subtract(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.lengthSq());
  }
}

function matchesScreen(bp) {
  if (typeof window === "undefined") return false;
  const min = bp === "lg" ? 1024 : 1280; // lg/xl
  return window.matchMedia(`(min-width: ${min}px)`).matches;
}

function nearestPointToSegment(p, a, b) {
  const ap = p.clone().subtract(a);
  const ab = b.clone().subtract(a);
  const t = ap.dot(ab) / ab.lengthSq();
  if (t < 0) return a;
  if (t > 1) return b;
  return a.clone().add(ab.multiplyScalar(t)).subtract(p);
}

export function DotMatrixText({
  text,
  fontSizeMobile,
  fontSizeDesktop,
  dotSpacing,
  dotSize,
  dotColor,
  active,
  activeDotColor,
  fontFamily = "saans, sans-serif",
}) {
  const measureCanvasRef = useRef(null);
  const drawCanvasRef = useRef(null);

  const rafRef = useRef(null);
  const lastTRef = useRef(0);
  const progRef = useRef(0);
  const lastProgRef = useRef(-1);
  const wasActivatedRef = useRef(false);

  const [canvasW, setCanvasW] = useState(0);
  const [fontPx, setFontPx] = useState(0);
  const [pairs, setPairs] = useState();

  useEffect(() => {
    const remeasure = () => {
      const fontSize = matchesScreen("xl") ? fontSizeDesktop : fontSizeMobile;
      const font = `900 ${fontSize}px/1 ${fontFamily}`;

      const done = () => {
        const c = measureCanvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;

        ctx.font = font;
        setCanvasW(Math.ceil(ctx.measureText(text).width));
        setFontPx(fontSize);
        lastProgRef.current = -1;
      };

      if (document.fonts && document.fonts.load)
        document.fonts.load(font).finally(done);
      else done();
    };

    remeasure();
    window.addEventListener("resize", remeasure);
    return () => window.removeEventListener("resize", remeasure);
  }, [fontFamily, fontSizeDesktop, fontSizeMobile, text]);

  useEffect(() => {
    if (active) wasActivatedRef.current = true;
  }, [active]);

  useEffect(() => {
    const c = measureCanvasRef.current;
    if (!c || !canvasW || !fontPx) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    c.width = canvasW;
    c.height = fontPx;

    const font = `900 ${fontPx}px/1 ${fontFamily}`;
    ctx.clearRect(0, 0, canvasW, fontPx);
    ctx.font = font;
    ctx.fillStyle = "#fff";
    ctx.fillText(text, 0, 0.875 * fontPx);

    const img = ctx.getImageData(0, 0, canvasW, fontPx);

    const dots = [];
    for (let x = 0; x < canvasW; x += dotSpacing) {
      for (let y = 0; y < fontPx; y += dotSpacing) {
        if (img.data[(x + y * canvasW) * 4]) dots.push(new Vec2(x, y));
      }
    }

    const top = new Vec2(0, 0.5 * fontPx - 0.5 * canvasW);
    const bottom = new Vec2(canvasW, 0.5 * fontPx + 0.5 * canvasW);

    const remaining = dots.slice();
    const out = [];

    for (const start of dots) {
      const segVec = nearestPointToSegment(start, top, bottom);
      const mirroredCenter = start
        .clone()
        .add(segVec.clone().multiplyScalar(2));

      let bestIdx = 0;
      let bestDist = canvasW * fontPx;

      for (let i = 0; i < remaining.length; i++) {
        const d = remaining[i].clone().subtract(mirroredCenter).length();
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }

      out.push({ start, end: remaining[bestIdx] });
      remaining.splice(bestIdx, 1);
    }

    setPairs(out);
  }, [canvasW, dotSpacing, fontFamily, fontPx, text]);

  useEffect(() => {
    const canvas = drawCanvasRef.current;
    if (!canvas || !pairs || !canvasW || !fontPx) return;

    canvas.width = canvasW;
    canvas.height = fontPx;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const half = Math.floor(dotSize / 2);
    const drawDot = (p) =>
      ctx.fillRect(p.x - half, p.y - half, dotSize, dotSize);

    const tick = (t) => {
      rafRef.current = requestAnimationFrame(tick);
      if (!drawCanvasRef.current) return;

      const dt = t - lastTRef.current;
      lastTRef.current = t;

      if (active || wasActivatedRef.current) progRef.current += dt / 1000;
      else progRef.current -= dt / 1000;

      progRef.current = Math.min(Math.max(0, progRef.current), 1);

      if (progRef.current === lastProgRef.current) return;
      lastProgRef.current = progRef.current;

      if (progRef.current === 1) wasActivatedRef.current = false;

      ctx.clearRect(0, 0, canvasW, fontPx);

      for (const pair of pairs) {
        const c = 1 - pair.start.y / fontPx;
        const r = 2 * progRef.current - c;

        if (r < 0) {
          ctx.fillStyle = matchesScreen("lg") ? dotColor : activeDotColor;
          drawDot(pair.start);
        } else if (r > 1) {
          ctx.fillStyle = activeDotColor;
          drawDot(pair.end);
        } else {
          ctx.fillStyle = activeDotColor;
          const ease = (Math.cos((r + 1) * Math.PI) + 1) / 2;
          const p = pair.start
            .clone()
            .add(pair.end.clone().subtract(pair.start).multiplyScalar(ease));
          drawDot(p);
        }
      }
    };

    rafRef.current = requestAnimationFrame((t) => {
      lastTRef.current = t;
      tick(t);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, activeDotColor, dotColor, dotSize, fontPx, pairs, canvasW]);

  const widthStyle = useMemo(
    () => (matchesScreen("lg") ? { width: canvasW } : undefined),
    [canvasW],
  );

  return (
    <div style={widthStyle}>
      <canvas
        ref={measureCanvasRef}
        className="hidden"
        height={fontPx || 0}
        width={canvasW || 0}
      />
      <canvas ref={drawCanvasRef} height={fontPx || 0} width={canvasW || 0} />
    </div>
  );
}
