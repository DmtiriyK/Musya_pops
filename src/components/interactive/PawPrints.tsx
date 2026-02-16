'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTERACTIVE_SETTINGS } from '@/lib/constants';

interface PawPrint {
  id: string;
  x: number;
  y: number;
  rotation: number;
}

export default function PawPrints() {
  const [prints, setPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Создаём новый след
      const newPrint: PawPrint = {
        id: `${Date.now()}-${Math.random()}`,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 360,
      };

      setPrints((prev) => [...prev, newPrint]);

      // Удаляем след через заданное время
      setTimeout(() => {
        setPrints((prev) => prev.filter((p) => p.id !== newPrint.id));
      }, INTERACTIVE_SETTINGS.pawPrintLifetime);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {prints.map((print) => (
          <motion.div
            key={print.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              left: print.x - 15,
              top: print.y - 15,
              rotate: print.rotation,
            }}
            className="text-3xl text-primary"
          >
            🐾
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
