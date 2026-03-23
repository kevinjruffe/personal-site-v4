import { expect, test } from "@playwright/test";

const moviePostPath = "/blog/that-they-may-face-the-rising-sun/";
const poemPostPath = "/blog/my-faith/";

test("blog post detail pages render article content and return link", async ({ page }) => {
  await page.goto(moviePostPath);

  await expect(page).toHaveTitle(/Recommendation: That They May Face the Rising Sun/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Recommendation: That They May Face the Rising Sun",
    }),
  ).toBeVisible();
  await expect(page.getByText("March 21, 2026")).toBeVisible();
  await expect(page.getByTitle("Trailer for That They May Face the Rising Sun")).toBeVisible();
  await expect(page.getByRole("link", { name: "film" })).toBeVisible();

  await page.getByRole("link", { name: "Back to blog" }).click();
  await expect(page).toHaveURL(/\/$/);

  await page.goto(poemPostPath);
  await expect(page.locator("pre")).toContainText("This is my faith.");
});
