'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type VisibilityFilter = 'ALL' | 'VISIBLE' | 'HIDDEN';

interface VisibilityFilterContextType {
  tourFilter: VisibilityFilter;
  cruiseFilter: VisibilityFilter;
  setTourFilter: (filter: VisibilityFilter) => void;
  setCruiseFilter: (filter: VisibilityFilter) => void;
}

const VisibilityFilterContext = createContext<VisibilityFilterContextType | null>(null);

export const VisibilityFilterProvider = ({ children }: { children: ReactNode }) => {
  const [tourFilter, setTourFilter] = useState<VisibilityFilter>('ALL');
  const [cruiseFilter, setCruiseFilter] = useState<VisibilityFilter>('ALL');

  return (
    <VisibilityFilterContext.Provider value={{ tourFilter, cruiseFilter, setTourFilter, setCruiseFilter }}>
      {children}
    </VisibilityFilterContext.Provider>
  );
};

export const useVisibilityFilter = () => {
  const context = useContext(VisibilityFilterContext);
  if (!context) throw new Error('useVisibilityFilter must be used within VisibilityFilterProvider');
  return context;
};
