'use client';

import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks';
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Скрываем стандартный курсор */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Кастомный курсор */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="text-4xl drop-shadow-lg">
          🐾
        </div>
      </motion.div>

      {/* Трейл за курсором */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary/30 pointer-events-none z-[9998]"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </>
  );
}
