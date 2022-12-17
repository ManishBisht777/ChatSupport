export const container = {
  hidden: { opacity: 0, y: "5%" },
  show: {
    opacity: 1,
    transition: {
      y: "0%",
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const fromright = {
  hidden: { opacity: 0, y: "10%" },
  show: {
    opacity: 1,
    transition: {
      y: "0%",
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
