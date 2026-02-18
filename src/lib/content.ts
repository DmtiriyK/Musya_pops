export type Lang = 'ru' | 'en';

export interface Content {
  cat: { name: string; breed: string; description: string; personality: readonly string[]; age: string };
  hero: { photoBtn: string; aboutBtn: string; scrollDown: string };
  about: { sectionTitle: string; intro: string; bio: string; ageLabel: string; breedLabel: string };
  timeline: { sectionTitle: string; events: ReadonlyArray<{ date: string; title: string; description: string }> };
  gallery: { sectionTitle: string; captions: readonly string[] };
  videos: { sectionTitle: string; items: ReadonlyArray<{ title: string; description: string }> };
  achievements: {
    sectionTitle: string;
    subtitle: string;
    items: ReadonlyArray<{ title: string; description: string }>;
    stats: ReadonlyArray<{ value: string; label: string }>;
  };
  footer: { greeting: string; thanks: string; madeWith: string; forTheBest: string };
  interactive: { toggleOn: string; toggleOff: string };
}

const content: Record<Lang, Content> = {
  ru: {
    cat: {
      name: 'Муся',
      breed: 'Бомжара с мусорки',
      description: 'Красивая, вкусная, нежная, и немного воняет. Самая лучшая кошка на свете!',
      personality: ['Бесячая', 'Вонючая', 'Ленивая', 'Толстая', 'Рахитка'],
      age: '5 лет',
    },
    hero: {
      photoBtn: 'Смотреть фото',
      aboutBtn: 'Узнать больше',
      scrollDown: '↓',
    },
    about: {
      sectionTitle: 'О нашей звезде',
      intro: 'Знакомьтесь,',
      bio: 'Каждый день приносит новые приключения, смешные моменты и море позитива. От утреннего мяуканья до вечерних зумис — жизнь с этой кошкой никогда не бывает скучной!',
      ageLabel: 'Возраст',
      breedLabel: 'Порода',
    },
    timeline: {
      sectionTitle: 'Путь к звёздности',
      events: [
        { date: '2024', title: 'Первый день дома', description: 'Началась новая жизнь, полная приключений' },
        { date: '2024', title: 'Первая игрушка', description: 'Любовь с первого взгляда к мячику' },
        { date: '2024', title: 'Освоение территории', description: 'Каждый уголок квартиры исследован' },
        { date: '2025', title: 'Первый ветеринар', description: 'Храбро перенесли осмотр' },
        { date: '2025', title: 'Мастер зумис', description: 'Покорили скорость света в коридоре' },
        { date: '2026', title: 'Сегодня', description: 'Продолжаем радовать каждый день' },
      ],
    },
    gallery: {
      sectionTitle: 'Галерея моментов',
      captions: [
        'Счастливый момент', 'Просто красавчик', 'Смешная рожица', 'Влюблённый взгляд',
        'Поцелуйчик', 'Удивление дня', 'Игривое настроение', 'Отдых',
        'Любопытство', 'Милашка', 'Вечерний чил', 'Ловкач',
        'Мечтатель', 'Хищник', 'Принц(есса)', 'Модель',
        'Звезда', 'Философ', 'Акробат', 'Сонечка',
        'Охотник', 'Красотка', 'Умница', 'Шалун',
        'Ангелочек', 'Любимчик',
      ],
    },
    videos: {
      sectionTitle: 'Видео-хроники',
      items: [
        { title: 'Утренние зумис', description: 'Классический забег в 5 утра' },
        { title: 'Охота на игрушку', description: 'Безупречная техника' },
        { title: 'Время обеда', description: 'Самый важный момент дня' },
        { title: 'Сонное царство', description: '18 часов в день' },
        { title: 'Игривый момент', description: 'Время развлечений' },
        { title: 'Любопытство', description: 'Исследование территории' },
        { title: 'Ласковая мурка', description: 'Просит внимания' },
      ],
    },
    achievements: {
      sectionTitle: 'Достижения',
      subtitle: 'Награды за выдающиеся заслуги',
      items: [
        { title: 'Мастер сна', description: '20 часов в день' },
        { title: 'Ловкач', description: 'Поймано 1000+ игрушек' },
        { title: 'Гурман', description: 'Опробовано 50+ вкусов' },
        { title: 'Атлет', description: 'Зумис каждую ночь' },
        { title: 'Социальная бабочка', description: '100% людей очаровано' },
        { title: 'Исследователь', description: 'Каждый угол изучен' },
      ],
      stats: [
        { value: '100%', label: 'Мимимишность' },
        { value: '∞', label: 'Любовь' },
        { value: '24/7', label: 'Мурчание' },
        { value: '🏆', label: 'Лучший кот' },
      ],
    },
    footer: {
      greeting: 'Мяу!',
      thanks: 'Спасибо, что заглянули познакомиться с нашей звездой',
      madeWith: 'Сделано с',
      forTheBest: 'для лучшей кошки',
    },
    interactive: {
      toggleOn: 'Интерактив: вкл',
      toggleOff: 'Интерактив: выкл',
    },
  },

  en: {
    cat: {
      name: 'Musya',
      breed: 'Dumpster Royalty',
      description: 'Beautiful, delicious, tender, and a bit smelly. Objectively the best cat in the world.',
      personality: ['Annoying', 'Smelly', 'Lazy', 'Chonky', 'Sickly'],
      age: '5 years',
    },
    hero: {
      photoBtn: 'View photos',
      aboutBtn: 'Learn more',
      scrollDown: '↓',
    },
    about: {
      sectionTitle: 'About our star',
      intro: "Meet",
      bio: "Every day brings new adventures, funny moments, and endless positivity. From morning meowing to late-night zoomies — life with this cat is never boring.",
      ageLabel: 'Age',
      breedLabel: 'Breed',
    },
    timeline: {
      sectionTitle: 'Road to Stardom',
      events: [
        { date: '2024', title: 'First day home', description: 'A new life began, full of adventures' },
        { date: '2024', title: 'First toy', description: 'Love at first sight with a little ball' },
        { date: '2024', title: 'Territory mapping', description: 'Every corner of the apartment explored' },
        { date: '2025', title: 'First vet visit', description: 'Survived the checkup with dignity' },
        { date: '2025', title: 'Zoomies master', description: 'Broke the speed of light in the hallway' },
        { date: '2026', title: 'Today', description: 'Still bringing joy every single day' },
      ],
    },
    gallery: {
      sectionTitle: 'Moments Gallery',
      captions: [
        'Happy moment', 'Simply gorgeous', 'Funny face', 'Lovey-dovey gaze',
        'Little kiss', 'Daily surprise', 'Playful mood', 'Rest mode',
        'Curiosity', 'Cutie', 'Evening chill', 'The Stealthy One',
        'Daydreamer', 'The Hunter', 'Royal vibes', 'Model behavior',
        'Superstar', 'Deep thinker', 'Acrobat', 'Sleepyhead',
        'On the prowl', 'Beautiful', 'Smartypaws', 'Troublemaker',
        'Little angel', 'Fan favourite',
      ],
    },
    videos: {
      sectionTitle: 'Video Chronicles',
      items: [
        { title: 'Morning Zoomies', description: 'Classic 5am sprint session' },
        { title: 'Hunting the Toy', description: 'Flawless technique' },
        { title: 'Lunchtime', description: 'The most important moment of the day' },
        { title: 'Sleepy Kingdom', description: '18 hours a day' },
        { title: 'Playtime', description: 'Entertainment hour' },
        { title: 'Curiosity', description: 'Territory exploration' },
        { title: 'Affectionate Mode', description: 'Asking for attention' },
      ],
    },
    achievements: {
      sectionTitle: 'Achievements',
      subtitle: 'Awards for outstanding merit',
      items: [
        { title: 'Sleep Master', description: '20 hours a day' },
        { title: 'The Stealthy One', description: '1000+ toys caught' },
        { title: 'Food Critic', description: '50+ flavors tested' },
        { title: 'Athlete', description: 'Zoomies every night' },
        { title: 'Social Butterfly', description: '100% of humans charmed' },
        { title: 'The Explorer', description: 'Every corner mapped' },
      ],
      stats: [
        { value: '100%', label: 'Cuteness' },
        { value: '∞', label: 'Love' },
        { value: '24/7', label: 'Purring' },
        { value: '🏆', label: 'Best Cat' },
      ],
    },
    footer: {
      greeting: 'Meow!',
      thanks: 'Thanks for stopping by to meet our star',
      madeWith: 'Made with',
      forTheBest: 'for the best cat ever',
    },
    interactive: {
      toggleOn: 'Interactive: on',
      toggleOff: 'Interactive: off',
    },
  },
} ;

export default content;
