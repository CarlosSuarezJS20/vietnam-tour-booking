import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Travel Vietnam');
  });

  test('hero section renders with heading and CTA', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Discover');
    await expect(page.locator('h1')).toContainText('Vietnam');
    await expect(page.getByRole('button', { name: 'Explore Our Tours' })).toBeVisible();
  });

  test('popular categories section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Popular Categories' })).toBeVisible();
  });

  test('category filter buttons are all rendered', async ({ page }) => {
    for (const label of ['Luxury', 'Beach Holidays', 'Honeymoon', 'Mature Travellers']) {
      await expect(page.getByRole('button', { name: label })).toBeVisible();
    }
  });

  test('find more tours link is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Find more tours' })).toBeVisible();
  });

  test('halong bay cruises section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Halong Bay Cruises' })).toBeVisible();
  });

  test('featured tour card loads with best seller badge', async ({ page }) => {
    await expect(page.getByText('Best Seller')).toBeVisible({ timeout: 15_000 });
  });

  test('tour cards load in categories carousel', async ({ page }) => {
    // Wait for GraphQL data — skeleton should be replaced by real tour cards
    await expect(page.locator('p.text-base.font-medium').first()).toBeVisible({ timeout: 15_000 });
  });

  test('credentials section is present on the page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Credentials' })).toBeVisible({ timeout: 5_000 });
  });

  test('booking form section is present on the page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Plan Your Trip' })).toBeVisible();
  });

  test('footer is present at the bottom of the page', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
  });
});
