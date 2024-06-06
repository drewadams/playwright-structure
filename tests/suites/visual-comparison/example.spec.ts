import { expect, test } from "@playwright/test";

test("example visual comparison test", async ({ page }) => {
  await page.goto("https://www.google.com");
  const image = await page.screenshot({ fullPage: true });
  expect(image).toMatchSnapshot({ maxDiffPixelRatio: 0.2 });
});
