import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  console.log(process.env.DEMO);
  await page.goto("https://commitquality.com/add-product");
  await page.getByTestId("product-textbox").click();
  await page.getByTestId("product-textbox").fill("process.env.DEMO");
  await page.getByTestId("price-textbox").click();
  await page.getByTestId("price-textbox").fill("100");
  await page.getByTestId("date-stocked").fill("2024-10-04");
  await page.getByTestId("submit-form").click();
  await expect(page).toHaveTitle("CommitQuality - Test Automation Demo");
});
