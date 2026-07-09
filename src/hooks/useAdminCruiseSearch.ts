import { useMemo } from 'react';
import Fuse from 'fuse.js';

export interface Cruise {
  id: string;
  title: string;
  description: string;
  itinerary: string;
  imageUrl: string;
  duration: string;
  price: number;
  sourceUrl: string;
  onSale: boolean;
  isVisible: boolean;
  saleDiscountPercentage?: number;
}

const CRUISES_PER_PAGE = 7;

export const useAdminCruiseSearch = (cruises: Cruise[], searchQuery: string) => {
  const filteredCruises = useMemo(() => {
    if (!searchQuery.trim()) return cruises;

    const fuse = new Fuse(cruises, {
      keys: ['title', 'description'],
      threshold: 0.3,
    });

    return fuse.search(searchQuery).map((result) => result.item);
  }, [cruises, searchQuery]);

  const totalPages = Math.ceil(filteredCruises.length / CRUISES_PER_PAGE);

  return {
    filteredCruises,
    totalPages,
    cruisesPerPage: CRUISES_PER_PAGE,
  };
};
