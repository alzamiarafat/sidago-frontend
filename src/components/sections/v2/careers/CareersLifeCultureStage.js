"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";
import "./careers-life.css";

const TONE_PALETTE = {
  warm: {
    fill: "#ffc4ad",
    bg: "rgba(231,81,47,0.22)",
    stroke: "rgba(231,81,47,0.55)",
    node: "#E7512F",
    nodeGlow: "rgba(231,81,47,0.28)",
    spoke: "rgba(231,81,47,0.72)",
    ping: "#E7512F",
    pill: "bg-[#E7512F]/12 text-[#ffb097]/95",
  },
  cool: {
    fill: "#c8dcec",
    bg: "rgba(122,155,181,0.22)",
    stroke: "rgba(122,155,181,0.55)",
    node: "#8AADCA",
    nodeGlow: "rgba(122,155,181,0.28)",
    spoke: "rgba(122,155,181,0.68)",
    ping: "#8AADCA",
    pill: "bg-[#7A9BB5]/12 text-[#b8d0e4]/95",
  },
  hot: {
    fill: "#ffd0b8",
    bg: "rgba(255,138,92,0.22)",
    stroke: "rgba(255,138,92,0.55)",
    node: "#FF9A6E",
    nodeGlow: "rgba(255,138,92,0.28)",
    spoke: "rgba(255,138,92,0.7)",
    ping: "#FF9A6E",
    pill: "bg-[#FF8A5C]/12 text-[#ffc4a8]/95",
  },
  glow: {
    fill: "#ffe8b8",
    bg: "rgba(255,179,71,0.22)",
    stroke: "rgba(255,179,71,0.55)",
    node: "#FFC060",
    nodeGlow: "rgba(255,179,71,0.28)",
    spoke: "rgba(255,179,71,0.65)",
    ping: "#FFC060",
    pill: "bg-[#FFB347]/12 text-[#ffe0a8]/95",
  },
};

const DEFAULT_PILLARS = [
  { label: "Shared meals", tone: "warm" },
  { label: "Game nights", tone: "hot" },
  { label: "Offsites", tone: "cool" },
  { label: "Interest clubs", tone: "glow" },
  { label: "Workshops", tone: "warm" },
  { label: "Mentorship", tone: "hot" },
];

const CX = 200;
const CY = 200;
const NODE_RADIUS = 132;

function resolveTone(tone, index = 0) {
  if (tone && TONE_PALETTE[tone]) return tone;
  if (tone === "green") return "cool";
  if (tone === "orange") return "warm";
  return ["warm", "hot", "cool", "glow"][index % 4];
}

function getToneColors(tone, index = 0) {
  return TONE_PALETTE[resolveTone(tone, index)];
}

function polarPoint(angleDeg, radius = NODE_RADIUS) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function labelAnchor(angle) {
  if (angle > 30 && angle < 150) return "middle";
  if (angle >= 150 && angle < 210) return "end";
  if (angle >= 210 && angle < 330) return "middle";
  return "start";
}

function useCountUp(value, suffix, durationMs, delayMs, active) {
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!active) return undefined;

    let frameId;
    const timeoutId = window.setTimeout(() => {
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplay(`${Math.round(value * eased)}${suffix}`);

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, suffix, durationMs, delayMs, active]);

  return display;
}

function NodeLabel({ x, y, text, colors, anchor, active }) {
  const width = Math.max(text.length * 5.8 + 18, 54);
  const rectX =
    anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width - 4 : x + 4;

  return (
    <g opacity={active ? 1 : 0.94}>
      <rect
        x={rectX}
        y={y - 10}
        width={width}
        height={20}
        rx={3}
        fill={colors.bg}
        stroke={colors.stroke}
        strokeWidth={active ? 1.2 : 0.8}
      />
      <text
        x={anchor === "middle" ? x : anchor === "end" ? x - 8 : x + 8}
        y={y + 0.5}
        textAnchor={anchor}
        dominantBaseline="middle"
        fill={colors.fill}
        fontSize="8.5"
        letterSpacing="0.12em"
        style={{ textTransform: "uppercase", fontFamily: "var(--font-blender, sans-serif)" }}
      >
        {text}
      </text>
    </g>
  );
}

