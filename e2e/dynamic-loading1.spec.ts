import { test, expect } from '@playwright/test';
import { DynamicLoadingPage1 } from '../src/pages/dynamic-loading1.page';

test.describe('Dynamic Loading 1', () => {
  let dynamicPage: DynamicLoadingPage1;

  test.beforeEach(async ({ page }) => {
    dynamicPage = new DynamicLoadingPage1(page);
    await dynamicPage.openDynamicLoadingPage1();
  });

  test('the "Hello World!" message exists in the DOM by default', async () => {
    expect(await dynamicPage.message.count()).toBe(1); // element exists
  });

  test('the "Hello World!" message is NOT visible by default', async () => {
    expect(await dynamicPage.isMessageVisible()).toBe(false);
  });

  test('clicking Start makes the "Hello World!" message visible', async () => {
    await dynamicPage.clickStart();
    await dynamicPage.waitForMessage();
    expect(await dynamicPage.isMessageVisible()).toBe(true);
  });
});