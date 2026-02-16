'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';

const mockVideos = [
  { id: '1', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.02.mp4', title: 'Утренние зумис', description: 'Классический забег в 5 утра' },
  { id: '2', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.06.mp4', title: 'Охота на игрушку', description: 'Безупречная техника' },
  { id: '3', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.08.mp4', title: 'Время обеда', description: 'Самый важный момент дня' },
  { id: '4', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.09.mp4', title: 'Сонное царство', description: '18 часов в день' },
  { id: '5', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.11.mp4', title: 'Игривый момент', description: 'Время развлечений' },
  { id: '6', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.13.mp4', title: 'Любопытство', description: 'Исследование территории' },
  { id: '7', src: '/videos/WhatsApp Video 2026-02-16 at 15.13.15.mp4', title: 'Ласковая мурка', description: 'Просит внимания' },
];

export default function VideoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-background to-accent/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
        >
          Видео-хроники
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {mockVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={slideUp}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
                <video 
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-foreground/60">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
