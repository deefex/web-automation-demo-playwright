import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ExitIntentPage extends BasePage {
  readonly modal: Locator;

  constructor(page: Page) {
    super(page);
    // The modal element
    this.modal = page.locator('#ouibounce-modal');
  }

  async openExitIntentPage(): Promise<void> {
    await this.open('/exit_intent');
    // Wait only for the main page heading to avoid strict mode errors
    await this.page.locator('h3', { hasText: 'Exit Intent' }).waitFor({ state: 'visible' });
  }

  async showModal(): Promise<void> {
    await this.page.evaluate(() => {
      const modal = document.querySelector('#ouibounce-modal') as HTMLElement;
      if (modal) modal.style.display = 'block';
    });
  }

  async isModalVisible(): Promise<boolean> {
    return this.modal.isVisible();
  }
}