function CultureCompass({ pillars, reduce, activeIndex, onHoverIndex }) {
  const uid = useId().replace(/:/g, "");
  const angles = pillars.map((_, index) => (360 / pillars.length) * index);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="careers-life-compass-frame bevel bevel-2 relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden p-3 md:p-4"
    >
      <svg
        viewBox="0 0 400 400"
        className="relative z-[1] h-full w-full"
        role="img"
        aria-label="Sidago culture connection compass"
      >
        <defs>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(231,81,47,0.42)" />
            <stop offset="45%" stopColor="rgba(122,155,181,0.18)" />
            <stop offset="100%" stopColor="rgba(10,12,16,0)" />
          </radialGradient>
          <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {angles.map((angle, index) => {
            const point = polarPoint(angle);
            return (
              <path
                key={`path-${index}`}
                id={`${uid}-spoke-${index}`}
                d={`M ${CX} ${CY} L ${point.x} ${point.y}`}
                fill="none"
              />
            );
          })}
        </defs>

        {!reduce ? (
          <g className="careers-life-scan" opacity="0.32">
            <path
              d={`M ${CX} ${CY} L ${CX} ${CY - 172} A 172 172 0 0 1 ${CX + 86} ${CY - 149} Z`}
              fill="rgba(231,81,47,0.06)"
            />
          </g>
        ) : null}

        <circle cx={CX} cy={CY} r="172" fill={`url(#${uid}-glow)`} />

        <g className={reduce ? undefined : "careers-life-ring-spin-reverse"}>
          <circle
            cx={CX}
            cy={CY}
            r="166"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="2 12"
          />
        </g>

        <g className={reduce ? undefined : "careers-life-ring-spin"}>
          <circle
            cx={CX}
            cy={CY}
            r="148"
            fill="none"
            stroke="rgba(231,81,47,0.28)"
            strokeWidth="1"
            strokeDasharray="5 10"
          />
          <circle
            cx={CX}
            cy={CY}
            r="134"
            fill="none"
            stroke="rgba(122,155,181,0.24)"
            strokeWidth="1"
            strokeDasharray="3 9"
          />
        </g>

        <circle cx={CX} cy={CY} r="112" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle
          cx={CX}
          cy={CY}
          r="74"
          fill="none"
          stroke="rgba(255,138,92,0.24)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />

        {!reduce ? (
          <circle
            cx={CX}
            cy={CY}
            r="58"
            fill="none"
            stroke="rgba(255,179,71,0.36)"
            strokeWidth="1"
            className="careers-life-core-ring"
          />
        ) : null}

        {angles.map((angle, index) => {
          const point = polarPoint(angle);
          const colors = getToneColors(pillars[index]?.tone, index);
          const isActive = activeIndex === index;
          const dimmed = activeIndex !== null && !isActive;

          return (
            <g
              key={pillars[index]?.label ?? angle}
              opacity={dimmed ? 0.62 : 1}
              onMouseEnter={() => onHoverIndex(index)}
              onMouseLeave={() => onHoverIndex(null)}
              style={{ cursor: "default" }}
            >
              <line
                x1={CX}
                y1={CY}
                x2={point.x}
                y2={point.y}
                stroke={colors.spoke}
                strokeWidth={isActive ? 2.25 : 1.5}
                className={reduce ? undefined : "careers-life-spoke"}
                style={{ animationDelay: `${index * 0.3}s` }}
              />

              {!reduce ? (
                <>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="10"
                    fill="none"
                    stroke={colors.ping}
                    strokeWidth="1"
                    className="careers-life-signal-ping"
                    style={{ animationDelay: `${index * 0.45}s` }}
                  />
                  <circle r="2.5" fill={colors.node}>
                    <animateMotion
                      dur={`${2.2 + index * 0.15}s`}
                      repeatCount="indefinite"
                      begin={`${index * 0.35}s`}
                    >
                      <mpath href={`#${uid}-spoke-${index}`} />
                    </animateMotion>
                  </circle>
                </>
              ) : null}

              <circle
                cx={point.x}
                cy={point.y}
                r={isActive ? 14 : 11}
                fill={colors.nodeGlow}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r={isActive ? 6 : 5}
                fill={colors.node}
                className={reduce ? undefined : "careers-life-node-pulse"}
                style={{ animationDelay: `${index * 0.45}s` }}
              />
            </g>
          );
        })}

        <g filter={`url(#${uid}-soft)`}>
          <rect
            x="141"
            y="141"
            width="118"
            height="118"
            fill="#1a2030"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <text
            x={CX}
            y="186"
            textAnchor="middle"
            fill="#E7512F"
            fontSize="8"
            letterSpacing="0.24em"
            style={{ textTransform: "uppercase", fontFamily: "var(--font-blender, sans-serif)" }}
          >
            Sidago
          </text>
          <text
            x={CX}
            y="208"
            textAnchor="middle"
            fill="#E9EEE9"
            fontSize="15"
            fontWeight="500"
            style={{ fontFamily: "var(--font-saans, sans-serif)" }}
          >
            Culture
          </text>
          <text
            x={CX}
            y="226"
            textAnchor="middle"
            fill="#8a8a82"
            fontSize="8"
            letterSpacing="0.18em"
            style={{ textTransform: "uppercase", fontFamily: "var(--font-blender, sans-serif)" }}
          >
            Core
          </text>
        </g>

        {angles.map((angle, index) => {
          const point = polarPoint(angle, NODE_RADIUS + 38);
          const colors = getToneColors(pillars[index]?.tone, index);
          const dimmed = activeIndex !== null && activeIndex !== index;

          return (
            <g
              key={`label-${pillars[index]?.label ?? angle}`}
              opacity={dimmed ? 0.68 : 1}
              onMouseEnter={() => onHoverIndex(index)}
              onMouseLeave={() => onHoverIndex(null)}
            >
              <NodeLabel
                x={point.x}
                y={point.y}
                text={pillars[index]?.label ?? ""}
                colors={colors}
                anchor={labelAnchor(angle)}
                active={activeIndex === index}
              />
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}

function StatBlock({ value, label, active, index, accent }) {
  const [hovered, setHovered] = useState(false);
  const accentClass =
    accent === "warm"
      ? "careers-life-stat-card--warm"
      : accent === "hot"
        ? "careers-life-stat-card--hot"
        : "careers-life-stat-card--cool";
  const dotColor =
    accent === "warm" ? "#E7512F" : accent === "hot" ? "#FF8A5C" : "#7A9BB5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
      className={`careers-life-stat-card bevel bevel-[0.25rem] relative overflow-hidden bg-white/[0.03] px-4 py-4 backdrop-blur-sm ${accentClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${dotColor}, transparent)`,
          opacity: hovered || active ? 1 : 0.35,
        }}
        aria-hidden
      />
      <div
        className="font-blender leading-none text-gray-off-white"
        style={{
          ["--stat-width"]: "92px",
          ["--active-color"]: dotColor,
        }}
      >
        <DotMatrixText
          text={String(value)}
          active={active || hovered}
          dotSize={1}
          dotSpacing={2}
          dotColor="#E9EEE9"
          activeDotColor={dotColor}
          fontSizeMobile={30}
          fontSizeDesktop={38}
        />
      </div>
      <p className="mt-3 font-blender text-[10px] uppercase tracking-[0.14em] text-gray-tradfi-silver">
        {label}
      </p>
    </motion.div>
  );
}

export default function CareersLifeCultureStage({
  label = "Culture orbit",
  footTitle = "Where teams actually connect",
  footDescription = "",
  stats = [],
  pillars = DEFAULT_PILLARS,
}) {
  const stageRef = useRef(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [cycleIndex, setCycleIndex] = useState(0);

  const stat0 = stats[0];
  const stat1 = stats[1];
  const stat2 = stats[2];

  const count0 = useCountUp(stat0?.value ?? 52, stat0?.suffix ?? "", 1100, 250, active);
  const count1 = useCountUp(stat1?.value ?? 0, stat1?.suffix ?? "", 700, 250, active);
  const count2 = useCountUp(stat2?.value ?? 100, stat2?.suffix ?? "%", 1300, 250, active);

  const displayStats = [
    { value: count0, label: stat0?.label ?? "events / year", accent: "warm" },
    { value: count1, label: stat1?.label ?? "hierarchy layers", accent: "hot" },
    { value: count2, label: stat2?.label ?? "teams connected", accent: "cool" },
  ];

  const spotlightIndex = hoveredNode ?? cycleIndex;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.15 },
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || hoveredNode !== null || !active) return undefined;

    const intervalId = window.setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % pillars.length);
    }, 2600);

    return () => clearInterval(intervalId);
  }, [reduce, hoveredNode, active, pillars.length]);

  const marqueeItems = [...pillars, ...pillars, ...pillars];

  return (
    <div
      ref={stageRef}
      className="careers-life-rise careers-life-rise-delay-3 careers-life-stage-shell bevel bevel-2 relative isolate overflow-hidden"
    >
      <div className="relative z-[2] flex items-center justify-between border-b border-white/[0.06] px-5 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <span className="careers-life-pulse-dot h-[7px] w-[7px] rounded-full bg-[#E7512F]" />
          <span className="font-blender text-xs uppercase tracking-[0.14em] text-gray-tradfi-silver">
            {label}
          </span>
        </div>
        <div className="font-mono text-[11px]">
          <span className="careers-life-live-blink text-[#FF8A5C]">LIVE</span>
          <span className="ml-2 text-gray-tradfi-silver">— {pillars.length} touchpoints</span>
        </div>
      </div>

      <div className="relative z-[2] grid gap-10 px-5 py-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <div className="relative pl-5">
            <span
              className="absolute left-0 top-1 h-[calc(100%-4px)] w-px bg-gradient-to-b from-[#E7512F] via-[#7A9BB5]/70 to-transparent"
              aria-hidden
            />
            <p className="font-blender text-[10px] uppercase tracking-[0.2em] text-[#FF8A5C]">
              Inside the orbit
            </p>
            <h3 className="mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-gray-off-white md:text-[1.85rem]">
              {footTitle}
            </h3>
            {footDescription ? (
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-tradfi-silver md:text-[0.95rem]">
                {footDescription}
              </p>
            ) : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {displayStats.map((item, index) => (
              <StatBlock
                key={item.label}
                value={item.value}
                label={item.label}
                active={active}
                index={index}
                accent={item.accent}
              />
            ))}
          </div>
        </motion.div>

        <CultureCompass
          pillars={pillars}
          reduce={reduce}
          activeIndex={spotlightIndex}
          onHoverIndex={setHoveredNode}
        />
      </div>

      <div className="careers-life-marquee-mask relative z-[2] overflow-hidden border-t border-white/[0.06] py-3.5">
        <div className={`flex w-max gap-3 ${reduce ? "" : "careers-life-marquee-track"}`}>
          {marqueeItems.map((pillar, index) => {
            const colors = getToneColors(pillar.tone, index % pillars.length);
            return (
              <span
                key={`${pillar.label}-${index}`}
                className={`bevel bevel-[0.25rem] whitespace-nowrap px-4 py-2 text-[10px] uppercase tracking-[0.14em] ${colors.pill}`}
              >
                {pillar.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
