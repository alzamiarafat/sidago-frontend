"use client";

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
}) {
  const overlayEnabled = showOverlay ?? true;
  const startTime = parseVideoStartTime(videoSrc);
  const resolvedVideoSrc = stripVideoTimeHash(videoSrc);

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
    <div
      className={`video-wrapper ${videoClass} ${overlayEnabled ? (lighterTheme ? "video-light-overlay" : "video-dark-overlay") : ""}`}
    >
      <video
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
  );
}
