import { test, expect } from '@playwright/test';
import { AbTestPage } from '../src/pages/abtest.page';

test.describe('A/B Testing', () => {
  test('displays either the Control or Variation 1 page', async ({ page }) => {
    const abTestPage = new AbTestPage(page);
    await abTestPage.openAbTestPage();

    const headingText = await abTestPage.getHeadingText();
    const abVariations = ['A/B Test Variation 1', 'A/B Test Control'];
    expect(abVariations).toContain(headingText?.trim());
  });

  test('displays the No A/B Test page when opt-out cookie is set', async ({ page }) => {
    const abTestPage = new AbTestPage(page);
    await abTestPage.setOptOutCookie();
    await abTestPage.openAbTestPage();

    const headingText = await abTestPage.getHeadingText();
    expect(headingText?.trim()).toBe('No A/B Test');
  });

  test('verifies that the opt-out cookie is present and has the correct value', async ({ page }) => {
    const abTestPage = new AbTestPage(page);
    await abTestPage.setOptOutCookie();

    const cookies = await abTestPage.getCookies();
    const optOutCookie = cookies.find((c) => c.name === 'optimizelyOptOut');

    expect(optOutCookie).toBeDefined();
    expect(optOutCookie?.value).toBe('true');
  });
});