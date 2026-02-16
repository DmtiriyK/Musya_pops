# 🐱 Кошачий Лендинг - Муся

Интерактивный landing page для кошки с крутыми анимациями и эффектами!

## ✨ Фичи

- 🎨 **Красочный дизайн** с градиентами и анимациями
- 🖱️ **17+ интерактивных элементов**:
  - Крутящаяся кошка при скролле
  - Пользовательский курсор-лапка
  - Отпечатки лапок при клике
  - Падающие элементы (звезды, сердечки)
  - Бегающая мышка
  - Прогресс-бар со идущей кошкой
  - Конфетти на загрузке и при скролле
  - Кошка-компаньон следующая за курсором
  - **Кнопка включения/выключения** всех эффектов (внизу слева)
- 📸 **26 фотографий** в галерее с модальным окном
- 🎥 **7 видео** с плеером
- 📱 **Адаптивный дизайн** для всех устройств
- ⚡ **Оптимизированная производительность** с Next.js 16
- 🧪 **Покрытие тестами** Jest + Testing Library (10 тестов)

## 🚀 Технологии

- **Next.js 16.1.6** - React фреймворк с App Router
- **TypeScript 5** - типобезопасность
- **Tailwind CSS 4** - стилизация
- **Framer Motion 11** - анимации
- **React 19** - последняя версия
- **Canvas Confetti** - конфетти эффект
- **Jest + Testing Library** - тестирование

## 📦 Установка

\`\`\`bash
npm install
\`\`\`

## 🏃 Запуск

### Development режим
\`\`\`bash
npm run dev
\`\`\`
Откройте [http://localhost:3000](http://localhost:3000)

### Production build
\`\`\`bash
npm run build
npm start
\`\`\`

### Тесты
\`\`\`bash
npm test
# или в watch режиме
npm run test:watch
\`\`\`

## 🌐 Деплой на Vercel

### Способ 1: Через GitHub (рекомендуется)

1. **Создай GitHub репозиторий**:
   ```bash
   # Создай новый репозиторий на github.com
   # Затем добавь remote:
   git remote add origin https://github.com/ТвойUsername/cat-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Задеплой на Vercel**:
   - Открой [vercel.com](https://vercel.com)
   - Войди через GitHub
   - Нажми "New Project"
   - Выбери свой `cat-landing` репозиторий
   - Vercel автоматически определит Next.js настройки
   - Нажми "Deploy"
   - Готово! 🎉

### Способ 2: Vercel CLI

\`\`\`bash
# Установи Vercel CLI
npm i -g vercel

# Залогинься
vercel login

# Задеплой
vercel

# Для production
vercel --prod
\`\`\`

## 📁 Структура проекта

\`\`\`
cat-landing/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Главная страница
│   │   └── globals.css       # Глобальные стили
│   ├── components/           # React компоненты
│   │   ├── Hero.tsx          # Главная секция
│   │   ├── About.tsx         # О кошке
│   │   ├── Gallery.tsx       # Галерея фото
│   │   ├── VideoSection.tsx  # Видео
│   │   ├── Timeline.tsx      # Таймлайн
│   │   ├── Achievements.tsx  # Достижения
│   │   ├── Footer.tsx        # Подвал
│   │   ├── interactive/      # Интерактивные фичи
│   │   │   ├── ScrollingCat.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── PawPrints.tsx
│   │   │   ├── FloatingElements.tsx
│   │   │   ├── RunningMouse.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── ConfettiEffect.tsx
│   │   │   ├── CatCompanion.tsx
│   │   │   ├── InteractiveProvider.tsx
│   │   │   └── InteractiveWrapper.tsx
│   │   └── ui/
│   │       └── InteractiveToggle.tsx  # Кнопка вкл/выкл
│   ├── hooks/                # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useMousePosition.ts
│   │   └── useSoundEffects.ts
│   ├── lib/                  # Утилиты
│   │   ├── constants.ts      # Константы
│   │   └── animations.ts     # Анимации Framer Motion
│   ├── types/                # TypeScript типы
│   │   ├── index.ts
│   │   └── canvas-confetti.d.ts
│   └── __tests__/            # Тесты Jest
│       ├── Hero.test.tsx
│       ├── About.test.tsx
│       └── InteractiveProvider.test.tsx
├── public/
│   ├── images/
│   │   ├── hero/             # Главное фото (1)
│   │   └── gallery/          # Галерея (26 фото)
│   └── videos/               # Видео (7 файлов)
├── jest.config.js            # Jest конфигурация
├── jest.setup.js             # Jest setup
├── PLAN.md                   # Детальный план разработки
└── MEDIA_GUIDE.md            # Гайд по медиа файлам
\`\`\`

## 🎨 Кастомизация

### Изменить информацию о кошке

Отредактируй [src/lib/constants.ts](src/lib/constants.ts):

\`\`\`typescript
export const CAT_INFO = {
  name: 'Муся',
  age: 5,
  breed: 'Бомжара с мусорки',
  description: 'Красивая, вкусная, нежная, и немного воняет.',
  personality: ['Бесячая', 'Вонючая', 'Ленивая', 'Толстая', 'Рахитка'],
}
\`\`\`

### Изменить цвета

В [src/app/globals.css](src/app/globals.css):

\`\`\`css
@theme {
  --color-primary: #FF6B9D;    /* Розовый */
  --color-secondary: #FFA94D;   /* Оранжевый */
  --color-accent: #FFE66D;      /* Желтый */
}
\`\`\`

### Добавить/изменить фото и видео

1. Положи файлы в соответствующие папки в `public/`
2. Обнови массивы в компонентах:
   - `src/components/Gallery.tsx` - mockGalleryItems
   - `src/components/VideoSection.tsx` - mockVideos

## 📝 Статус разработки

- ✅ Stage 1: Настройка проекта
- ✅ Stage 2: Основные секции
- ✅ Stage 3: Интерактивные фичи  
- ✅ Stage 4: Стилизация и адаптив
- ✅ Stage 5: Интеграция контента
- ✅ Stage 6: Тестирование (10/10 тестов прошли)
- ✅ Stage 7: Production build
- 🚀 Stage 8: Готов к деплою!

## 🐾 О проекте

Этот лендинг создан для демонстрации кошки **Мусе** с максимальной интерактивностью и весельем! 

Особенности:
- Все интерактивные элементы можно выключить кнопкой внизу слева (✨)
- При скролле кошка в правом нижнем углу крутится
- Клики по странице оставляют отпечатки лапок
- Мышка периодически пробегает через экран
- Куча анимаций и милых деталей

---

Made with 💖 for Муся
