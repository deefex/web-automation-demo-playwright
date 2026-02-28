import { test } from '@playwright/test';
import { CheckboxesPage } from '../src/pages/checkboxes.page';
import { expectCheckboxState } from '../src/helpers/assertions';

test.describe('Checkboxes', () => {
  let checkboxesPage: CheckboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.openCheckboxesPage();
  });

  test('the first checkbox should be unchecked by default', async () => {
    await expectCheckboxState(checkboxesPage.checkbox1, false);
  });

  test('the second checkbox should be checked by default', async () => {
    await expectCheckboxState(checkboxesPage.checkbox2, true);
  });

  test('the first checkbox should be checked after clicking it', async () => {
    await checkboxesPage.checkbox1.click();
    await expectCheckboxState(checkboxesPage.checkbox1, true);
  });

  test('the second checkbox should be unchecked after clicking it', async () => {
    await checkboxesPage.checkbox2.click();
    await expectCheckboxState(checkboxesPage.checkbox2, false);
  });
});
