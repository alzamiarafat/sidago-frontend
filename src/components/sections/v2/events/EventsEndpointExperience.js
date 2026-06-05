"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HEADLINE_FONT_SIZE = "clamp(2rem, 6.5vw, 6rem)";

function normalizePanel(panel, index) {
  return {
    id: panel.id,
    index: panel.index ?? String(index + 1).padStart(2, "0"),
    label: panel.label ?? panel.title,
    headline: panel.headline,
    description: panel.description,
    stat: panel.stat ?? panel.highlight?.value,
    statLabel: panel.statLabel ?? panel.highlight?.label,
    color: panel.color ?? panel.accent,
  };
}

const PANELS = [
  {
    id: "spark",
    index: "01",
    label: "Spark",
    headline: "Where ideas begin",
    description:
      "Builders share what they're shipping before it's finished. Raw demos, bold theses, unfinished thoughts — this is where the interesting stuff starts.",
    stat: "28",
    statLabel: "Speakers",
    color: "#F075E4",
  },
  {
    id: "connect",
    index: "02",
    label: "Connect",
    headline: "Collide and connect",
    description:
      "Founders meet operators, researchers meet traders. The room is engineered for collision — conversations continue long after the session.",
    stat: "1,400",
    statLabel: "Attendees",
    color: "#958DEC",
  },
  {
    id: "build",
    index: "03",
    label: "Build",
    headline: "Show what you ship",
    description:
      "Live walkthroughs, technical deep-dives, honest post-mortems. Endpoint rewards substance — builders show their work, not their deck.",
    stat: "30",
    statLabel: "Session hours",
    color: "#00F554",
  },
  {
    id: "signal",
    index: "04",
    label: "Signal",
    headline: "Clarity on what's next",
    description:
      "Leave with a sharper read on crypto infrastructure, markets, and culture — context you cannot get from a feed or a report.",
    stat: "01",
    statLabel: "Exclusive series",
    color: "#7FB2F1",
  },
];

// Word-by-word stagger animation
const wordVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -16, filter: "blur(6px)", transition: { duration: 0.2 } },
};

const descVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.38, duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 1.08, transition: { duration: 0.2 } },
};

function AnimatedHeadline({ text }) {
  const words = text.split(" ");
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mr-[0.28em] inline-block whitespace-nowrap"
          style={{ color: "#ffffff" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function EventsEndpointExperience({
  panels = PANELS,
}) {
  const normalizedPanels = useMemo(
    () => panels.map(normalizePanel),
    [panels],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const activePanel = normalizedPanels[activeIndex] ?? normalizedPanels[0];

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % normalizedPanels.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, normalizedPanels.length]);

  const handleSelect = (i) => {
    setActiveIndex(i);
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="relative flex min-h-[80vh] flex-col overflow-hidden lg:min-h-[75vh]"
      style={{ background: "#070b09" }}
    >
      {/* ── Animated background glow ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePanel.id + "-g1"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background: `radial-gradient(ellipse 55% 65% at 50% 50%, ${activePanel.color}35, transparent 70%)`,
          }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={activePanel.id + "-g2"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background: `radial-gradient(ellipse 30% 30% at 15% 80%, ${activePanel.color}25, transparent 60%)`,
          }}
        />
      </AnimatePresence>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top accent sweep */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePanel.id + "-line"}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left"
          aria-hidden
          style={{
            background: `linear-gradient(90deg, ${activePanel.color}ff 0%, ${activePanel.color}88 40%, transparent 100%)`,
            boxShadow: `0 0 16px ${activePanel.color}88`,
          }}
        />
      </AnimatePresence>

      {/* ── Nav row — top ── */}
      <div className="relative z-20 flex items-center justify-between px-md pt-lg lg:px-xl">
        <p className="font-blender text-[0.65rem] uppercase tracking-[0.38em]" style={{ color: "rgba(255,255,255,0.4)" }}>
          The Endpoint experience
        </p>

        <nav className="flex gap-xl" aria-label="Endpoint panels">
          {normalizedPanels.map((panel, i) => {
            const active = activeIndex === i;
            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => handleSelect(i)}
                aria-pressed={active}
                className="group flex flex-col items-center gap-[6px]"
              >
                <span
                  className="font-blender text-xs tabular-nums tracking-[0.28em] transition-colors duration-300"
                  style={{ color: active ? "#ffffff" : "rgba(255,255,255,0.3)" }}
                >
                  {panel.index}
                </span>
                <span
                  className="font-blender text-xs uppercase tracking-[0.22em] transition-colors duration-300"
                  style={{ color: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.22)" }}
                >
                  {panel.label}
                </span>
                {/* Progress underline */}
                <div className="relative h-[2px] w-8 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.12)" }}>
                  {active && (
                    <motion.div
                      key={panel.id + "-prog"}
                      className="absolute inset-y-0 left-0 origin-left rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: isAutoPlaying ? 5 : 0.3, ease: "linear" }}
                      style={{ background: panel.color, width: "100%", boxShadow: `0 0 6px ${panel.color}` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* ── CENTRE: big content ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-md py-2xl text-center lg:px-xl">

        {/* Stat — glowing number above headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.id + "-stat"}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-lg"
          >
            <span
              className="block tabular-nums leading-none"
              style={{
                fontSize: "clamp(4.5rem,15vw,10rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              {activePanel.stat}
            </span>
            <span
              className="mt-sm block font-blender text-[0.7rem] font-medium uppercase tracking-[0.35em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {activePanel.statLabel}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Animated headline — word by word */}
        <h3
          className="mb-xl w-full font-light leading-[1.08] tracking-tight whitespace-nowrap"
          style={{ fontSize: HEADLINE_FONT_SIZE }}
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activePanel.id + "-headline"}
              className="inline whitespace-nowrap"
            >
              <AnimatedHeadline text={activePanel.headline} />
            </motion.span>
          </AnimatePresence>
        </h3>

        {/* Glowing divider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.id + "-divider"}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-xl h-px w-20 origin-center"
            style={{
              background: `linear-gradient(90deg, transparent, ${activePanel.color}, transparent)`,
              boxShadow: `0 0 12px ${activePanel.color}`,
            }}
          />
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activePanel.id + "-desc"}
            variants={descVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl leading-loose"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(1rem, 1.75vw, 1.375rem)",
            }}
          >
            {activePanel.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="relative z-20 flex items-center px-md pb-lg lg:px-xl"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          paddingTop: "1.25rem",
        }}
      >
        {/* Panel indicators with brand color bg */}
        <div className="flex items-center gap-md">
          {normalizedPanels.map((panel, i) => {
            const active = activeIndex === i;
            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => handleSelect(i)}
                aria-label={panel.label}
                className="group flex flex-col items-start gap-[6px] transition-all duration-300"
              >
                {/* Pill bar */}
                <div
                  className="overflow-hidden rounded-full transition-all duration-300"
                  style={{
                    width: active ? "3.5rem" : "1.25rem",
                    height: "5px",
                    background: active ? panel.color : `${panel.color}33`,
                    boxShadow: active ? `0 0 12px ${panel.color}, 0 0 24px ${panel.color}66` : "none",
                  }}
                >
                  {active && (
                    <motion.div
                      key={panel.id + "-bar"}
                      className="h-full origin-left rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: isAutoPlaying ? 5 : 0.4, ease: "linear" }}
                      style={{ background: panel.color, width: "100%" }}
                    />
                  )}
                </div>
                {/* Label below pill */}
                <span
                  className="font-blender text-[0.6rem] uppercase tracking-[0.2em] transition-all duration-300"
                  style={{ color: active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)" }}
                >
                  {panel.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
