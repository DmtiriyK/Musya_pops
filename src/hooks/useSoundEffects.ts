'use client';

import { useState, useCallback } from 'react';

export const useSoundEffects = () => {
  const [isMuted, setIsMuted] = useState(false);

  const playSound = useCallback((soundPath: string) => {
    if (isMuted) return;

    try {
      const audio = new Audio(soundPath);
      audio.volume = 0.5;
      audio.play();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  return { playSound, isMuted, toggleMute };
};
