import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class DynamicContentPage extends BasePage {
  readonly heading: Locator;
  readonly row1Img: Locator;
  readonly row1Text: Locator;
  readonly row2Img: Locator;
  readonly row2Text: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h3');
    this.row1Img = page.locator('#content > div:nth-of-type(1) img');
    this.row1Text = page.locator('#content > div:nth-of-type(1) div:nth-of-type(2)');
    this.row2Img = page.locator('#content > div:nth-of-type(2) img');
    this.row2Text = page.locator('#content > div:nth-of-type(2) div:nth-of-type(2)');
  }

  async openDynamicContentPage(): Promise<void> {
    await this.open('/dynamic_content?with_content=static');
    await this.waitForVisible('h3');
  }

  async getRowText(row: number): Promise<string> {
    // Select the row by nth-of-type
    const rowLocator = this.page.locator(`#content > div.row`).nth(row - 1);
    const textLocator = rowLocator.locator('div.large-10.columns');
    return (await textLocator.first().textContent())?.trim() || '';
  }

  async getRowImageSrc(row: number): Promise<string> {
    const rowLocator = this.page.locator(`#content > div.row`).nth(row - 1);
    const imgLocator = rowLocator.locator('img');
    return (await imgLocator.first().getAttribute('src')) || '';
  }
}