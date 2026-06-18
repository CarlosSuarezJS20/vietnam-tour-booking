import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Booking Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to the booking form section
    await page.getByRole('heading', { name: 'Plan Your Trip' }).scrollIntoViewIfNeeded();
  });

  test('booking form section is visible with heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Plan Your Trip' })).toBeVisible();
    await expect(page.getByText("Tell us what you're looking for")).toBeVisible();
  });

  test('step indicator renders all 6 steps', async ({ page }) => {
    for (const label of ['Tour Type', 'Destination', 'Dates', 'Your Details', 'Contact', 'Confirmed']) {
      await expect(page.getByText(label, { exact: true })).toBeVisible();
    }
  });

  test('first step shows tour type options', async ({ page }) => {
    await expect(page.getByText('What kind of tour?')).toBeVisible();
    await expect(page.getByRole('button', { name: /Cultural Tours/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Adventure Tours/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Ha Long Bay Cruise/ })).toBeVisible();
  });

  test('Continue button is disabled until a tour type is selected', async ({ page }) => {
    const continueBtn = page.getByRole('button', { name: 'Continue' });
    await expect(continueBtn).toBeDisabled();
  });

  test('selecting a tour type enables Continue', async ({ page }) => {
    await page.getByRole('button', { name: /Cultural Tours/ }).click();
    await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled();
  });

  test('Back button is disabled on step 1', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Back' })).toBeDisabled();
  });

  test('advancing to step 2 shows destination options', async ({ page }) => {
    await page.getByRole('button', { name: /Cultural Tours/ }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Where would you like to go?')).toBeVisible();
  });

  test('Back button on step 2 returns to step 1', async ({ page }) => {
    await page.getByRole('button', { name: /Cultural Tours/ }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Where would you like to go?')).toBeVisible();
    await page.getByRole('button', { name: 'Back' }).click();
    await expect(page.getByText('What kind of tour?')).toBeVisible();
  });

  test('form card stays the same height across steps', async ({ page }) => {
    const card = page.locator('.min-h-\\[540px\\]');
    const heightStep1 = (await card.boundingBox())?.height ?? 0;

    await page.getByRole('button', { name: /Cultural Tours/ }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // Wait for step 2 to render
    await expect(page.getByText('Where would you like to go?')).toBeVisible();
    const heightStep2 = (await card.boundingBox())?.height ?? 0;

    expect(Math.abs(heightStep1 - heightStep2)).toBeLessThanOrEqual(2);
  });

  test('dates step shows departure date input and night counter', async ({ page }) => {
    // Step 1
    await page.getByRole('button', { name: /Cultural Tours/ }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Step 2 — region must be selected; wait for regions to load and pick first
    await expect(page.getByText('Where would you like to go?')).toBeVisible({ timeout: 10_000 });
    const regionBtn = page.locator('button').filter({ hasText: /North|Central|South/ }).first();
    await regionBtn.waitFor({ timeout: 10_000 });
    await regionBtn.click();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Step 3
    await expect(page.getByText('When are you travelling?')).toBeVisible();
    await expect(page.locator('input[type="date"]')).toBeVisible();
    await expect(page.getByText('Number of nights')).toBeVisible();
  });

  test('night counter increments and decrements', async ({ page }) => {
    // Navigate to step 3
    await page.getByRole('button', { name: /Cultural Tours/ }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Where would you like to go?')).toBeVisible({ timeout: 10_000 });
    const regionBtn = page.locator('button').filter({ hasText: /North|Central|South/ }).first();
    await regionBtn.waitFor({ timeout: 10_000 });
    await regionBtn.click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('When are you travelling?')).toBeVisible();

    // Default is 7 nights; increment to 8
    await page.getByRole('button', { name: '+' }).click();
    await expect(page.getByText('8')).toBeVisible();

    // Decrement back to 7
    await page.getByRole('button', { name: '−' }).click();
    await expect(page.getByText('7')).toBeVisible();
  });

  test('contact step shows Phone, Email, WhatsApp options', async ({ page }) => {
    // Jump directly by filling minimal required state
    // Step 1
    await page.getByRole('button', { name: /Custom/ }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Step 2 — pick a region
    await expect(page.getByText('Where would you like to go?')).toBeVisible({ timeout: 10_000 });
    const regionBtn = page.locator('button').filter({ hasText: /North|Central|South/ }).first();
    await regionBtn.waitFor({ timeout: 10_000 });
    await regionBtn.click();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Step 3 — set date
    await expect(page.getByText('When are you travelling?')).toBeVisible();
    await page.locator('input[type="date"]').fill('2026-09-01');
    await page.getByRole('button', { name: 'Continue' }).click();
    // Step 4 — fill details
    await page.getByPlaceholder('Jane Smith').fill('Carlos Test');
    await page.getByPlaceholder('jane@example.com').fill('carlos@test.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    // Step 5 — contact
    await expect(page.getByText('How would you like to discuss your trip?')).toBeVisible();
    await expect(page.getByRole('button', { name: /Phone Call/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Email/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /WhatsApp/ })).toBeVisible();
  });
});
