import { expect, test } from "@playwright/test";

test("homepage renders the latest posts with topics", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("KevinRuffe.com");
  await expect(page.getByRole("heading", { level: 1, name: "Thoughts" })).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(2);

  const titles = page.getByRole("article").getByRole("heading", { level: 1 }).locator("a");
  await expect(titles.nth(0)).toHaveText("Recommendation: That They May Face the Rising Sun");
  await expect(titles.nth(1)).toHaveText("My Faith");

  await expect(page.getByRole("link", { name: "film" })).toBeVisible();
  await expect(page.getByRole("link", { name: "poetry" })).toBeVisible();
});
