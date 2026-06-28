import { expect, test } from "@playwright/test";

test("home page smoke test", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /Full-Stack Product Engineer/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /View selected work/i }),
  ).toBeVisible();
  await expect(page.getByText("CRM by Fatek")).toBeVisible();
});
