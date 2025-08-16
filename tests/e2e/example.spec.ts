import { test, expect } from "@playwright/test";

test("homepage shows offers title", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.locator("text=Offres disponibles")).toBeVisible();
});
