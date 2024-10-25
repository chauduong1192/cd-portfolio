import { Variants } from 'framer-motion';

export const fadeInY = (direction = 'up', duration = 0.8): Variants => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: 'easeInOut',
      },
    },
  };
};

export const fadeInX = (direction = 'left'): Variants => {
  return {
    initial: {
      x: direction === 'left' ? -60 : 40,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
};
