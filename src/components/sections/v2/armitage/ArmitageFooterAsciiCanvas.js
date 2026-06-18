"use client";

import { useEffect, useRef } from "react";
import {
  ARMITAGE_FOOTER_ART_START,
  ARMITAGE_FOOTER_ART_WIDTH,
  ARMITAGE_FOOTER_CANVAS_CONFIG,
  ARMITAGE_FOOTER_GRID,
} from "./armitageFooterArt";

const NEIGHBORS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function drawRoundedRect(ctx, x, y, size) {
  const radius = size * 0.159574;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + size - radius, y);
  ctx.lineTo(x + size, y + radius);
  ctx.lineTo(x + size, y + size - radius);
  ctx.lineTo(x + size - radius, y + size);
  ctx.lineTo(x + radius, y + size);
  ctx.lineTo(x, y + size - radius);
  ctx.lineTo(x, y + radius);
  ctx.closePath();
  ctx.fill();
}

export default function ArmitageFooterAsciiCanvas({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = containerRef?.current;
    if (!canvas || !wrapper) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const config = ARMITAGE_FOOTER_CANVAS_CONFIG;
    const rows = ARMITAGE_FOOTER_GRID;
    const rowLength = Math.max(...rows.map((line) => line.length));
    const cell = config.duCell;
    const charPalette = config.charPalette;

    let scale = 1;
    let frameId = 0;
    let lastFrame = 0;
    let lastDraw = 0;
    let colOffset = 0;
    let colCount = rowLength;
    let rowCount = rows.length;
    let activeCount = 0;

    let active = new Uint8Array(0);
    let expires = new Float64Array(0);
    let jitter = new Float32Array(0);
    let dead = new Uint8Array(0);
    let radiusJitter = new Float32Array(0);

    const pointer = { x: -9999, y: -9999, active: false };

    const getChar = (col, row) => {
      const sourceCol = col - colOffset;
      if (sourceCol < 0 || sourceCol >= rowLength) return "P";
      return rows[row]?.[sourceCol] ?? "P";
    };

    const getCharWeight = (char) => {
      if (char === " ") return 1;
      const index = charPalette.indexOf(char);
      return index >= 0 ? index / 15 : 0;
    };

    const allocateGrid = (size) => {
      active = new Uint8Array(size);
      expires = new Float64Array(size);
      jitter = new Float32Array(size);
      dead = new Uint8Array(size);
      radiusJitter = new Float32Array(size);
      activeCount = 0;

      for (let i = 0; i < size; i += 1) {
        jitter[i] = Math.random();
        dead[i] = Number(Math.random() < config.deadProbability);
        radiusJitter[i] = 0.6 + Math.random() * 0.8;
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { width, height } = parent.getBoundingClientRect();
      const viewportInset = 4 * (Math.min(window.innerWidth, window.innerHeight) / 100) * 2;
      const artWidth = Math.max(
        1,
        Math.min(width, 1216) - viewportInset,
      );

      scale = artWidth / (ARMITAGE_FOOTER_ART_WIDTH * cell);
      colOffset = Math.max(
        0,
        Math.round((width - artWidth) / 2 / (cell * scale) - ARMITAGE_FOOTER_ART_START),
      );

      const nextColCount = Math.max(rowLength, Math.ceil(width / (cell * scale)));
      const nextSize = nextColCount * rows.length;

      if (nextSize !== active.length) {
        allocateGrid(nextSize);
      }

      colCount = nextColCount;
      rowCount = Math.min(
        rows.length,
        Math.max(1, Math.ceil(height / (cell * scale)) + 2),
      );

      const dpr = window.devicePixelRatio || 1;
      const canvasWidth = Math.round(colCount * cell * scale);
      const canvasHeight = Math.round(rowCount * cell * scale);

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
    };

    const toCanvasPoint = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        return { x: -9999, y: -9999 };
      }
      return {
        x: (clientX - rect.left) / scale,
        y: (clientY - rect.top) / scale,
      };
    };

    const igniteAtPointer = (time, delta) => {
      const speed = 0.1 + 11.9 * config.ixSpeed;
      const decay = config.ixDecay / speed;
      const total = colCount * rows.length;

      for (let i = 0; i < total; i += 1) {
        if (active[i] && time >= expires[i]) {
          active[i] = 0;
          activeCount -= 1;
        }
      }

      if (!pointer.active) return;

      const radius = config.ixRadius;
      const density = config.ixDensity;
      const frameFactor = Math.min(delta, 80);

      for (let row = 0; row < rowCount; row += 1) {
        for (let col = 0; col < colCount; col += 1) {
          const index = row * colCount + col;
          if (dead[index] || active[index]) continue;

          const centerX = col * cell + cell / 2;
          const centerY = row * cell + cell / 2;
          const distance = Math.hypot(centerX - pointer.x, centerY - pointer.y);
          const threshold = radius * radiusJitter[index];

          if (
            distance < threshold &&
            Math.random() < density * (1 - distance / threshold) * (frameFactor / 16)
          ) {
            const char = getChar(col, row);
            const weight = getCharWeight(char);
            const offset = (jitter[index] - 0.5) * decay * 0.6;
            active[index] = 1;
            activeCount += 1;
            expires[index] = time + decay * (0.3 + 0.7 * weight) + offset;
          }
        }
      }

      const spread = 0.3 * config.ixSpread * (frameFactor / 16);

      for (let row = 0; row < rowCount; row += 1) {
        for (let col = 0; col < colCount; col += 1) {
          const index = row * colCount + col;
          if (!active[index] || dead[index]) continue;

          for (const [rowDelta, colDelta] of NEIGHBORS) {
            const nextRow = row + rowDelta;
            const nextCol = col + colDelta;
            if (
              nextRow < 0 ||
              nextRow >= rowCount ||
              nextCol < 0 ||
              nextCol >= colCount
            ) {
              continue;
            }

            const nextIndex = nextRow * colCount + nextCol;
            if (active[nextIndex] || dead[nextIndex] || Math.random() >= spread) {
              continue;
            }

            const char = getChar(nextCol, nextRow);
            const weight = getCharWeight(char);
            active[nextIndex] = 1;
            activeCount += 1;
            expires[nextIndex] =
              time +
              decay * (0.15 + 0.35 * weight) +
              (jitter[nextIndex] - 0.5) * decay * 0.3;
          }
        }
      }
    };

    const draw = (time) => {
      if (
        (!pointer.active && activeCount === 0 && lastDraw !== 0) ||
        (!pointer.active && time - lastDraw < 33)
      ) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      const delta = time - lastFrame;
      lastFrame = time;

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);
      igniteAtPointer(time, delta);

      const width = colCount * cell;
      const height = rowCount * cell;

      ctx.fillStyle = config.colorBg;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = config.colorFg;

      const idleDot = cell * 0.15;
      const idleOffset = idleDot / 2;

      ctx.globalAlpha = 0.28;
      for (let row = 0; row < rowCount; row += 1) {
        const rowBase = row * colCount;
        const y = row * cell + cell / 2 - idleOffset;

        for (let col = 0; col < colCount; col += 1) {
          const index = rowBase + col;
          if (active[index] === 1 && dead[index] === 0) continue;
          const x = col * cell + cell / 2 - idleOffset;
          ctx.fillRect(x, y, idleDot, idleDot);
        }
      }

      if (activeCount > 0) {
        ctx.globalAlpha = 1;

        for (let row = 0; row < rowCount; row += 1) {
          const rowBase = row * colCount;

          for (let col = 0; col < colCount; col += 1) {
            const index = rowBase + col;
            if (active[index] !== 1 || dead[index] === 1) continue;

            const char = getChar(col, row);
            const weight = getCharWeight(char);
            const size =
              char === " "
                ? cell * 0.15 * 1.5
                : Math.max(
                    0.5,
                    cell *
                      (config.duScaleMin +
                        (config.duScaleMax - config.duScaleMin) * (1 - weight)),
                  );
            const x = col * cell + cell / 2 - size / 2;
            const y = row * cell + cell / 2 - size / 2;
            drawRoundedRect(ctx, x, y, size);
          }
        }
      }

      ctx.globalAlpha = 1;
      lastDraw = time;
      frameId = window.requestAnimationFrame(draw);
    };

    const onMouseMove = (event) => {
      const point = toCanvasPoint(event.clientX, event.clientY);
      pointer.x = point.x;
      pointer.y = point.y;
      pointer.active = true;
    };

    const onMouseLeave = () => {
      pointer.active = false;
      lastFrame = 0;
    };

    const onTouchMove = (event) => {
      event.preventDefault();
      const touch = event.touches[0];
      if (!touch) return;
      const point = toCanvasPoint(touch.clientX, touch.clientY);
      pointer.x = point.x;
      pointer.y = point.y;
      pointer.active = true;
    };

    const onTouchEnd = () => {
      pointer.active = false;
      lastFrame = 0;
    };

    resize();
    frameId = window.requestAnimationFrame(draw);

    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    wrapper.addEventListener("mousemove", onMouseMove);
    wrapper.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      wrapper.removeEventListener("mousemove", onMouseMove);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="armitage-footer__ascii-canvas"
      aria-hidden="true"
    />
  );
}
