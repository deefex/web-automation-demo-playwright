import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../src/pages/dynamic-controls.page';

test.describe('Dynamic Controls', () => {
  let dynamicControlsPage: DynamicControlsPage;

  test.beforeEach(async ({ page }) => {
    dynamicControlsPage = new DynamicControlsPage(page);
    await dynamicControlsPage.openDynamicControlsPage();
  });

  test('the checkbox appears by default on page load', async () => {
    expect(await dynamicControlsPage.isCheckboxVisible(dynamicControlsPage.checkbox1)).toBe(true);
  });

  test('the checkbox disappears after clicking the remove button', async () => {
    await dynamicControlsPage.clickRemoveAddButton();
    await dynamicControlsPage.waitForMessage();

    expect(await dynamicControlsPage.isCheckboxVisible(dynamicControlsPage.checkbox1)).toBe(false);
  });

  test('the checkbox reappears after clicking the add button', async () => {
    // Remove first
    await dynamicControlsPage.clickRemoveAddButton();
    await dynamicControlsPage.waitForMessage();

    // Add back
    await dynamicControlsPage.clickRemoveAddButton();
    await dynamicControlsPage.checkbox2.waitFor({ state: 'visible' });

    expect(await dynamicControlsPage.isCheckboxVisible(dynamicControlsPage.checkbox2)).toBe(true);
  });
});