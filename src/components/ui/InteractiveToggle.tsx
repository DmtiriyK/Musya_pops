'use client';

import { motion } from 'framer-motion';
import { useInteractive } from '../interactive/InteractiveProvider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InteractiveToggle() {
  const { isEnabled, toggleInteractive } = useInteractive();
  const { t } = useLanguage();

  return (
    <motion.button
      onClick={toggleInteractive}
      className="fixed bottom-10 left-10 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isEnabled ? t.interactive.toggleOn : t.interactive.toggleOff}
    >
      {isEnabled ? '✨' : '💤'}
    </motion.button>
  );
}
