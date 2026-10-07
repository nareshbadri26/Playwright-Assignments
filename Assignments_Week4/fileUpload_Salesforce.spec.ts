///<reference types = "node"/>


import { test, expect } from '@playwright/test'
import path from 'path'

test("File upload in Salesforce", async ({ page }) => {

    await page.goto("https://orgfarm-3df1426b47-dev-ed.develop.lightning.force.com/lightning/page/home");

    await expect(page).toHaveTitle("Home | Salesforce");

    await page.getByRole('button', { name: 'App Launcher' }).click();

    const viewAllButton = page.locator('//button[@class="slds-button"]');

    await expect(viewAllButton).toBeVisible();

    await viewAllButton.click();

    //Enter Accounts in App Launcher search box -> Click Accounts 

    const searchBox = page.getByPlaceholder("Search apps or items...", { exact: true });

    await expect(searchBox).toBeVisible();

    await searchBox.fill("Accounts");

    const appLauncher = page.getByRole('dialog', { name: 'App Launcher' });

    const clickAccounts = appLauncher.getByRole('link', { name: "Accounts", exact: true });

    await clickAccounts.waitFor({ state: 'visible' })

    await expect(clickAccounts).toBeVisible();

    await clickAccounts.click();

    //Click New -> Enter Account Name

    await page.getByRole('button', { name: "New", exact: true }).click();

    const newAccount = page.getByRole('dialog', { name: 'New Account' });

    await newAccount.getByRole("textbox", { name: "Account Name" }).fill("1239385734");

    //Select values from dropdown

    await newAccount.getByRole('combobox', { name: 'Rating' }).click();

    await page.getByRole('option', { name: 'Warm', exact: true }).click();

    await newAccount.getByRole('combobox', { name: 'Type' }).click();

    await page.getByRole('option', { name: 'Prospect', exact: true }).click();

    await newAccount.getByRole('combobox', { name: 'Industry' }).click();

    await page.getByRole('option', { name: 'Banking', exact: true }).click();

    await newAccount.getByRole('combobox', { name: 'Ownership' }).click();

    await page.getByRole('option', { name: 'Public', exact: true }).click();

    //Click Save -> Assert the Account created 

    await page.getByRole('button', { name: 'Save', exact: true }).click();

    const accountNumber = page.locator('//h1//lightning-formatted-text');

    await expect(accountNumber).toHaveText(/^\d+$/);

    const generatedAccountNumber = await accountNumber.textContent();

    console.log(generatedAccountNumber);

    //Upload files -> Asser the file

    const fileInput = page.locator('[type="file"]');

    await fileInput.setInputFiles(path.join(process.cwd(), "Data", "testFileUpload.jpg"));

    await page.getByRole('button', {name: 'Done', exact: true}).click();

    await expect(page.getByTitle("testFileUpload", { exact: true })).toBeVisible();











}

)