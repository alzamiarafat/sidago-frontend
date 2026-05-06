"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUpStat({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const normalizedValue = `${value ?? ""}`;
  const numericValue = Number.parseInt(normalizedValue, 10);
  const suffix = normalizedValue.replace(String(numericValue), "");

  useEffect(() => {
    const node = ref.current;

    if (!node || hasAnimated || Number.isNaN(numericValue)) {
      return undefined;
    }

    const mediaQuery =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    if (mediaQuery?.matches) {
      window.requestAnimationFrame(() => {
        setDisplayValue(numericValue);
        setHasAnimated(true);
      });
      return undefined;
    }

    const runAnimation = () => {
      const duration = 1400;
      const startTime = performance.now();

      setHasAnimated(true);

      const tick = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        const nextValue = Math.round(numericValue * easedProgress);

        setDisplayValue(nextValue);

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };

      window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated, numericValue]);

  if (Number.isNaN(numericValue)) {
    return <span>{normalizedValue}</span>;
  }

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
