'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
      className="fixed top-4 right-4 z-[100] flex items-center gap-1 px-3 py-1.5 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-sm font-medium text-foreground/70 hover:text-foreground transition-all backdrop-blur-sm"
      aria-label="Switch language"
    >
      <span className={lang === 'ru' ? 'text-foreground font-semibold' : 'text-foreground/40'}>RU</span>
      <span className="text-foreground/30">/</span>
      <span className={lang === 'en' ? 'text-foreground font-semibold' : 'text-foreground/40'}>EN</span>
    </motion.button>
  );
}
