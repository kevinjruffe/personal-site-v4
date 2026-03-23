import { expect, test } from "@playwright/test";

test("mobile navigation toggles open and routes to primary pages", async ({ page, isMobile }) => {
  test.skip(!isMobile, "This interaction only exists on the mobile navigation layout.");

  await page.goto("/");

  const navToggle = page.locator('button[aria-controls="site-navigation"]');
  const nav = page.getByRole("navigation", { name: "Primary" });

  await expect(nav).toBeHidden();
  await expect(navToggle).toHaveAttribute("aria-expanded", "false");

  await navToggle.click();

  await expect(nav).toBeVisible();
  await expect(navToggle).toHaveAttribute("aria-expanded", "true");

  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "About Me" })).toBeVisible();

  await page.goto("/");
  await page.locator('button[aria-controls="site-navigation"]').click();
  await page.getByRole("link", { name: "Resume" }).click();
  await expect(page).toHaveURL(/\/resume\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "Resume" })).toBeVisible();
});

test("desktop navigation exposes primary links without the mobile toggle", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "Desktop-only navigation assertions.");

  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Primary" });
  const navToggle = page.locator('button[aria-controls="site-navigation"]');

  await expect(nav).toBeVisible();
  await expect(navToggle).toBeHidden();

  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "About Me" })).toBeVisible();

  await page.goto("/");
  await page.getByRole("link", { name: "Resume" }).click();
  await expect(page).toHaveURL(/\/resume\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "Resume" })).toBeVisible();
});
