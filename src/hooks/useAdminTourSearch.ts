import { useMemo } from 'react';
import Fuse from 'fuse.js';
import { TOURS_PER_PAGE } from '@/lib/pagination';

export interface Tour {
  id: string;
  title: string;
  description: string;
  itinerary: string;
  duration: string;
  price: number;
  createdAt: string;
  featuredTour: boolean;
  onSale: boolean;
  isVisible: boolean;
  saleDiscountPercentage?: number;
  images?: { id: string; url: string; isPrimary: boolean }[];
  cities?: { id: string; name: string }[];
  categories?: { id: string; label: string }[];
}

export const useAdminTourSearch = (tours: Tour[], searchQuery: string) => {
  const filteredTours = useMemo(() => {
    if (!searchQuery.trim()) return tours;

    const fuse = new Fuse(tours, {
      keys: ['title', 'description'],
      threshold: 0.3,
    });

    return fuse.search(searchQuery).map((result) => result.item);
  }, [tours, searchQuery]);

  //This is in case we need pagination, but the return is only one. 

  const totalPages = Math.ceil(filteredTours.length / TOURS_PER_PAGE);

  const getPageTours = (page: number) => {
    const startIdx = (page - 1) * TOURS_PER_PAGE;
    const endIdx = startIdx + TOURS_PER_PAGE;
    return filteredTours.slice(startIdx, endIdx);
  };

  const getTourPage = (tourId: string) => {
    const tourIdx = filteredTours.findIndex((t) => t.id === tourId);
    if (tourIdx === -1) return 1;
    return Math.floor(tourIdx / TOURS_PER_PAGE) + 1;
  };

  return {
    filteredTours,
    totalPages,
    getPageTours,
    getTourPage,
    toursPerPage: TOURS_PER_PAGE,
  };
};
