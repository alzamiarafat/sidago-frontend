"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PerformanceViewThumb } from "./PerformanceViewThumbs";
import "./performance-views-carousel.css";

function resolveVisual(item) {
  if (item.visual) return item.visual;
  const title = item.title?.toLowerCase() ?? "";
  if (title.includes("visibility")) return "visibility";
  if (title.includes("quality")) return "quality";
  if (title.includes("rhythm")) return "rhythm";
  if (title.includes("insight")) return "insight";
  if (title.includes("capacity")) return "capacity";
  return "capacity";
}

function useResponsiveVisibleCount(visibleCount) {
  const [resolvedVisibleCount, setResolvedVisibleCount] = useState(visibleCount);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setResolvedVisibleCount(1);
        return;
      }

      if (width < 1024) {
        setResolvedVisibleCount(2);
        return;
      }

      setResolvedVisibleCount(visibleCount);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [visibleCount]);

  return resolvedVisibleCount;
}

export default function PerformanceViewsCarousel({ section, visibleCount = 4 }) {
  const items = section?.items ?? [];
  const resolvedVisibleCount = useResponsiveVisibleCount(visibleCount);
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const [metrics, setMetrics] = useState({ cardWidth: 0, loopWidth: 0 });
  const loopItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const updateMetrics = () => {
      if (!outerRef.current || !trackRef.current || !items.length) return;

      const outerWidth = outerRef.current.offsetWidth;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 20;
      const cardWidth =
        (outerWidth - gap * (resolvedVisibleCount - 1)) / resolvedVisibleCount;
      const loopWidth = items.length * cardWidth + (items.length - 1) * gap;

      setMetrics({ cardWidth, loopWidth });
    };

    updateMetrics();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateMetrics)
        : null;

    if (observer && outerRef.current) {
      observer.observe(outerRef.current);
    }

    window.addEventListener("resize", updateMetrics);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, [items.length, resolvedVisibleCount]);

  if (!items.length) return null;

  return (
    <section className="perf-views overflow-hidden bg-[#0f140f] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <div className="perf-views__hd">
          <div className="perf-views__ey">{section.eyebrow}</div>
          <h2 className="perf-views__title">{section.title}</h2>
          {section.description ? (
            <p className="perf-views__desc">{section.description}</p>
          ) : null}
        </div>

        <div className="perf-views__outer" ref={outerRef}>
          <div
            className="perf-views__track perf-views__track--auto"
            ref={trackRef}
            style={
              metrics.loopWidth
                ? { "--perf-views-loop": `-${metrics.loopWidth}px` }
                : undefined
            }
          >
            {loopItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="perf-views__card"
                style={
                  metrics.cardWidth
                    ? { width: `${metrics.cardWidth}px` }
                    : undefined
                }
              >
                <div className="perf-views__thumb">
                  <PerformanceViewThumb visual={resolveVisual(item)} />
                </div>
                <div className="perf-views__body">
                  <div className="perf-views__tag">
                    {item.tag ?? "Sidago Performance"}
                  </div>
                  <h3 className="perf-views__ctitle">{item.title}</h3>
                  <p className="perf-views__cdesc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
