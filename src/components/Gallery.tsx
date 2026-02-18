'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, scaleIn, staggerContainer } from '@/lib/animations';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const gallerySrcs = [
  '/images/gallery/924656c7-13de-4566-bb6a-f4031f016761.jpg',
  '/images/gallery/a0df2bf0-f234-49ef-a456-9019bc25eb61.jpg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.16.jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (3).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (4).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17.jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (3).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (4).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18.jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.19.jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19.jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (3).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (4).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21.jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (2).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (3).jpeg',
  '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (4).jpeg',
];

export default function Gallery() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setSelectedImage((prev) => prev !== null ? (prev + 1) % gallerySrcs.length : null);
  }, []);

  const goPrev = useCallback(() => {
    setSelectedImage((prev) => prev !== null ? (prev - 1 + gallerySrcs.length) % gallerySrcs.length : null);
  }, []);

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage, goNext, goPrev]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-secondary/10 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
        >
          {t.gallery.sectionTitle}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          {gallerySrcs.map((src, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={src}
                alt={t.gallery.captions[index] ?? ''}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium text-sm">{t.gallery.captions[index]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={gallerySrcs[selectedImage]}
                  alt={t.gallery.captions[selectedImage] ?? ''}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                />
              </div>

              {/* Стрелки */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full text-white font-bold text-xl flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full text-white font-bold text-xl flex items-center justify-center transition-colors"
              >
                ›
              </button>

              {/* Закрыть */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full text-white flex items-center justify-center text-lg transition-colors"
              >
                ×
              </button>

              {/* Подпись + счётчик */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 flex items-center justify-between">
                <p className="text-white font-medium">{t.gallery.captions[selectedImage]}</p>
                <span className="text-white/60 text-sm">{selectedImage + 1} / {gallerySrcs.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  );
}
