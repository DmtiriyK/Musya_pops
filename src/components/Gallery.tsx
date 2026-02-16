'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, scaleIn, staggerContainer } from '@/lib/animations';
import { useState } from 'react';

const mockGalleryItems = [
  { id: '1', src: '/images/gallery/924656c7-13de-4566-bb6a-f4031f016761.jpg', caption: 'Счастливый момент' },
  { id: '2', src: '/images/gallery/a0df2bf0-f234-49ef-a456-9019bc25eb61.jpg', caption: 'Просто красавчик' },
  { id: '3', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.16.jpeg', caption: 'Смешная рожица' },
  { id: '4', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (1).jpeg', caption: 'Влюблённый взгляд' },
  { id: '5', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (2).jpeg', caption: 'Поцелуйчик' },
  { id: '6', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (3).jpeg', caption: 'Удивление дня' },
  { id: '7', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17 (4).jpeg', caption: 'Игривое настроение' },
  { id: '8', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.17.jpeg', caption: 'Отдых' },
  { id: '9', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (1).jpeg', caption: 'Любопытство' },
  { id: '10', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (2).jpeg', caption: 'Милашка' },
  { id: '11', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (3).jpeg', caption: 'Вечерний чил' },
  { id: '12', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18 (4).jpeg', caption: 'Ловкач' },
  { id: '13', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.18.jpeg', caption: 'Мечтатель' },
  { id: '14', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.03.19.jpeg', caption: 'Хищник' },
  { id: '15', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19 (1).jpeg', caption: 'Принц(есса)' },
  { id: '16', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19 (2).jpeg', caption: 'Модель' },
  { id: '17', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.19.jpeg', caption: 'Звезда' },
  { id: '18', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (1).jpeg', caption: 'Философ' },
  { id: '19', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (2).jpeg', caption: 'Акробат' },
  { id: '20', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (3).jpeg', caption: 'Сонечка' },
  { id: '21', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21 (4).jpeg', caption: 'Охотник' },
  { id: '22', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.21.jpeg', caption: 'Красотка' },
  { id: '23', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (1).jpeg', caption: 'Умница' },
  { id: '24', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (2).jpeg', caption: 'Шалун' },
  { id: '25', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (3).jpeg', caption: 'Ангелочек' },
  { id: '26', src: '/images/gallery/WhatsApp Image 2026-02-16 at 15.05.22 (4).jpeg', caption: 'Любимчик' },
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-secondary/10 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
        >
          Галерея моментов
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          {mockGalleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium text-sm">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Модалка для просмотра (опционально) */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden"
            >
              <img 
                src={mockGalleryItems[selectedImage].src} 
                alt={mockGalleryItems[selectedImage].caption} 
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
              <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl font-medium">
                {mockGalleryItems[selectedImage].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
