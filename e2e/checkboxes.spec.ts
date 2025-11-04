import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../src/pages/checkboxes.page';

test.describe('Checkboxes', () => {
  let checkboxesPage: CheckboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.openCheckboxesPage();
  });

  test('the first checkbox should be unchecked by default', async () => {
    await expect(checkboxesPage.checkbox1).not.toBeChecked();
  });

  test('the second checkbox should be checked by default', async () => {
    await expect(checkboxesPage.checkbox2).toBeChecked();
  });

  test('the first checkbox should be checked after clicking it', async () => {
    await checkboxesPage.checkbox1.click();
    await expect(checkboxesPage.checkbox1).toBeChecked();
  });

  test('the second checkbox should be unchecked after clicking it', async () => {
    await checkboxesPage.checkbox2.click();
    await expect(checkboxesPage.checkbox2).not.toBeChecked();
  });
});