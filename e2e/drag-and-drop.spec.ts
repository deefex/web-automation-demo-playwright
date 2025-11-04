import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../src/pages/drag-and-drop.page';

test.describe('Drag & Drop', () => {
  let dragAndDropPage: DragAndDropPage;

  test.beforeEach(async ({ page }) => {
    dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.openDragAndDropPage();
  });

  test('I can successfully drag the element from column A to column B', async () => {
    await dragAndDropPage.dragAtoB();
    const { a, b } = await dragAndDropPage.getColumnHeaders();
    expect(a).toBe('B');
    expect(b).toBe('A');
  });

  test('I can successfully drag the element from column B to column A', async () => {
    await dragAndDropPage.dragBtoA();
    const { a, b } = await dragAndDropPage.getColumnHeaders();
    expect(a).toBe('B');
    expect(b).toBe('A');
  });
});