import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page, protected baseUrl: string = process.env.BASE_URL || '') {}

  async open(path: string): Promise<void> {
    const url = path.startsWith('http') ? path : `${this.baseUrl}${path}`;
    await this.page.goto(url);
  }

  async expectTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
  }

  async waitForVisible(selector: string): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }
}