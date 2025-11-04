import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class DropdownPage extends BasePage {
  readonly heading: Locator;
  readonly dropdown: Locator;
  readonly options: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h3');
    this.dropdown = page.locator('#dropdown');
    this.options = page.locator('#dropdown option');
  }

  async openDropdownPage(): Promise<void> {
    await this.open('/dropdown');
    await this.waitForVisible('#dropdown');
  }

  async getSelectedValue(): Promise<string | null> {
    return this.dropdown.inputValue();
  }

  async selectByValue(value: string): Promise<void> {
    await this.dropdown.selectOption({ value });
  }

  async selectByIndex(index: number): Promise<void> {
    const value = await this.options.nth(index).getAttribute('value');
    if (!value) throw new Error(`Option at index ${index} has no value`);
    await this.dropdown.selectOption(value);
  }

  async getOptionTexts(): Promise<string[]> {
    const texts = await this.options.allTextContents();
    return texts.map((t) => t.trim());
  }
}