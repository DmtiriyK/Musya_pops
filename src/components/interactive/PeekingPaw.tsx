'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PeekingPaw() {
  const [visible, setVisible] = useState(false);
  const [xPos, setXPos] = useState(20);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const show = () => {
      setXPos(8 + Math.random() * 84);
      setVisible(true);
      setTimeout(() => setVisible(false), 2800);
      timer = setTimeout(show, 70000 + Math.random() * 50000);
    };

    // Первое появление через 25 секунд
    timer = setTimeout(show, 25000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="peeking-paw"
          className="fixed bottom-0 z-[9990] pointer-events-none"
          style={{ left: `${xPos}%` }}
          initial={{ y: 56 }}
          animate={{ y: 0 }}
          exit={{ y: 56 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="text-primary/50 drop-shadow-md"
          >
            {/* Основная подушечка */}
            <ellipse cx="50" cy="68" rx="23" ry="20" />
            {/* Пальчики */}
            <ellipse cx="24" cy="46" rx="11" ry="9" />
            <ellipse cx="44" cy="33" rx="11" ry="9" />
            <ellipse cx="66" cy="35" rx="11" ry="9" />
            <ellipse cx="81" cy="50" rx="10" ry="9" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
