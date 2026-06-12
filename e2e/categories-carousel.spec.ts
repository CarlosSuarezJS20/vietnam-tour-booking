import { test, expect } from '@playwright/test';

test.describe('Categories Carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('section heading and description are visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Popular Categories' })).toBeVisible();
    await expect(page.getByText('From luxury escapes to romantic honeymoons')).toBeVisible();
  });

  test('all four category filter buttons are rendered', async ({ page }) => {
    const section = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Popular Categories' }) });
    for (const label of ['Luxury', 'Beach Holidays', 'Honeymoon', 'Mature Travellers']) {
      await expect(section.getByRole('button', { name: label })).toBeVisible();
    }
  });

  test('Luxury is the default active category', async ({ page }) => {
    // The active button has bg-brand class; Luxury is the initial activeKey
    const luxuryBtn = page.getByRole('button', { name: 'Luxury' });
    await expect(luxuryBtn).toHaveClass(/bg-brand/);
  });

  test('clicking a different category changes the active button', async ({ page }) => {
    await page.getByRole('button', { name: 'Beach Holidays' }).click();
    await expect(page.getByRole('button', { name: 'Beach Holidays' })).toHaveClass(/bg-brand/);
    await expect(page.getByRole('button', { name: 'Luxury' })).not.toHaveClass(/bg-brand/);
  });

  test('tour cards load after switching category', async ({ page }) => {
    await page.getByRole('button', { name: 'Honeymoon' }).click();
    // Tour cards have a p.text-base.font-medium title — wait for them to appear
    await expect(page.locator('p.text-base.font-medium').first()).toBeVisible({ timeout: 15_000 });
  });

  test('find more tours button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Find more tours' })).toBeVisible();
  });

  test('carousel prev/next buttons are visible on desktop', async ({ page, viewport }) => {
    // Arrows use hidden md:flex — only visible at md+ breakpoint (768px+)
    test.skip((viewport?.width ?? 0) < 768, 'Arrows are hidden on mobile via hidden md:flex');

    const section = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Popular Categories' }) });
    const arrows = section.locator('button').filter({ has: page.locator('svg') }).filter({ hasNot: page.getByRole('button', { name: /Luxury|Beach|Honeymoon|Mature|Find/ }) });
    await expect(arrows.first()).toBeVisible();
    await expect(arrows.last()).toBeVisible();
  });
});
