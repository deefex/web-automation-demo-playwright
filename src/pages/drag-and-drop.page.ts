import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class DragAndDropPage extends BasePage {
  readonly heading: Locator;
  readonly columnA: Locator;
  readonly columnB: Locator;
  readonly headerA: Locator;
  readonly headerB: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h3');
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
    this.headerA = page.locator('#column-a header');
    this.headerB = page.locator('#column-b header');
  }

  async openDragAndDropPage(): Promise<void> {
    await this.open('/drag_and_drop');
    await this.waitForVisible('h3');
  }

  async dragAtoB(): Promise<void> {
    await this.columnA.dragTo(this.columnB);
  }

  async dragBtoA(): Promise<void> {
    await this.columnB.dragTo(this.columnA);
  }

  async getColumnHeaders(): Promise<{ a: string; b: string }> {
    const a = await this.headerA.textContent();
    const b = await this.headerB.textContent();
    return { a: a?.trim() || '', b: b?.trim() || '' };
  }
}