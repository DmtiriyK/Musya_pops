'use client';

import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks';
import { useState, useEffect } from 'react';

export default function CatCompanion() {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [emoji, setEmoji] = useState('😺');

  useEffect(() => {
    // Показываем компаньона через 3 секунды после загрузки
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Меняем эмоцию в зависимости от скорости движения мыши
    const emojis = ['😺', '😸', '😻', '😽', '🙀'];
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }, [Math.floor(x / 100), Math.floor(y / 100)]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-20"
      animate={{
        x: x - 100,
        y: y - 100,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 0.5,
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-5xl drop-shadow-xl relative"
      >
        {emoji}
        
        {/* Пузырёк с мыслями */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -top-8 -right-8 text-xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          💭
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
