import { expect, test } from "@playwright/test";

test("about page exposes the expected biography content and external links", async ({ page }) => {
  await page.goto("/about/");

  await expect(page).toHaveTitle("About Me | KevinRuffe.com");
  await expect(page.getByRole("heading", { level: 1, name: "About Me" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Amor Fati" })).toHaveAttribute(
    "href",
    /merriam-webster\.com/,
  );
  await expect(page.getByRole("link", { name: "This word is not too much." })).toHaveAttribute(
    "href",
    /swarthmore\.edu/,
  );
});
