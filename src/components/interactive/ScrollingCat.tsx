'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function ScrollingCat() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const [isSleeping, setIsSleeping] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const wake = () => {
      setIsSleeping(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIsSleeping(true), 20000);
    };

    window.addEventListener('mousemove', wake);
    timer = setTimeout(() => setIsSleeping(true), 20000);

    return () => {
      window.removeEventListener('mousemove', wake);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
      style={{ opacity }}
    >
      {/* Пузырь «z z z» при бездействии */}
      <AnimatePresence>
        {isSleeping && (
          <motion.div
            key="zzz"
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-primary/70 whitespace-nowrap"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
          >
            z z z
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ rotate }}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-2 border-primary/30"
      >
        <Image
          src="/images/musya/Scroll.png"
          alt="Муся"
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
