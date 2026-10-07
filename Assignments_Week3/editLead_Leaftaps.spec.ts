import { test, expect } from "@playwright/test";

test("Find and Edit Lead", async ({ page }) => {

    // 1. Navigate to Leaftaps
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // 2. Enter username
    await page.locator("#username").fill("Demosalesmanager");

    // 3. Enter password
    await page.locator("#password").fill("crmsfa");

    // 4. Click Login
    await page.locator(".decorativeSubmit").click();

    // 5. Click CRM/SFA
    await page.locator('[id="label"]').click()

    // 6. Click Leads
    await page.locator('//a[text()="Leads"]').click();

    // 7. Click Find Leads
    await page.locator('//a[text()="Find Leads"]').click();

    // 8. Search for an existing lead by first name
     await page.locator('//input[@name="firstName"]').nth(2).fill('NareshUpdated');

    // 9. Click Find Leads button
    await page.getByRole("button", { name: "Find Leads" }).click();

    // 10. Wait for search result and open the lead
    await page.getByText("Naresh").first().click();

    // 11. Click Edit
    await page.getByText("Edit").click();

    // 12. Change the First Name
    await page.locator("#updateLeadForm_firstName").fill("Nareshkumar");

    // 13. Change the Company Name
    await page.locator("#updateLeadForm_companyName").fill("Testleaf taps");

    // 14. Click Update
    await page.getByRole("button", { name: "Update" }).click();

    // 15. Verify updated details
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Nareshkumar");

    await expect(page.locator("#viewLead_companyName_sp")).toHaveText(/Testleaf taps/);

    // 16. Get page title
    console.log(`The title of the page is ${await page.title()}`);
});
