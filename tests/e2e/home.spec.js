import { expect, test } from "@playwright/test";

test("homepage renders the latest posts with topics", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("KevinRuffe.com");
  await expect(page.getByRole("heading", { level: 1, name: "Thoughts" })).toBeVisible();
  expect(await page.getByRole("article").count()).toBeGreaterThan(0);
});
