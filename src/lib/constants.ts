// Цветовая палитра
export const COLORS = {
  primary: '#FF6B9D',
  secondary: '#FFA94D',
  accent: '#FFE66D',
  background: '#ffffff',
  foreground: '#171717',
} as const;

// Длительности анимаций (в секундах)
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 1,
} as const;

// Звуки — зарезервировано под будущие файлы
// export const SOUNDS = { meow: '/sounds/meow.mp3', purr: '/sounds/purr.mp3' };

// Информация о кошке
export const CAT_INFO = {
  name: 'Муся',
  age: 5,
  breed: 'Бомжара с мусорки',
  description: 'Красивая, вкусная, нежная, и немного воняет. Самая лучшая кошка на свете!',
  personality: ['Бесячая', 'Вонючая', 'Ленивая', 'Толстая', 'Рахитка'],
} as const;

// Настройки интерактивных элементов
export const INTERACTIVE_SETTINGS = {
  pawPrintLifetime: 5000, // ms
  particleCount: 50,
  confettiCount: 200,
  scrollRotationSpeed: 0.5,
} as const;
