export interface Cat {
  name: string;
  age: number;
  breed: string;
  description: string;
  personality: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface VideoItem {
  id: string;
  src: string;
  thumbnail: string;
  title: string;
  description?: string;
}
