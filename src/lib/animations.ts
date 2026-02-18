import { Variants } from 'framer-motion';
import { ANIMATION_DURATIONS } from './constants';

// Fade In анимация
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: ANIMATION_DURATIONS.normal }
  }
};

// Slide Up анимация
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_DURATIONS.normal }
  }
};

// Slide From Left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: ANIMATION_DURATIONS.normal }
  }
};

// Slide From Right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: ANIMATION_DURATIONS.normal }
  }
};

// Scale In анимация
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: ANIMATION_DURATIONS.normal }
  }
};

// Bounce анимация
export const bounce = {
  y: [0, -20, 0],
  transition: {
    duration: ANIMATION_DURATIONS.slow,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Анимация для контейнера (последовательное появление детей)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
