import { expect, test } from "@playwright/test";

test("home page ships website metadata", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://kevinruffe.com/",
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "website");
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
});

test("article pages ship article metadata", async ({ page }) => {
  await page.goto("/blog/that-they-may-face-the-rising-sun/");

  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
  await expect(page.locator('meta[property="article:published_time"]')).toHaveAttribute(
    "content",
    "2026-03-21T00:00:00.000Z",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "A recommendation of the movie ‘That They May Face the Rising Sun`",
  );
});
