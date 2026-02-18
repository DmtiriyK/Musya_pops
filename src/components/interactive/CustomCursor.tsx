'use client';

import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks';
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.classList.add('cursor-hidden');

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('cursor-hidden');
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Котик-тень — бежит следом, но отстаёт */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] select-none"
        style={{ fontSize: 14, lineHeight: 1 }}
        animate={{
          x: x - 7,
          y: y - 7,
          scale: isClicking ? 1.3 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 14,
          mass: 1.2,
        }}
      >
        🐈
      </motion.div>

      {/* Основной курсор */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.3,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-primary/60 mix-blend-difference" />
      </motion.div>
    </>
  );
}
