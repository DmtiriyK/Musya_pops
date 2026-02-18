import { useEffect } from 'react';

const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];

export function useSecretCode(onMatch: () => void) {
  useEffect(() => {
    let idx = 0;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === SEQUENCE[idx]) {
        idx++;
        if (idx === SEQUENCE.length) {
          idx = 0;
          onMatch();
        }
      } else {
        idx = e.key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onMatch]);
}
