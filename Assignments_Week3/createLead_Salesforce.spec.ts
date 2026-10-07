import { test, expect } from "@playwright/test";

test("Create Lead in Salesforce", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator('//input[@id="username"]').fill("nareshbadri26.f1a46b578782@agentforce.com")

    await page.locator('//input[@id="Login"]').click()

    await page.locator('//input[@id="password"]').fill("Cricketfan23$")

    await page.locator('//input[@id="Login"]').click()

    await page.waitForTimeout(20000)

    await page.waitForLoadState('domcontentloaded')

    await page.getByRole('button', { name: 'App Launcher' }).click()

    await page.getByLabel('View All Applications', { exact: true }).click()

    const appLauncher = page.getByRole('dialog', { name: 'App Launcher' });

    const searchBox = appLauncher.getByRole('combobox', { name: 'Search apps or items...', exact: true });

    await searchBox.fill('Sales');

    const salesLink = appLauncher.getByRole('link', { name: 'Sales', exact: true });

    await salesLink.click();

    const leadsLink = page.getByRole('link', {name: 'Leads', exact: true});

    await expect(leadsLink).toBeVisible();
    
    await leadsLink.click();

    await page.getByRole('button', { name: 'New' }).click();

    await page.getByRole('combobox', { name: 'Salutation' }).click();

    await page.getByText('Mr.', { exact: true }).click();

    await page.getByRole('textbox', { name: 'Last Name' }).fill("Naresh");

    await page.getByRole('textbox', { name: 'Company' }).fill("Company Alpha");

    await page.getByRole('button', { name: 'Save' }).click();

    const leadName = page.getByText('Mr. Naresh', { exact: true });

    await expect(leadName).toBeVisible();

}
)