import { test, expect } from "@playwright/test";
import { generateToken, createCase, retrieveCase, deleteCase } from "../../utils/API/salesforceCaseAPI";

test.use({storageState: '.auth/user.json'});

test("Learn E2E testing using Playwright", async ({ page, request }) => {

    // API - Case Creation

    await generateToken(request);

    await createCase(request);

    const caseNumber = await retrieveCase(request);

    // UI - Open Salesforce

    await page.goto("https://orgfarm-3df1426b47-dev-ed.develop.lightning.force.com/lightning/page/home");

    await page.getByTitle("App Launcher", { exact: true }).click()

    await page.locator('//button[text()="View All"]').click();

    await page.getByPlaceholder('Search apps or items...', { exact: true }).fill("Sales");

    await page.getByText('Sales', { exact: true }).nth(2).click();

    await page.getByRole('button', {name: "Show more navigation items", exact: true}).click()

   await page.getByRole('menuitem', { name: 'Cases', exact: true}).click();

    const searchBox = page.getByPlaceholder("Search this list...", { exact: true });
    
    await searchBox.fill(caseNumber);

    await searchBox.press("Enter");

    const caseRow = page.getByRole("row").filter({ hasText: caseNumber });

    await expect(caseRow).toBeVisible();

    await caseRow.getByRole("button", { name: "Show Actions" }).click();

    await page.getByText("Edit", { exact: true }).click();

    await page.getByRole("combobox", { name: "Status" }).click();

    await page.getByRole("option", { name: "Working" }).click();

    await page.getByRole("combobox", { name: "Priority" }).click();

    await page.getByRole("option", { name: "Low" }).click();

    await page.getByRole("combobox", { name: "Case Origin" }).click();

    await page.getByRole("option", { name: "Phone" }).click();

    await page.getByRole("combobox", { name: /SLA Violation/ }).click();

    await page.getByRole("option", { name: "No", exact: true }).click();

    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.getByText("Working", { exact: true })).toBeVisible();

    await deleteCase(request);

})
