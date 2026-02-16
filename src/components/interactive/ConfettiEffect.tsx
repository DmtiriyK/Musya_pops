'use client';

import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { INTERACTIVE_SETTINGS } from '@/lib/constants';

export default function ConfettiEffect() {
  const hasTriggered = useRef(false);

  useEffect(() => {
    const triggerConfetti = () => {
      if (hasTriggered.current) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Конфетти при достижении 50% страницы
      if (scrollPercent > 50) {
        hasTriggered.current = true;

        // Множественные залпы конфетти
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
          confetti({
            particleCount: INTERACTIVE_SETTINGS.confettiCount / 10,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              y: Math.random() - 0.2,
            },
            colors: ['#FF6B9D', '#FFA94D', '#FFE66D'],
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };

        frame();

        // Разрешаем повторный запуск через некоторое время
        setTimeout(() => {
          hasTriggered.current = false;
        }, 30000);
      }
    };

    window.addEventListener('scroll', triggerConfetti, { passive: true });
    return () => window.removeEventListener('scroll', triggerConfetti);
  }, []);

  // Конфетти при загрузке страницы
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B9D', '#FFA94D', '#FFE66D'],
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
