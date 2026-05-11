/**
 * Framer Motion presets — Support & Compliance page
 * Reusable animation objects for scroll, stagger, hover, and micro-interactions.
 */

const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.48, ease: easeOut },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

/** Default viewport for whileInView sections */
export const viewportOnce = { once: true, amount: 0.11 };

/** Slightly earlier trigger for dense grids */
export const viewportOnceTight = { once: true, amount: 0.08 };

/** Card hover lift (use with whileHover / whileTap on motion components) */
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -3,
    scale: 1.01,
    transition: { duration: 0.28, ease: easeOut },
  },
  tap: { scale: 0.995 },
};

/** Icon / badge entrance */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.42, ease: easeOut },
  },
};

/** Shared transition tokens */
export const transitionSoft = { duration: 0.5, ease: easeOut };
export const transitionQuick = { duration: 0.28, ease: easeOut };

/** Subtle spring for accordions or toggles */
export const springSnappy = { type: "spring", stiffness: 420, damping: 32 };
