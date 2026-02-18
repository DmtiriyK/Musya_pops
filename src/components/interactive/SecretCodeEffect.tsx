'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSecretCode } from '@/hooks/useSecretCode';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SecretCodeEffect() {
  const [active, setActive] = useState(false);
  const { lang } = useLanguage();

  // Генерируем позиции лапок один раз на клиенте
  const pawsRef = useRef(
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: 4 + Math.random() * 92,
      y: 4 + Math.random() * 92,
      rotate: Math.random() * 360,
      delay: i * 0.055,
    }))
  );

  const trigger = useCallback(() => {
    if (active) return;
    setActive(true);
    setTimeout(() => setActive(false), 3200);
  }, [active]);

  useSecretCode(trigger);

  const msg = lang === 'ru' ? '🐾 Муся одобряет' : '🐾 Musya approves';

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="secret-effect"
          className="fixed inset-0 z-[9995] pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Следы лапок */}
          {pawsRef.current.map((p) => (
            <motion.div
              key={p.id}
              className="absolute text-2xl select-none"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              initial={{ opacity: 0, scale: 0, rotate: p.rotate }}
              animate={{ opacity: [0, 0.9, 0], scale: [0, 1.3, 1], rotate: p.rotate + 20 }}
              transition={{ delay: p.delay, duration: 1.4, ease: 'easeOut' }}
            >
              🐾
            </motion.div>
          ))}

          {/* Сообщение */}
          <motion.div
            className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-foreground font-bold text-xl px-8 py-4 rounded-2xl shadow-2xl border border-primary/30"
            initial={{ scale: 0, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 24 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 320, damping: 22 }}
          >
            {msg}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
