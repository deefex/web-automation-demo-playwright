import { test, expect } from '@playwright/test';
import { BrokenImagesPage } from '../src/pages/broken-images.page';

test.describe('Broken Images', () => {
  test('detects at least one broken image via DOM inspection', async ({ page }) => {
    const brokenImagesPage = new BrokenImagesPage(page);
    await brokenImagesPage.openBrokenImagesPage();
    const hasBrokenImages = await brokenImagesPage.hasBrokenImages();
    expect(hasBrokenImages).toBe(true);
  });

  test('detects broken images via HTTP status codes', async ({ page }) => {
    const brokenImagesPage = new BrokenImagesPage(page);
    await brokenImagesPage.openBrokenImagesPage();

    const brokenUrls = await brokenImagesPage.getBrokenImageUrlsByHTTP();
    console.log('Broken images detected:', brokenUrls);

    expect(brokenUrls.length).toBeGreaterThan(0);
  });
});