import { test, expect } from '@playwright/test';
import { DynamicLoadingPage2 } from '../src/pages/dynamic-loading2.page';

test.describe('Dynamic Loading 2', () => {
  let dynamicPage: DynamicLoadingPage2;

  test.beforeEach(async ({ page }) => {
    dynamicPage = new DynamicLoadingPage2(page);
    await dynamicPage.openDynamicLoadingPage2();
  });

  test('"Hello World!" message does not exist by default', async () => {
    expect(await dynamicPage.exists()).toBe(false);
  });

  test('"Hello World!" message is not visible by default', async () => {
    expect(await dynamicPage.isVisible()).toBe(false);
  });

  test('clicking Start makes the message exist', async () => {
    await dynamicPage.clickStart();
    await dynamicPage.waitForMessage();
    expect(await dynamicPage.exists()).toBe(true);
  });

  test('clicking Start makes the message visible', async () => {
    await dynamicPage.clickStart();
    await dynamicPage.waitForMessage();
    expect(await dynamicPage.isVisible()).toBe(true);
  });
});