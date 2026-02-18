'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scaleIn, staggerContainer } from '@/lib/animations';
import confetti from 'canvas-confetti';
import { useLanguage } from '@/contexts/LanguageContext';

const achievementIcons = ['😴', '🎯', '🍽️', '⚡', '💖', '🗺️'];
const achievementColors = [
  'from-primary to-secondary',
  'from-secondary to-accent',
  'from-accent to-primary',
  'from-primary to-accent',
  'from-secondary to-primary',
  'from-accent to-secondary',
];

export default function Achievements() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-background to-primary/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            {t.achievements.sectionTitle}
          </h2>
          <p className="text-xl text-foreground/60">{t.achievements.subtitle}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {t.achievements.items.map((achievement, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer"
              onClick={() => {
                confetti({
                  particleCount: 60,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#FF6B9D', '#FFA94D', '#FFE66D'],
                });
              }}
            >
              <div className={`relative p-6 bg-gradient-to-br ${achievementColors[index]} rounded-2xl overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">{achievementIcons[index]}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-white/90">{achievement.description}</p>
                </div>
                <div className="absolute top-2 right-2 w-20 h-20 bg-white/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {t.achievements.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
