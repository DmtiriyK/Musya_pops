'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/contexts/LanguageContext';

const videoSrcs = [
  '/videos/WhatsApp Video 2026-02-16 at 15.13.02.mp4',
  '/videos/WhatsApp Video 2026-02-16 at 15.13.03.mp4',
  '/videos/WhatsApp Video 2026-02-16 at 15.13.04.mp4',
  '/videos/WhatsApp Video 2026-02-16 at 15.13.09.mp4',
  '/videos/WhatsApp Video 2026-02-16 at 15.13.11.mp4',
  '/videos/WhatsApp Video 2026-02-16 at 15.13.07.mp4',
];

export default function VideoSection() {
  const { t, lang } = useLanguage();
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
          {t.videos.sectionTitle}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {t.videos.items.map((video, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
                <video
                  src={videoSrcs[index]}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  {lang === 'en' ? 'Your browser does not support video.' : 'Ваш браузер не поддерживает видео.'}
                </video>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
