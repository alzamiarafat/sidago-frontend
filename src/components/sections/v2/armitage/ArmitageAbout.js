"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ARMITAGE_ABOUT_TABS } from "./data";

const AUTO_ADVANCE_MS = 8000;

export default function ArmitageAbout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());
  const rafRef = useRef(null);
  const videoRefs = useRef([]);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % ARMITAGE_ABOUT_TABS.length);
    startRef.current = Date.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const next = Math.min(elapsed / AUTO_ADVANCE_MS, 1);
      setProgress(next);
      if (next >= 1) advance();
      else rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex, advance]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.style.visibility = "visible";
        video.style.zIndex = "2";
        video.play().catch(() => {});
      } else {
        video.style.visibility = "hidden";
        video.style.zIndex = "0";
        video.pause();
      }
    });
  }, [activeIndex]);

  const selectTab = (index) => {
    setActiveIndex(index);
    startRef.current = Date.now();
    setProgress(0);
  };

  return (
    <section className="armitage-about" id="about">
      <div className="armitage-container armitage-about__inner">
        <h2 className="armitage-about__title">About Armitage</h2>
        <p className="armitage-about__intro">
          We curate vaults with the trading infrastructure, operational experience,
          and risk capabilities as crypto&apos;s leading trading firm
        </p>

        <div className="armitage-about__grid">
          <div className="armitage-about__tabs">
            {ARMITAGE_ABOUT_TABS.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`armitage-about__tab ${
                    isActive ? "armitage-about__tab--active" : "armitage-about__tab--inactive"
                  }`}
                  onClick={() => selectTab(index)}
                >
                  <h3
                    className={`armitage-about__tab-title ${
                      isActive ? "armitage-about__tab-title--active" : ""
                    }`}
                  >
                    {tab.title}
                  </h3>
                  {isActive ? (
                    <>
                      <div
                        className="armitage-about__progress"
                        role="progressbar"
                        aria-label="Progress"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(progress * 100)}
                      >
                        <div
                          className="armitage-about__progress-bar"
                          style={{ transform: `translateX(${(progress - 1) * 100}%)` }}
                        />
                      </div>
                      <p className="armitage-about__tab-body">{tab.body}</p>
                    </>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="armitage-about__visual armitage-bevel-md">
            {ARMITAGE_ABOUT_TABS.map((tab, index) => (
              <video
                key={tab.id}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={tab.video}
                loop
                muted
                playsInline
                preload="auto"
                className="armitage-about__video"
                style={{
                  visibility: index === activeIndex ? "visible" : "hidden",
                  zIndex: index === activeIndex ? 2 : 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
