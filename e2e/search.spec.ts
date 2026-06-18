import { test, expect } from '@playwright/test';

test.describe('Search — Desktop', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('search dropdown shows empty state before typing', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();
    await expect(page.getByText('Start typing to search')).toBeVisible();
  });

  test('search results appear after typing 2+ characters', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    const input = page.getByPlaceholder('Search destinations, tours…');
    await input.fill('Ha');
    // Dropdown should no longer show the empty state prompt
    await expect(page.getByText('Start typing to search')).not.toBeVisible();
  });

  test('clicking inside search input does not close the dropdown', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    const input = page.getByPlaceholder('Search destinations, tours…');
    await input.click();
    // Input should still be visible — bug regression check
    await expect(input).toBeVisible();
  });

  test('X button closes search and restores nav', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();
    // Click the X button inside the search bar
    await page.locator('div.absolute.inset-0').getByRole('button').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).not.toBeVisible();
  });

  test('clicking outside pill closes search', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();
    await page.mouse.click(50, 400);
    await expect(page.getByPlaceholder('Search destinations, tours…')).not.toBeVisible();
  });

  test('Escape key closes search', async ({ page }) => {
    await page.locator('button.bg-gray-300').click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByPlaceholder('Search destinations, tours…')).not.toBeVisible();
  });
});

test.describe('Search — Mobile', () => {
  test.use({ viewport: { width: 393, height: 851 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('search icon is visible on mobile nav', async ({ page }) => {
    // Mobile right actions contain the search icon button
    const mobileActions = page.locator('div.md\\:hidden.flex.items-center');
    await expect(mobileActions.locator('button').first()).toBeVisible();
  });

  test('tapping search opens mobile search overlay', async ({ page }) => {
    const mobileActions = page.locator('div.md\\:hidden.flex.items-center');
    await mobileActions.locator('button').first().click();
    await expect(page.getByPlaceholder('Search destinations, tours…')).toBeVisible();
  });

  test('mobile search shows empty state before typing', async ({ page }) => {
    const mobileActions = page.locator('div.md\\:hidden.flex.items-center');
    await mobileActions.locator('button').first().click();
    await expect(page.getByText('Start typing to search')).toBeVisible();
  });
});
