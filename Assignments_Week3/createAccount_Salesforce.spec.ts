import { test, expect } from "@playwright/test";

test("Salesforce Login 2", async ({ page }) => {

    //Load the Salesforce url

    await page.goto("https://orgfarm-3df1426b47-dev-ed.develop.lightning.force.com/lightning/page/home")

    //Assert Page Title and URL

    await expect(page).toHaveURL(/home/)

    await expect(page).toHaveTitle("Home | Salesforce")

    //click View All

    await page.getByRole('button', { name: 'App Launcher' }).click()

    await page.waitForLoadState('domcontentloaded');

    const viewAll = page.locator("[aria-label='View All Applications']")

    viewAll.waitFor({ state: "visible" })

    await page.getByText('View All', { exact: true }).last().click()

    await page.waitForLoadState('domcontentloaded');

    //click Search Apps

    const searchApps = page.getByPlaceholder('Search apps or items...')

    await searchApps.waitFor({ state: "visible" })

    await searchApps.fill('Service')

    await page.waitForLoadState('domcontentloaded');

    //click Service

    const service = page.locator('(//mark[text()="Service"])[1]')

    await service.waitFor({ state: "visible" })

    await service.click()

    await page.waitForLoadState('domcontentloaded');

    await expect.soft(page.locator("h1.appName [title='Service']")).toBeVisible();

    //Create New Account

    await page.locator('[title="Accounts"]').click()

    await page.getByRole('button', { name: "New", exact: true }).click()

    await page.locator('[name="Name"]').fill("Naresh111111111")

    await page.locator('//button[@name="SaveEdit"]').click()

    //Verify Toaster message

    await expect.soft(page.locator("span.toastMessage")).toBeVisible();

    await expect.soft(page.locator("span.toastMessage")).toHaveText(/created/);

}
)