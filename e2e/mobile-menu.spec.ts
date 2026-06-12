import { test, expect } from '@playwright/test';

// Override viewport to mobile dimensions for all tests in this file
test.use({ viewport: { width: 393, height: 851 } });

test.describe('Mobile Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Menu button is visible on mobile', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible();
  });

  test('My Bookings button is visible on mobile', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'My Bookings' })).toBeVisible();
  });

  test('opening the menu shows main navigation links', async ({ page }) => {
    await page.getByRole('button', { name: 'Menu' }).click();

    const menu = page.locator('div.fixed.inset-0.z-50');
    await expect(menu).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Deals' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Contact Us' })).toBeVisible();
  });

  test('close button dismisses the menu', async ({ page }) => {
    await page.getByRole('button', { name: 'Menu' }).click();

    const menu = page.locator('div.fixed.inset-0.z-50');
    await expect(menu).toBeVisible();

    // Close button: bg-white text-gray-800 rounded-full inside the menu header
    await menu.locator('button.bg-white.text-gray-800').click();

    // Menu slides off to the right via translate-x-full (CSS transform, not display:none)
    await expect(menu).toHaveClass(/translate-x-full/);
  });

  test('Tours accordion expands to show tour categories', async ({ page }) => {
    await page.getByRole('button', { name: 'Menu' }).click();
    const menu = page.locator('div.fixed.inset-0.z-50');

    // Wait for GraphQL categories to load (accordion button appears after load)
    await expect(menu.getByRole('button', { name: 'Tours', exact: true })).toBeVisible({ timeout: 10_000 });

    await menu.getByRole('button', { name: 'Tours', exact: true }).click();

    // Tour category links appear inside the expanded accordion
    await expect(menu.locator('a[href="#"]').first()).toBeVisible({ timeout: 10_000 });
  });

  test('Destinations accordion expands to show regions', async ({ page }) => {
    await page.getByRole('button', { name: 'Menu' }).click();
    const menu = page.locator('div.fixed.inset-0.z-50');

    // Wait for GraphQL regions to load
    await expect(menu.getByRole('button', { name: 'Destinations', exact: true })).toBeVisible({ timeout: 10_000 });

    await menu.getByRole('button', { name: 'Destinations', exact: true }).click();

    // Region buttons appear inside the expanded accordion
    const regionButtons = menu.locator('button').filter({ hasNot: page.getByRole('button', { name: /Tours|Destinations/ }) });
    await expect(menu.getByRole('link', { name: 'View all destinations' })).toBeVisible({ timeout: 10_000 });
  });
});
