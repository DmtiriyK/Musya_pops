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
      breed: 'Мусорка → Германия (карьерный рост)',
      description: 'Найдена на мусорке в Казахстане, сейчас живёт в Германии возле Швейцарии. Рахит, размер котёнка, характер королевы.',
      personality: ['Нежная', 'Мурчащая', 'Массажистка', 'Маленькая', 'Любвиобильная'],
      age: '~8 лет',
    },
    hero: {
      photoBtn: 'Смотреть фото',
      aboutBtn: 'Узнать больше',
      scrollDown: '↓',
    },
    about: {
      sectionTitle: 'О нашей звезде',
      intro: 'Знакомьтесь,',
      bio: 'Из мусорки в Казахстане — в Германию возле Швейцарии. Звучит как плохой роман, но это просто биография Муси. Из-за голодного детства у неё рахит, поэтому она выглядит как котёнок во взрослом теле — природная хитрость, не иначе. Любит делать массаж лапками, мурчит 24/7 и очаровывает вообще всех.',
      ageLabel: 'Возраст',
      breedLabel: 'Происхождение',
    },
    timeline: {
      sectionTitle: 'Карьерный путь',
      events: [
        { date: '2017', title: 'Обнаружена на мусорке', description: 'Казахстан. Мама нашла маленький орущий комок и не смогла пройти мимо. Никто не смог бы.' },
        { date: '2017–2020', title: 'Семейный этап', description: 'Три года полноценной жизни с семьёй. Рахит заработан, характер сформирован, массажные техники отработаны.' },
        { date: '2020', title: 'Временная релокация', description: 'Семья уезжает в Германию. Муся остаётся у двоюродных сестёр — временно, как потом выяснилось.' },
        { date: '2020–2023', title: 'У сестёр', description: 'Жила у двоюродных. Мурчала, очаровывала, делала массаж. Работа та же, локация другая.' },
        { date: '2023', title: 'Воссоединение в Германии', description: 'Сёстры тоже переехали — и взяли её с собой. Муся оценила.' },
        { date: '2023 — сейчас', title: 'Германия, возле Швейцарии', description: 'Пик карьеры. Из мусорки на постсоветском пространстве — в Западную Европу. Рахит не помеха.' },
      ],
    },
    gallery: {
      sectionTitle: 'Галерея',
      captions: [
        'Просто смотрит. Осуждает.',
        'Массаж заказывали?',
        'Рахит — не приговор, а эстетика',
        'Взгляд человека, пережившего многое',
        'Котёнок? Нет, это взрослая женщина',
        'Мурчание уровня трактор',
        'Казахстан дал характер, Германия — комфорт',
        'Отдыхает. Заслужила.',
        'Изучает территорию. Снова.',
        'Нежная, но с позицией',
        'Вечерний чил у окна',
        'Маленькая, но грозная',
        'Философский взгляд в никуда',
        'Охотится. На ничто. Просто так.',
        'Королева мусорок и гостиных',
        'Позирует без предупреждения',
        'Звезда с непростой судьбой',
        'Думает о своём',
        'Акробат поневоле',
        'Сончик',
        'Следит за обстановкой',
        'Красота без усилий',
        'Умная. Знает об этом.',
        'Хулиганит в рамках разумного',
        'Ангел с мусорки',
        'Всеобщая любимица',
      ],
    },
    videos: {
      sectionTitle: 'Видео-хроники',
      items: [
        { title: 'Просто живёт', description: 'Ничего особенного. Просто Муся.' },
        { title: 'Охота', description: 'На что — непонятно. Важен процесс.' },
        { title: 'Время еды', description: 'Единственное, что важнее сна.' },
        { title: 'Массаж', description: 'Профессиональный. Сертификатов нет, но качество есть.' },
        { title: 'Игривое настроение', description: 'Бывает. Редко, но метко.' },
        { title: 'Исследует', description: 'Каждый угол по третьему разу.' },
      ],
    },
    achievements: {
      sectionTitle: 'Достижения',
      subtitle: 'Официальные награды по итогам наблюдений',
      items: [
        { title: 'Из мусорки в Европу', description: 'Лучший карьерный рост среди знакомых кошек' },
        { title: 'Вечный котёнок', description: 'Рахит как лайфхак для молодости' },
        { title: 'Массажист года', description: 'Лапками. Без записи.' },
        { title: 'Мурчательный рекорд', description: '24/7, без выходных и праздников' },
        { title: 'Покорительница сердец', description: '100% людей — очарованы безвозвратно' },
        { title: 'Выжившая', description: 'Голодное детство, рахит, три страны — и всё равно нежная' },
      ],
      stats: [
        { value: '3', label: 'Страны' },
        { value: '∞', label: 'Мурчание' },
        { value: '24/7', label: 'Нежность' },
        { value: '🏆', label: 'Лучшая' },
      ],
    },
    footer: {
      greeting: 'Мяу.',
      thanks: 'Спасибо, что познакомились с Мусей — она бы мурчала, если бы знала',
      madeWith: 'Сделано с',
      forTheBest: 'для лучшей кошки в трёх странах',
    },
    interactive: {
      toggleOn: 'Интерактив: вкл',
      toggleOff: 'Интерактив: выкл',
    },
  },

  en: {
    cat: {
      name: 'Musya',
      breed: 'Dumpster → Germany (career growth)',
      description: 'Found in a dumpster in Kazakhstan, now living in Germany near Switzerland. Rickets, kitten-sized, queen-level attitude.',
      personality: ['Gentle', 'Purring', 'Masseuse', 'Tiny', 'Loving'],
      age: '~8 years',
    },
    hero: {
      photoBtn: 'View photos',
      aboutBtn: 'Learn more',
      scrollDown: '↓',
    },
    about: {
      sectionTitle: 'About our star',
      intro: 'Meet',
      bio: "From a dumpster in Kazakhstan to Germany near the Swiss border. Sounds like a bad novel, but that's just Musya's biography. A rough start left her with rickets, which means she permanently looks like a kitten in an adult's timeline — a natural life hack, really. She loves giving paw massages, purrs constantly, and has charmed literally everyone she's ever met.",
      ageLabel: 'Age',
      breedLabel: 'Origin',
    },
    timeline: {
      sectionTitle: 'Career Path',
      events: [
        { date: '2017', title: 'Discovered in a dumpster', description: "Kazakhstan. Mom found a small screaming ball of fur and couldn't walk past. Nobody could." },
        { date: '2017–2020', title: 'Family era', description: 'Three years of proper home life. Rickets acquired, personality formed, massage techniques perfected.' },
        { date: '2020', title: 'Temporary relocation', description: "Family moves to Germany. Musya stays with cousins — temporarily, as it turned out." },
        { date: '2020–2023', title: "At the cousins'", description: 'Living with cousins. Purring, charming, giving massages. Same job, different location.' },
        { date: '2023', title: 'Reunited in Germany', description: 'Cousins moved too — and brought her along. Musya approved.' },
        { date: '2023 — now', title: 'Germany, near Switzerland', description: 'Career peak. From a post-Soviet dumpster to Western Europe. Rickets was never a barrier.' },
      ],
    },
    gallery: {
      sectionTitle: 'Gallery',
      captions: [
        "Just watching. Judging.",
        "Massage? I can do that.",
        "Rickets as a lifestyle choice",
        "The look of someone who's been through things",
        "Kitten? No, this is a grown woman.",
        "Purring level: tractor",
        "Kazakhstan gave character, Germany gave comfort",
        "Resting. Earned it.",
        "Inspecting the territory. Again.",
        "Gentle, but has opinions",
        "Evening chill by the window",
        "Small but formidable",
        "Philosophical stare into the void",
        "Hunting. Nothing. Just vibes.",
        "Queen of dumpsters and living rooms",
        "Posing without warning",
        "Star with a complicated past",
        "Thinking her own thoughts",
        "Accidental acrobat",
        "Nap mode",
        "Monitoring the situation",
        "Effortless beauty",
        "Smart. Knows it.",
        "Mischief within reason",
        "Angel from the dumpster",
        "Everyone's favourite",
      ],
    },
    videos: {
      sectionTitle: 'Video Chronicles',
      items: [
        { title: 'Just living', description: 'Nothing special. Just Musya.' },
        { title: 'Hunting', description: "What exactly — unclear. The process is what matters." },
        { title: 'Mealtime', description: 'The one thing more important than sleep.' },
        { title: 'Massage session', description: 'Professional grade. No certificate, but the quality speaks for itself.' },
        { title: 'Playful mood', description: 'It happens. Rare, but precise.' },
        { title: 'Exploring', description: 'Every corner, for the third time.' },
      ],
    },
    achievements: {
      sectionTitle: 'Achievements',
      subtitle: 'Official awards based on observation',
      items: [
        { title: 'Dumpster to Europe', description: 'Best career arc among known cats' },
        { title: 'Eternal kitten', description: 'Rickets as a youth preservation strategy' },
        { title: 'Masseuse of the year', description: 'Paw-powered. No appointment needed.' },
        { title: 'Purring record', description: '24/7, no weekends, no holidays' },
        { title: 'Heart conqueror', description: '100% of humans — permanently charmed' },
        { title: 'Survivor', description: 'Rough childhood, rickets, three countries — still the gentlest cat' },
      ],
      stats: [
        { value: '3', label: 'Countries' },
        { value: '∞', label: 'Purring' },
        { value: '24/7', label: 'Affection' },
        { value: '🏆', label: 'Best cat' },
      ],
    },
    footer: {
      greeting: 'Meow.',
      thanks: "Thanks for meeting Musya — she'd purr if she knew",
      madeWith: 'Made with',
      forTheBest: 'for the best cat in three countries',
    },
    interactive: {
      toggleOn: 'Interactive: on',
      toggleOff: 'Interactive: off',
    },
  },
} ;

export default content;
