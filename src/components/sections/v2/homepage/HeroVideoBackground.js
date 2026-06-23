"use client";

import { useEffect, useRef } from "react";
import {
  colorsToCss,
  cssColorToRgb,
  lerpColor,
  sampleVideoBackgroundColors,
} from "@/src/utils/sampleVideoBackgroundColors";

function parseVideoStartTime(src) {
  if (!src) return 0;
  const match = src.match(/#t=([0-9.]+)/);
  return match ? Number.parseFloat(match[1]) : 0;
}

function stripVideoTimeHash(src) {
  if (!src) return src;
  return src.split("#")[0];
}

function useVideoBackgroundSync(videoRef, enabled) {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const lastSampleRef = useRef(0);
  const currentColorsRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return undefined;

    const target = video.closest("[data-hero-bg-sync]");
    if (!target) return undefined;

    const tick = (time) => {
      frameRef.current = requestAnimationFrame(tick);

      if (video.readyState < 2) return;
      if (time - lastSampleRef.current < 350) return;
      lastSampleRef.current = time;

      const sampled = sampleVideoBackgroundColors(video, canvas);
      if (!sampled) return;

      const previous = currentColorsRef.current ?? sampled;
      const next = {
        left: [7, 8, 7],
        mid: lerpColor(previous.mid, sampled.mid),
        right: lerpColor(previous.right, sampled.right),
      };

      currentColorsRef.current = next;

      const cssColors = colorsToCss(next);
      target.style.setProperty("--hero-bg-left", "#070807");
      target.style.setProperty("--hero-bg-mid", cssColors.mid);
      target.style.setProperty("--hero-bg-right", cssColors.right);
    };

    const seedFromComputed = () => {
      const styles = getComputedStyle(target);
      currentColorsRef.current = {
        left:
          cssColorToRgb(styles.getPropertyValue("--hero-bg-left")) ?? [
            7, 8, 7,
          ],
        mid:
          cssColorToRgb(styles.getPropertyValue("--hero-bg-mid")) ?? [
            4, 5, 4,
          ],
        right:
          cssColorToRgb(styles.getPropertyValue("--hero-bg-right")) ?? [
            0, 0, 0,
          ],
      };
    };

    seedFromComputed();
    frameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameRef.current);
  }, [enabled, videoRef]);

  return canvasRef;
}

export default function HeroVideoBackground({
  videoSrc,
  videoPoster = "",
  videoClass = "",
  lighterTheme = false,
  loop = false,
  showOverlay,
  syncBackgroundColor = false,
}) {
  const overlayEnabled = showOverlay ?? true;
  const startTime = parseVideoStartTime(videoSrc);
  const resolvedVideoSrc = stripVideoTimeHash(videoSrc);
  const videoRef = useRef(null);
  const canvasRef = useVideoBackgroundSync(videoRef, syncBackgroundColor);

  const handleLoadedMetadata = (event) => {
    if (startTime <= 0) return;
    event.currentTarget.currentTime = startTime;
  };

  const handleTimeUpdate = (event) => {
    if (!loop || startTime <= 0) return;
    const video = event.currentTarget;
    if (!video.duration) return;
    if (video.currentTime >= video.duration - 0.08) {
      video.currentTime = startTime;
    }
  };

  const handleEnded = (event) => {
    if (loop) return;
    event.currentTarget.pause();
  };

  return (
    <>
      <div
        className={`video-wrapper ${videoClass} ${overlayEnabled ? (lighterTheme ? "video-light-overlay" : "video-dark-overlay") : ""}`}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={loop}
          playsInline
          preload="auto"
          onEnded={handleEnded}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          {...(videoPoster?.trim() ? { poster: videoPoster.trim() } : {})}
          src={resolvedVideoSrc}
        />
      </div>
      {syncBackgroundColor ? (
        <canvas ref={canvasRef} className="sr-only" aria-hidden />
      ) : null}
    </>
  );
}
