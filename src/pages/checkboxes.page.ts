import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class CheckboxesPage extends BasePage {
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox1 = page.locator('input[type="checkbox"]').first();
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
  }

  async openCheckboxesPage(): Promise<void> {
    await this.open('/checkboxes');
    await this.checkbox1.waitFor({ state: 'visible' });
  }

  async isChecked(locator: Locator): Promise<boolean> {
    return locator.isChecked();
  }

  async toggleCheckbox(locator: Locator): Promise<void> {
    await locator.click();
  }
}