'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideFromLeft, slideFromRight } from '@/lib/animations';

const mockTimelineEvents = [
  { id: '1', date: '2024', title: 'Первый день дома', description: 'Началась новая жизнь, полная приключений', emoji: '🏠' },
  { id: '2', date: '2024', title: 'Первая игрушка', description: 'Любовь с первого взгляда к мячику', emoji: '🎾' },
  { id: '3', date: '2024', title: 'Освоение территории', description: 'Каждый уголок квартиры исследован', emoji: '🗺️' },
  { id: '4', date: '2025', title: 'Первый ветеринар', description: 'Храбро перенесли осмотр', emoji: '🏥' },
  { id: '5', date: '2025', title: 'Мастер зумис', description: 'Покорили скорость света в коридоре', emoji: '⚡' },
  { id: '6', date: '2026', title: 'Сегодня', description: 'Продолжаем радовать каждый день', emoji: '⭐' },
];

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-accent/10 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Путь к звёздности
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Вертикальная линия */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {mockTimelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.id}
                  variants={isLeft ? slideFromLeft : slideFromRight}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Точка на линии */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 bg-primary rounded-full border-4 border-background z-10">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-full opacity-50"
                    />
                  </div>

                  {/* Контент */}
                  <div className={`ml-20 md:ml-0 flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-gradient-to-br from-background to-primary/10 rounded-2xl shadow-lg border border-primary/20"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{event.emoji}</span>
                        <div className="flex-1">
                          <p className="text-sm text-primary font-medium mb-1">{event.date}</p>
                          <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                          <p className="text-foreground/70">{event.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
