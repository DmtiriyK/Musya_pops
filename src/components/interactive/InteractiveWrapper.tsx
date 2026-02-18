'use client';

import { useInteractive } from './InteractiveProvider';
import { ScrollProgress, ScrollingCat } from './index';

export default function InteractiveWrapper() {
  const { isEnabled } = useInteractive();

  if (!isEnabled) return null;

  return (
    <>
      <ScrollProgress />
      <ScrollingCat />
    </>
  );
}
