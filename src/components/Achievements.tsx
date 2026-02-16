'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scaleIn, staggerContainer } from '@/lib/animations';

const mockAchievements = [
  { id: '1', title: 'Мастер сна', description: '20 часов в день', icon: '😴', color: 'from-primary to-secondary' },
  { id: '2', title: 'Ловкач', description: 'Поймано 1000+ игрушек', icon: '🎯', color: 'from-secondary to-accent' },
  { id: '3', title: 'Гурман', description: 'Опробовано 50+ вкусов', icon: '🍽️', color: 'from-accent to-primary' },
  { id: '4', title: 'Атлет', description: 'Зумис каждую ночь', icon: '⚡', color: 'from-primary to-accent' },
  { id: '5', title: 'Социальная бабочка', description: '100% людей очаровано', icon: '💖', color: 'from-secondary to-primary' },
  { id: '6', title: 'Исследователь', description: 'Каждый угол изучен', icon: '🗺️', color: 'from-accent to-secondary' },
];

export default function Achievements() {
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
            Достижения
          </h2>
          <p className="text-xl text-foreground/60">Награды за выдающиеся заслуги</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {mockAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className={`relative p-6 bg-gradient-to-br ${achievement.color} rounded-2xl overflow-hidden`}>
                {/* Фоновое свечение */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                
                {/* Контент */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-6xl mb-4"
                  >
                    {achievement.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-white/90">{achievement.description}</p>
                </div>

                {/* Декоративные элементы */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute top-2 right-2 w-20 h-20 bg-white/20 rounded-full blur-xl"
                />
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
          {[
            { value: '100%', label: 'Мимимишность' },
            { value: '∞', label: 'Любовь' },
            { value: '24/7', label: 'Мурчание' },
            { value: '🏆', label: 'Лучший кот' },
          ].map((stat, index) => (
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
