'use client';

import { motion, useScroll } from 'framer-motion';
import { useScrollPosition } from '@/hooks';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { scrollProgress } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-2">
      {/* Прогресс бар */}
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Идущая кошка */}
      {scrollProgress > 0.01 && (
        <motion.div
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${scrollProgress * 100}%`,
            x: '-50%',
          }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl -mt-1"
          >
            🐈
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
