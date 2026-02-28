import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SecurePage } from '../pages/secure.page';
import { credentials } from '../testdata/credentials';

type AuthFixtures = {
  loginPage: LoginPage;
  authenticatedPage: SecurePage;
};

export const test = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use) => {
    const pageObject = new LoginPage(page);
    await pageObject.openLoginPage();
    await use(pageObject);
  },
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    const securePage = await loginPage.loginSuccessfully(
      credentials.valid.username,
      credentials.valid.password
    );
    await use(securePage);
  },
});

export { expect };
