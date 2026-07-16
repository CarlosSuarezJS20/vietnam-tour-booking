import { isNewProduct, DAYS_THRESHOLD } from '../newProductHelpers';

describe('isNewProduct', () => {
  const now = new Date();

  it('should return true for product created today', () => {
    const today = now.toISOString();
    expect(isNewProduct(today)).toBe(true);
  });

  it('should return true for product created 1 day ago', () => {
    const oneDayAgo = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString();
    expect(isNewProduct(oneDayAgo)).toBe(true);
  });

  it('should return true for product created 6.99 days ago', () => {
    const almostSevenDaysAgo = new Date(now.getTime() - 6.99 * 24 * 60 * 60 * 1000).toISOString();
    expect(isNewProduct(almostSevenDaysAgo)).toBe(true);
  });

  it('should return false for product created 8 days ago', () => {
    const eightDaysAgo = new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000).toISOString();
    expect(isNewProduct(eightDaysAgo)).toBe(false);
  });

  it('should return false for product created 30 days ago', () => {
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();
    expect(isNewProduct(thirtyDaysAgo)).toBe(false);
  });

  it('should handle invalid date strings gracefully', () => {
    expect(isNewProduct('invalid-date')).toBe(false);
    expect(isNewProduct('')).toBe(false);
    expect(isNewProduct('not a date')).toBe(false);
  });

  it('should use DAYS_THRESHOLD constant of 7', () => {
    expect(DAYS_THRESHOLD).toBe(7);
  });

  it('should return false for null/undefined gracefully', () => {
    expect(isNewProduct(null as any)).toBe(false);
    expect(isNewProduct(undefined as any)).toBe(false);
  });
});
