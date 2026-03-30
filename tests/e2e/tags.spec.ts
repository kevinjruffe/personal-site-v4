import { expect, test } from "@playwright/test";

test("tags index links to filtered topic pages", async ({ page }) => {
  await page.goto("/tags/");

  await expect(page.getByRole("heading", { level: 1, name: "Topics" })).toBeVisible();
  await expect(page.getByRole("link", { name: "film" })).toBeVisible();
  await expect(page.getByRole("link", { name: "poetry" })).toBeVisible();

  await page.getByRole("link", { name: "film" }).click();
  await expect(page).toHaveURL(/\/tags\/film\/$/);
  await expect(page.getByRole("heading", { level: 1, name: "Topic: film" })).toBeVisible();
  expect(await page.getByRole("article").count()).toBeGreaterThan(0);
  await expect(
    page.getByRole("link", { name: "Recommendation: That They May Face the Rising Sun" }),
  ).toBeVisible();
});
