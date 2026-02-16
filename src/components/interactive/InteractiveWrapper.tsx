'use client';

import { useInteractive } from './InteractiveProvider';
import {
  ScrollingCat,
  CustomCursor,
  PawPrints,
  FloatingElements,
  RunningMouse,
  ScrollProgress,
  ConfettiEffect,
  CatCompanion,
} from './index';

export default function InteractiveWrapper() {
  const { isEnabled } = useInteractive();

  if (!isEnabled) return null;

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <PawPrints />
      <FloatingElements />
      <ScrollingCat />
      <RunningMouse />
      <CatCompanion />
      <ConfettiEffect />
    </>
  );
}
