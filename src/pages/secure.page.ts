import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class SecurePage extends BasePage {
  private logoutButton = this.page.locator('a.button.secondary.radius');
  private flashMessage = this.page.locator('#flash');

  async waitForPageToLoad() {
    await this.logoutButton.waitFor({ state: 'visible' });
  }

  async assertSuccessfulLogin() {
    await expect(this.flashMessage).toContainText('You logged into a secure area!');
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.page).toHaveURL(/.*\/login/);
  }
}