'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideUp, scaleIn } from '@/lib/animations';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  // Typewriter для breed
  const [displayedBreed, setDisplayedBreed] = useState('');
  const [breedDone, setBreedDone] = useState(false);

  useEffect(() => {
    setDisplayedBreed('');
    setBreedDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedBreed(t.cat.breed.slice(0, i));
      if (i >= t.cat.breed.length) {
        clearInterval(timer);
        setBreedDone(true);
      }
    }, 38);
    return () => clearInterval(timer);
  }, [t.cat.breed]);

  // Тройной клик на имя
  const [clickCount, setClickCount] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleNameClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    clearTimeout(clickTimerRef.current);
    if (next >= 3) {
      setClickCount(0);
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 2200);
    } else {
      clickTimerRef.current = setTimeout(() => setClickCount(0), 1000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Левая часть - текст */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.h1
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="relative inline-block text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent cursor-pointer select-none"
              onClick={handleNameClick}
            >
              {t.cat.name}
              <AnimatePresence>
                {showHearts && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute text-2xl pointer-events-none"
                        style={{ left: `${8 + i * 15}%`, top: '-10%' }}
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -55 }}
                        transition={{ duration: 1.4, delay: i * 0.08 }}
                      >
                        💗
                      </motion.span>
                    ))}
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-sm bg-white/90 dark:bg-zinc-900/90 text-foreground px-4 py-2 rounded-xl shadow-lg border border-primary/20 font-normal whitespace-nowrap"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    >
                      мур 🐾
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.h1>
            
            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-foreground/80 mb-4"
            >
              {displayedBreed}{!breedDone && <span className="opacity-50 animate-pulse">|</span>}
            </motion.p>
            
            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/60 mb-8 max-w-lg"
            >
              {t.cat.description}
            </motion.p>

            {/* Характеристики */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {t.cat.personality.map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors cursor-default"
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>

            {/* Кнопки */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                {t.hero.photoBtn}
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                {t.hero.aboutBtn}
              </button>
            </motion.div>
          </motion.div>

          {/* Правая часть - изображение */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Изображение кошки */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl opacity-20 blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl p-2 backdrop-blur-sm border-2 border-primary/20 overflow-hidden aspect-square">
                  <Image
                    src="/images/hero/WhatsApp Image 2026-02-16 at 15.05.22.jpeg"
                    alt={t.cat.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 512px"
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Декоративные элементы */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-4xl cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
