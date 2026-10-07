import { test, expect } from '@playwright/test'
import credentials from '../../Data/LFLogin.json'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

test("Create Lead using data parameterization", async ({ page }) => {

    // =========================
    // Login - data from .env
    // =========================

    const filename = process.env.filename

    dotenv.config({ path: `Data/${filename}.env` })

    await page.goto(process.env.URL!)

    await page.getByRole('textbox', { name: "Username", exact: true }).fill(process.env.LF_Username!)

    await page.getByRole('textbox', { name: "Password", exact: true }).fill(process.env.Password!)

    await page.getByRole('button', { name: "Login", exact: true }).click()

    await page.getByRole('link', { name: "CRM/SFA", exact: true }).click()

    // =========================
    // Navigate to Create Lead
    // =========================

    await page.getByRole('link', { name: "Leads", exact: true }).click()

    await page.getByRole('link', { name: "Create Lead", exact: true }).click()

    // =========================
    // Lead details - data from CSV
    // =========================

    let data: any = parse(fs.readFileSync(path.join("Data", "leaftapsLead.csv")), { columns: true })

    await page.locator('//input[@id="createLeadForm_companyName"]').fill(data[0].companyName)

    await page.locator('//input[@id="createLeadForm_firstName"]').fill(data[0].firstName)

    await page.locator('//input[@id="createLeadForm_lastName"]').fill(data[0].lastName)

    // =========================
    // Dropdowns - data from JSON
    // =========================

    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({ label: credentials[0].Source })

    let marketingCampaign = page.locator('//select[@id="createLeadForm_marketingCampaignId"]')

    await marketingCampaign.selectOption({ value: credentials[0].Marketing_Campaign })

    // Print all Marketing Campaign values

    let marketingCampaignValues = marketingCampaign.locator('option');

    let count = await marketingCampaignValues.count();

    for (let i = 0; i < count; i++) {

        console.log(`Marketing Campaign: ${await marketingCampaignValues.nth(i).innerText()}`);

    }

    // Industry - select using index

    await page.locator('//select[@id="createLeadForm_industryEnumId"]').selectOption({ index: 7 })

    // Preferred Currency

    await page.locator('//select[@id="createLeadForm_currencyUomId"]').selectOption({ label: credentials[0].Preferred_Currency })

    // Country

    await page.locator('//select[@id="createLeadForm_generalCountryGeoId"]').selectOption({ label: credentials[0].Country })

    // State

    let state = page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]')

    await state.selectOption({ label: credentials[0].State })

    // Print all State values

    let stateDropdownValues = state.locator('option')

    let stateCount = await stateDropdownValues.count()

    for (let i = 0; i < stateCount; i++) {

        console.log(`State: ${await stateDropdownValues.nth(i).innerText()}`)

    }

    // =========================
    // Create Lead
    // =========================

    await page.getByRole('button', { name: "Create Lead", exact: true }).click()

    // =========================
    // Validation
    // =========================

    await expect(page).toHaveTitle(/View Lead/)

    await expect(page.locator('//span[@id="viewLead_lastName_sp"]')).toHaveText(data[0].lastName)

})
