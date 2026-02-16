'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function RunningMouse() {
  const controls = useAnimation();

  useEffect(() => {
    const runAcrossScreen = async () => {
      // Случайная задержка перед следующим забегом
      await new Promise(resolve => setTimeout(resolve, 5000 + Math.random() * 10000));

      // Случайная высота и направление
      const fromRight = Math.random() > 0.5;
      const yPosition = 20 + Math.random() * 60; // 20-80% высоты экрана

      await controls.start({
        x: fromRight ? [window.innerWidth + 100, -100] : [-100, window.innerWidth + 100],
        y: `${yPosition}vh`,
        scaleX: fromRight ? -1 : 1,
        transition: {
          duration: 3 + Math.random() * 2,
          ease: "linear",
        },
      });

      // Рекурсивно запускаем снова
      runAcrossScreen();
    };

    runAcrossScreen();
  }, [controls]);

  return (
    <motion.div
      className="fixed pointer-events-none z-30"
      initial={{ x: -100, y: '50vh' }}
      animate={controls}
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
        }}
        className="text-4xl"
      >
        🐭
      </motion.div>
    </motion.div>
  );
}
