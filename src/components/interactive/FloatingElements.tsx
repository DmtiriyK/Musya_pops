'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  emoji: string;
  delay: number;
  duration: number;
  x: string;
  size: number;
}

export default function FloatingElements() {
  const particles = useMemo<Particle[]>(() => {
    const emojis = ['✨', '⭐', '💫', '🌟', '💖', '🐾', '🎀', '🎈'];
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      x: `${Math.random() * 100}%`,
      size: 20 + Math.random() * 20,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            fontSize: particle.size,
            top: '-50px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(particle.id) * 100, 0],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
}
