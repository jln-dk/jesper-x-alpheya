import { expect, test } from "@playwright/test";

test("should redirect to login page if not authenticated", async ({ page }) => {
  // Go to homepage
  await page.goto("/");

  // Find and click the "Upload Portfolio" link
  const uploadLink = page.getByRole("link", { name: "Upload Portfolio" });
  await expect(uploadLink).toBeVisible();
  await uploadLink.click();

  // Verify we're on the login page
  await expect(page).toHaveURL("/sign-in");
  await expect(page.getByRole("heading", { name: "Log in" })).toBeVisible();
});
