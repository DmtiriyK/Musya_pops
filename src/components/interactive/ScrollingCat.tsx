'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollPosition } from '@/hooks';

export default function ScrollingCat() {
  const { scrollYProgress } = useScroll();
  const { scrollProgress } = useScrollPosition();
  
  // Вращение кошки в зависимости от скролла
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); // 2 полных оборота
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  
  return (
    <motion.div
      className="fixed bottom-10 right-10 z-50 pointer-events-none"
      style={{ rotate, scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0.05 ? 1 : 0 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-6xl md:text-8xl drop-shadow-2xl"
      >
        🐱
      </motion.div>
      
      {/* Прогресс индикатор */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-1 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </motion.div>
  );
}
