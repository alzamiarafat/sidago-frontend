/** Shared Framer Motion presets for Digital Support Services page */
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const viewportOnce = { once: true, amount: 0.12 };
