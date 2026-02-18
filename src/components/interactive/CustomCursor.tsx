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
  );
}
