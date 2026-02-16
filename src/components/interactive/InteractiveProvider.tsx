'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface InteractiveContextType {
  isEnabled: boolean;
  toggleInteractive: () => void;
}

const InteractiveContext = createContext<InteractiveContextType>({
  isEnabled: true,
  toggleInteractive: () => {},
});

export const useInteractive = () => useContext(InteractiveContext);

export function InteractiveProvider({ children }: { children: ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleInteractive = () => setIsEnabled(prev => !prev);

  return (
    <InteractiveContext.Provider value={{ isEnabled, toggleInteractive }}>
      {children}
    </InteractiveContext.Provider>
  );
}
