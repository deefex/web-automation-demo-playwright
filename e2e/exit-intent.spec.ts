import { test, expect } from '@playwright/test';
import { ExitIntentPage } from '../src/pages/exit-intent.page';

test.describe('Exit Intent', () => {
  let exitPage: ExitIntentPage;

  test.beforeEach(async ({ page }) => {
    exitPage = new ExitIntentPage(page);
    await exitPage.openExitIntentPage();
  });

  test('modal becomes visible when triggered', async () => {
    await exitPage.showModal();
    expect(await exitPage.isModalVisible()).toBe(true);
  });
});