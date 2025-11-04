import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class DynamicLoadingPage2 extends BasePage {
  readonly heading: Locator;
  readonly startButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h3');
    this.startButton = page.locator('#start > button');
    this.message = page.locator('#finish');
  }

  async openDynamicLoadingPage2(): Promise<void> {
    await this.open('/dynamic_loading/2');
    await this.heading.waitFor({ state: 'visible' });
  }

  async clickStart(): Promise<void> {
    await this.startButton.click();
  }

  async waitForMessage(): Promise<void> {
    await this.message.waitFor({ state: 'visible', timeout: 10000 });
  }

  async exists(): Promise<boolean> {
    return this.message.count().then((c) => c > 0);
  }

  async isVisible(): Promise<boolean> {
    return this.message.isVisible();
  }
}