'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const PHRASES = {
  ru: ['Мяу.', 'Иди корми.', 'Мне всё равно.', '…мур', 'Чего смотришь?', 'Ну и ладно.'],
  en: ['Meow.', 'Go feed me.', 'I could not care less.', '…purr', "What're you looking at?", 'Fine then.'],
};

export default function Footer() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [phraseIdx, setPhraseIdx] = useState(0);
  const phrases = PHRASES[lang];
  const greeting = phrases[phraseIdx % phrases.length];

  const handleGreetingClick = () => setPhraseIdx(i => i + 1);

  return (
    <footer className="relative py-12 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute top-20 right-20 text-6xl">🐾</div>
        <div className="absolute bottom-10 left-1/4 text-6xl">🐾</div>
        <div className="absolute bottom-20 right-1/4 text-6xl">🐾</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Верхняя часть */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4 inline-block"
            >
              🐱
            </motion.div>
            <motion.h3
              key={phraseIdx}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2 cursor-pointer select-none"
              onClick={handleGreetingClick}
              title={lang === 'ru' ? 'Нажми ещё раз' : 'Click again'}
            >
              {greeting}
            </motion.h3>
            <p className="text-foreground/60">
              {t.footer.thanks}
            </p>
          </div>

          {/* Разделитель */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

          {/* Нижняя часть */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <span>{t.footer.madeWith}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-primary" />
              </motion.div>
              <span>{t.footer.forTheBest}</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <span>© {currentYear}</span>
            </div>
          </div>

          {/* Дополнительная информация */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 text-center text-xs text-foreground/40"
          >
            <p>Next.js • TypeScript • Tailwind CSS • Framer Motion</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
