import { test, expect } from '@playwright/test';
import { DropdownPage } from '../src/pages/dropdown.page';

test.describe('Dropdown', () => {
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.openDropdownPage();
  });

  test('the default option should be unselected by default', async () => {
    const value = await dropdownPage.getSelectedValue();
    expect(value).toBe(''); // empty string means no value selected
  });

  test('the first option can be selected successfully', async () => {
    await dropdownPage.selectByValue('1');
    const value = await dropdownPage.getSelectedValue();
    expect(value).toBe('1');
  });

  test('the second option can be selected successfully', async () => {
    await dropdownPage.selectByIndex(2);
    const value = await dropdownPage.getSelectedValue();
    expect(value).toBe('2');
  });
});