import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ChallengingDomPage extends BasePage {
  readonly blueButton: Locator;
  readonly redButton: Locator;
  readonly greenButton: Locator;
  readonly answerPanel: Locator;
  readonly table: Locator;
  readonly tableRows: Locator;
  readonly tableCols: Locator;

  constructor(page: Page) {
    super(page);
    this.blueButton = page.locator('.button:not(.alert):not(.success)');
    this.redButton = page.locator('.button.alert');
    this.greenButton = page.locator('.button.success');
    this.answerPanel = page.locator('#canvas');
    this.table = page.locator('table');
    this.tableRows = page.locator('table tbody tr');
    this.tableCols = page.locator('table thead th');
  }

  async openChallengingDomPage(): Promise<void> {
    await this.open('/challenging_dom');
    await this.waitForVisible('table');
  }

  async getRowCount(): Promise<number> {
    return this.tableRows.count();
  }

  async getColumnCount(): Promise<number> {
    return this.tableCols.count();
  }
}