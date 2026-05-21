"use client";

import Image from "next/image";
import { useState } from "react";

const DEFAULT_END_BACKGROUND = "/images/hero-video-end-background.png";

export default function HeroVideoBackground({
  videoSrc,
  videoPoster = "",
  videoClass = "",
  lighterTheme = false,
  loop = false,
  endBackgroundSrc = DEFAULT_END_BACKGROUND,
}) {
  const [videoEnded, setVideoEnded] = useState(false);

  const showEndBackground = videoEnded && Boolean(endBackgroundSrc?.trim());

  return (
    <div
      className={`video-wrapper ${videoClass} ${lighterTheme ? "video-light-overlay" : "video-dark-overlay"}`}
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
        {...(videoPoster?.trim() ? { poster: videoPoster.trim() } : {})}
        src={videoSrc}
      />
    </div>
  );
}
