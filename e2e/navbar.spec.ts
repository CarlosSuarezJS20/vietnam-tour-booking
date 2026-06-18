import { test, expect } from '@playwright/test';

// Desktop-only — nav pill is hidden md:flex (not rendered at mobile widths)
test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Travel Vietnam logo is visible', async ({ page }) => {
    await expect(page.getByAltText('Travel Vietnam').first()).toBeVisible();
  });

  test('nav items are visible', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav.getByRole('button', { name: 'Tours & Activities' })).toBeVisible();
    await expect(nav.getByRole('button', { name: 'Destinations' })).toBeVisible();
    await expect(nav.getByRole('button', { name: 'Blog' })).toBeVisible();
    await expect(nav.getByRole('button', { name: 'Deals' })).toBeVisible();
  });

  test('My Bookings button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'My Bookings' }).first()).toBeVisible();
  });

  test('Contact Us text is visible in the navbar', async ({ page }) => {
    // Scope to <nav> to avoid matching the "Contact Us" link in the mobile menu
    await expect(page.locator('nav').getByText('Contact Us')).toBeVisible();
  });

  test('tours dropdown opens on click and shows categories', async ({ page }) => {
    const nav = page.locator('nav');
    await nav.getByRole('button', { name: 'Tours & Activities' }).click();

    // Dropdown panel: absolute, rounded-b-xl, shadow-xl — visible when open
    const dropdown = page.locator('div.rounded-b-xl.shadow-xl');
    await expect(dropdown).toBeVisible();

    // Wait for GraphQL categories to load inside the dropdown
    await expect(dropdown.locator('a').first()).toBeVisible({ timeout: 10_000 });
  });

  test('tours dropdown loads category links from GraphQL', async ({ page }) => {
    const nav = page.locator('nav');
    await nav.getByRole('button', { name: 'Tours & Activities' }).click();

    const dropdown = page.locator('div.rounded-b-xl.shadow-xl');
    await expect(dropdown).toBeVisible();

    // Wait for GraphQL to resolve and render at least one category link
    await expect(dropdown.locator('a').first()).toBeVisible({ timeout: 10_000 });
    const linkCount = await dropdown.locator('a').count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('search bar opens when search button clicked', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();
  });

  test('search accepts text input', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    const input = page.getByPlaceholder('Search destinations, tours…');
    await input.fill('Hanoi');
    await expect(input).toHaveValue('Hanoi');
  });

  test('tours dropdown closes when page is scrolled', async ({ page }) => {
    const nav = page.locator('nav');
    await nav.getByRole('button', { name: 'Tours & Activities' }).click();
    await expect(page.locator('div.rounded-b-xl.shadow-xl')).toBeVisible();

    await page.evaluate(() => window.scrollBy(0, 200));
    await expect(page.locator('div.rounded-b-xl.shadow-xl')).not.toBeVisible();
  });

  test('navbar becomes sticky with white background after scrolling', async ({ page }) => {
    // Initially navbar is absolute (over hero)
    const nav = page.locator('nav');
    await expect(nav).not.toHaveClass(/fixed/);

    await page.evaluate(() => window.scrollBy(0, 300));
    await expect(nav).toHaveClass(/fixed/, { timeout: 2000 });
    await expect(nav).toHaveClass(/bg-white/);
  });

  test('pressing Escape restores nav interaction after search opens', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();

    await page.keyboard.press('Escape');

    // After search closes, the nav buttons should be interactive again.
    // Clicking Tours & Activities should open the dropdown.
    const nav = page.locator('nav');
    await nav.getByRole('button', { name: 'Tours & Activities' }).click();
    await expect(page.locator('div.rounded-b-xl.shadow-xl')).toBeVisible();
  });
});
