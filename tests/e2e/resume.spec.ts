import { expect, test } from "@playwright/test";

test("resume page exposes the embedded PDF and document actions", async ({ page, request }) => {
  await page.goto("/resume");

  await expect(page.getByRole("heading", { level: 1, name: "Resume" })).toBeVisible();
  await expect(page.locator('object[aria-label="PDF resume for Kevin Ruffe"]')).toHaveAttribute(
    "data",
    "/resume.pdf",
  );

  const openInNewTabLink = page.getByRole("link", { name: "Open in New Tab" });
  await expect(openInNewTabLink).toHaveAttribute("href", "/resume.pdf");
  await expect(openInNewTabLink).toHaveAttribute("target", "_blank");

  await expect(page.getByRole("link", { name: "Download PDF" })).toHaveAttribute("download", "");

  const resumeResponse = await request.get("/resume.pdf");
  expect(resumeResponse.ok()).toBeTruthy();
});
