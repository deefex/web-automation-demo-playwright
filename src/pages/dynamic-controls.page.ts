import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class DynamicControlsPage extends BasePage {
  readonly removeAddButton: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    super(page);
    // Buttons and dynamic elements
    this.removeAddButton = page.locator('button', { hasText: /Remove|Add/ }); // Matches either button
    this.checkbox1 = page.locator('input[type="checkbox"]').first(); // initial checkbox
    this.checkbox2 = page.locator('#checkbox'); // checkbox after add
    this.message = page.locator('#message'); // feedback message
  }

  async openDynamicControlsPage(): Promise<void> {
    await this.open('/dynamic_controls');
    // Wait for the main page heading only, to avoid strict mode errors
    await this.page.locator('h4', { hasText: 'Dynamic Controls' }).waitFor({ state: 'visible' });
  }

  async clickRemoveAddButton(): Promise<void> {
    await this.removeAddButton.click();
  }

  async waitForMessage(): Promise<void> {
    await this.message.waitFor({ state: 'visible' });
  }

  async isCheckboxVisible(checkbox: Locator): Promise<boolean> {
    return checkbox.isVisible();
  }

  // Optional helper to toggle checkbox with wait for message
  async toggleCheckbox(): Promise<void> {
    await this.clickRemoveAddButton();
    await this.waitForMessage();
  }
}