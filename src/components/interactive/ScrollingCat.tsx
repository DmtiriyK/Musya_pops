'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollingCat() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
      style={{ opacity }}
    >
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
