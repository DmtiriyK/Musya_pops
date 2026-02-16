'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideFromLeft, slideFromRight } from '@/lib/animations';
import { CAT_INFO } from '@/lib/constants';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          О нашей звезде
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Фото */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19.jpeg"
                alt="О кошке"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Декоративный элемент */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Текст */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">Знакомьтесь, {CAT_INFO.name}!</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {CAT_INFO.description}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Каждый день приносит новые приключения, смешные моменты и море позитива. От утреннего мяуканья до вечерних зумис — жизнь с этой кошкой никогда не бывает скучной!
              </p>
            </div>

            {/* Факты */}
            <div className="space-y-3 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl"
              >
                <span className="text-2xl">🎂</span>
                <div>
                  <p className="font-medium text-primary">Возраст</p>
                  <p className="text-foreground/70">{CAT_INFO.age} лет</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl"
              >
                <span className="text-2xl">🐾</span>
                <div>
                  <p className="font-medium text-secondary">Порода</p>
                  <p className="text-foreground/70">{CAT_INFO.breed}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl"
              >
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-medium text-accent">Характер</p>
                  <p className="text-foreground/70">{CAT_INFO.personality.join(', ')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
