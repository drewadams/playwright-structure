import { expect, test } from "@playwright/test";

test("example functional test", async ({ page }) => {
  await page.goto("https://www.google.com");
  const title = await page.title();
  expect(title).toBe("Google");
});
