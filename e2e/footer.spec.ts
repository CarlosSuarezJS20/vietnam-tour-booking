import { test, expect } from '@playwright/test';

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  });

  test('footer is visible', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Travel Vietnam logo is in the footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByAltText('Travel Vietnam')).toBeVisible();
  });

  test('social media icons are rendered', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Instagram' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Facebook' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'YouTube' })).toBeVisible();
  });

  test('Popular Tours links are present', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByText('Popular Tours')).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Cultural Tours' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Ha Long Bay Cruises' })).toBeVisible();
  });

  test('Information links are present', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByText('Information')).toBeVisible();
    await expect(footer.getByRole('link', { name: 'FAQ' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Blog' })).toBeVisible();
  });

  test('contact details are visible', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByText('Get in Touch')).toBeVisible();
    await expect(footer.getByText('Hoàn Kiếm, Hanoi')).toBeVisible();
  });

  test('legal links are visible', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Terms & Conditions' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Cookies' })).toBeVisible();
  });

  test('copyright notice is present', async ({ page }) => {
    await expect(page.locator('footer').getByText('Travel Vietnam 2026')).toBeVisible();
  });
});
