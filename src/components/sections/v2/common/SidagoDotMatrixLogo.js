"use client";

import { useEffect, useRef, useState } from "react";

const SAMPLE_SCALE = 4;

/**
 * Renders the Sidago mark as a dot-matrix field (same visual language as DotMatrixText).
 */
export default function SidagoDotMatrixLogo({
  src = "/images/sidago-gray-logo.svg",
  width = 176,
  height = 252,
  dotSpacing = 2,
  dotSize = 1,
  dotColor = "#E9EEE9",
  className = "",
}) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    const img = new Image();
    img.decoding = "async";

    img.onload = () => {
      if (cancelled || !canvasRef.current) return;

      const sourceWidth = img.naturalWidth || 78;
      const sourceHeight = img.naturalHeight || 112;
      const sampleWidth = sourceWidth * SAMPLE_SCALE;
      const sampleHeight = sourceHeight * SAMPLE_SCALE;

      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;

      const sampleCtx = sampleCanvas.getContext("2d");
      if (!sampleCtx) return;

      sampleCtx.imageSmoothingEnabled = false;
      sampleCtx.clearRect(0, 0, sampleWidth, sampleHeight);
      sampleCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);

      const pixels = sampleCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor;

      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          const sampleX = Math.min(
            sampleWidth - 1,
            Math.round((x / width) * sampleWidth),
          );
          const sampleY = Math.min(
            sampleHeight - 1,
            Math.round((y / height) * sampleHeight),
          );
          const alpha = pixels[(sampleX + sampleY * sampleWidth) * 4 + 3];
          if (alpha <= 32) continue;

          if (dotSize <= 1) {
            ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
          } else {
            const radius = dotSize / 2;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      setReady(true);
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [dotColor, dotSize, dotSpacing, height, src, width]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`block h-auto max-w-full transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ width, height }}
      aria-hidden
    />
  );
}
