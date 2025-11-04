import { test, expect } from '@playwright/test';
import { ChallengingDomPage } from '../src/pages/challenging-dom.page';

test.describe('Challenging DOM', () => {
  test.beforeEach(async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    await challengingDomPage.openChallengingDomPage();
  });

  test('the BLUE button should exist within the DOM', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    await expect(challengingDomPage.blueButton).toBeVisible();
  });

  test('the RED button should exist within the DOM', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    await expect(challengingDomPage.redButton).toBeVisible();
  });

  test('the GREEN button should exist within the DOM', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    await expect(challengingDomPage.greenButton).toBeVisible();
  });

  test('the ANSWER PANEL should exist within the DOM', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    await expect(challengingDomPage.answerPanel).toBeVisible();
  });

  test('the TABLE should exist within the DOM', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    await expect(challengingDomPage.table).toBeVisible();
  });

  test('the TABLE should contain 10 rows', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    const rowCount = await challengingDomPage.getRowCount();
    expect(rowCount).toBe(10);
  });

  test('the TABLE should contain 7 columns', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    const colCount = await challengingDomPage.getColumnCount();
    expect(colCount).toBe(7);
  });
});