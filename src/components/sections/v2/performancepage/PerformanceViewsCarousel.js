"use client";

import Link from "next/link";
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

export default function PerformanceViewsCarousel({ section, visibleCount = 4 }) {
  const items = section?.items ?? [];
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const loopItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const updateWidth = () => {
      if (!outerRef.current || !trackRef.current || !items.length) return;
      const outerWidth = outerRef.current.offsetWidth;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 20;
      const width = (outerWidth - gap * (visibleCount - 1)) / visibleCount;
      setCardWidth(width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [items.length, visibleCount]);

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
          <div className="perf-views__track perf-views__track--auto" ref={trackRef}>
            {loopItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="perf-views__card"
                style={cardWidth ? { width: `${cardWidth}px` } : undefined}
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
                  {item.href ? (
                    <Link href={item.href} className="perf-views__clink">
                      Learn more →
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
