import { BasePage } from './base.page';
import { expect, Page } from '@playwright/test';

export class AbTestPage extends BasePage {
  private heading = this.page.locator('h3');

  constructor(page: Page) {
    super(page);
  }

  async openAbTestPage(): Promise<void> {
    await this.open('/abtest');
    await this.waitForVisible('h3');
  }

  async getHeadingText(): Promise<string | null> {
    return this.heading.textContent();
  }

  async assertVariationDisplayed(): Promise<void> {
    const headingText = await this.getHeadingText();
    const validVariants = ['A/B Test Control', 'A/B Test Variation 1'];
    expect(validVariants).toContain(headingText?.trim());
  }

  async assertOptOutDisplayed(): Promise<void> {
    const headingText = await this.getHeadingText();
    expect(headingText?.trim()).toBe('No A/B Test');
  }

  async setOptOutCookie(): Promise<void> {
    await this.page.context().addCookies([
      {
        name: 'optimizelyOptOut',
        value: 'true',
        // Use the baseURL from Playwright config
        url: this.baseUrl,
      },
    ]);
  }

  async getCookies() {
    return this.page.context().cookies(this.baseUrl);
  }
}