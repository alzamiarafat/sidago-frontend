"use client";

import Image from "next/image";
import { useState } from "react";

const DEFAULT_END_BACKGROUND = "/images/hero-video-end-background.png";

function parseVideoStartTime(src) {
  if (!src) return 0;
  const match = src.match(/#t=([0-9.]+)/);
  return match ? Number.parseFloat(match[1]) : 0;
}

function stripVideoTimeHash(src) {
  if (!src) return src;
  return src.split("#")[0];
}

export default function HeroVideoBackground({
  videoSrc,
  videoPoster = "",
  videoClass = "",
  lighterTheme = false,
  loop = false,
  showOverlay,
  endBackgroundSrc = DEFAULT_END_BACKGROUND,
}) {
  const overlayEnabled = showOverlay ?? true;
  const [videoEnded, setVideoEnded] = useState(false);
  const startTime = parseVideoStartTime(videoSrc);
  const resolvedVideoSrc = stripVideoTimeHash(videoSrc);

  const showEndBackground = videoEnded && Boolean(endBackgroundSrc?.trim());

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

  return (
    <div
      className={`video-wrapper ${videoClass} ${overlayEnabled ? (lighterTheme ? "video-light-overlay" : "video-dark-overlay") : ""}`}
    >
      {showEndBackground ? (
        <Image
          src={endBackgroundSrc.trim()}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
      ) : null}

      <video
        className={`transition-opacity duration-700 ${showEndBackground ? "pointer-events-none opacity-0" : "opacity-100"}`}
        autoPlay
        muted
        loop={loop}
        playsInline
        preload="auto"
        onEnded={() => {
          if (!loop) {
            setVideoEnded(true);
          }
        }}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        {...(videoPoster?.trim() ? { poster: videoPoster.trim() } : {})}
        src={resolvedVideoSrc}
      />
    </div>
  );
}
