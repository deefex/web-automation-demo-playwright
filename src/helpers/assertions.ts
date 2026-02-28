import { expect, Locator } from '@playwright/test';

export async function expectCheckboxState(checkbox: Locator, checked: boolean): Promise<void> {
  if (checked) {
    await expect(checkbox).toBeChecked();
    return;
  }
  await expect(checkbox).not.toBeChecked();
}

export async function expectColumnHeaders(
  headers: { a: string; b: string },
  expected: { a: string; b: string }
): Promise<void> {
  expect(headers.a).toBe(expected.a);
  expect(headers.b).toBe(expected.b);
}
