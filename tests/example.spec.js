import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  console.log(process.env.DAY_OF_WEEK);
  console.log(process.env.Greeting);
  console.log("111");
  /* await page.goto("https://commitquality.com/add-product");
  await page.getByTestId("product-textbox").click();
  await page.getByTestId("product-textbox").fill(process.env.DEMO);
  await page.getByTestId("price-textbox").click();
  await page.getByTestId("price-textbox").fill("100");
  await page.getByTestId("date-stocked").fill("2024-10-04");
  await page.getByTestId("submit-form").click();
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await expect(page).toHaveTitle("CommitQuality - Test Automation Demo");
   */
});
