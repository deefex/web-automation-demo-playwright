import { BasePage } from './base.page';
import { expect } from '@playwright/test';
import { SecurePage } from './secure.page.';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('#username');
  private passwordInput = this.page.locator('#password');
  private loginButton = this.page.locator('button[type="submit"]');
  private flashMessage = this.page.locator('#flash');

  async openLoginPage() {
    await this.open('/login');
    await expect(this.page).toHaveURL(/.*\/login/);
  }

  async attemptLogin(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertInvalidLogin() {
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText('Your username is invalid!');
  }

  async loginSuccessfully(username: string, password: string): Promise<SecurePage> {
    await this.attemptLogin(username, password);
    const securePage = new SecurePage(this.page);
    await securePage.waitForPageToLoad();
    return securePage;
  }
}