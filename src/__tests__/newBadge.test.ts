import { isNewProduct } from '@/lib/newProductHelpers';
import type { ListingTour } from '@/types/graphql';

describe('New Badge Feature - Integration', () => {
  it('should identify a newly created tour', () => {
    // Simulate creating a tour right now
    const now = new Date().toISOString();

    const newTour: ListingTour = {
      __typename: 'Tour',
      id: 'tour-1',
      title: 'New Vietnam Adventure',
      duration: '5',
      price: 1999,
      featuredTour: false,
      onSale: false,
      saleDiscountPercentage: null,
      createdAt: now,
      images: [{ id: 'img-1', url: 'https://example.com/tour.jpg', isPrimary: true }],
      cities: [{ id: 'hcm', name: 'Ho Chi Minh City', region: { id: 'r1', key: 'south', label: 'South' } }],
      categories: [{ id: 'cat-1', slug: 'adventure', label: 'Adventure' }],
    };

    // Badge should show
    expect(isNewProduct(newTour.createdAt)).toBe(true);
  });

  it('should NOT identify an old tour', () => {
    // Simulate a tour created 30 days ago
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const oldTour: ListingTour = {
      __typename: 'Tour',
      id: 'tour-2',
      title: 'Classic Vietnam',
      duration: '7',
      price: 2499,
      featuredTour: true,
      onSale: false,
      saleDiscountPercentage: null,
      createdAt: thirtyDaysAgo,
      images: [{ id: 'img-2', url: 'https://example.com/tour2.jpg', isPrimary: true }],
      cities: [{ id: 'hanoi', name: 'Hanoi', region: { id: 'r2', key: 'north', label: 'North' } }],
      categories: [{ id: 'cat-2', slug: 'cultural', label: 'Cultural' }],
    };

    // Badge should NOT show
    expect(isNewProduct(oldTour.createdAt)).toBe(false);
  });

  it('should work with cruises too', () => {
    // Create cruise created today
    const now = new Date().toISOString();

    const newCruise = {
      id: 'cruise-1',
      title: 'Mekong River Cruise',
      duration: '3',
      price: 899,
      createdAt: now,
    };

    expect(isNewProduct(newCruise.createdAt)).toBe(true);
  });
});
