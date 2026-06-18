import { test, expect } from '@playwright/test';

test.describe('Credentials Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('heading', { name: 'Our Credentials' }).scrollIntoViewIfNeeded();
  });

  test('section heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Credentials' })).toBeVisible();
  });

  test('descriptive copy is visible', async ({ page }) => {
    await expect(page.getByText('Recognised by the industry')).toBeVisible();
  });

  test('Tripadvisor logo is rendered', async ({ page }) => {
    await expect(page.getByAltText('Tripadvisor')).toBeVisible();
  });

  test('Tripadvisor label and description are visible', async ({ page }) => {
    await expect(page.getByText('Tripadvisor', { exact: true })).toBeVisible();
    await expect(page.getByText('Read Reviews').first()).toBeVisible();
  });

  test('credentials section appears after cruises carousel', async ({ page }) => {
    const cruises = page.getByRole('heading', { name: 'Halong Bay Cruises' });
    const credentials = page.getByRole('heading', { name: 'Our Credentials' });

    const cruisesY = (await cruises.boundingBox())?.y ?? 0;
    const credentialsY = (await credentials.boundingBox())?.y ?? 0;

    expect(credentialsY).toBeGreaterThan(cruisesY);
  });
});
