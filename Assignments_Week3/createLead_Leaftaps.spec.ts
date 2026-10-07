import { test } from '@playwright/test'

test("Create a Lead using CSS Selectors in Leaftaps ", async ({ page }) => {

    //Navigate to the url
    await page.goto("https://leaftaps.com/opentaps/control/main")

    //Enter Login Credentials

    await page.locator('[id="username"]').fill("Demosalesmanager")

    await page.locator('[id="password"]').fill("crmsfa")

    await page.locator('[class="decorativeSubmit"]').click()

    //Click CRM/SFA   

    await page.locator('[id="label"]').click()

    //Create Lead 

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('[id="createLeadForm_companyName"]').fill("Expleo")

    await page.locator('[id="createLeadForm_firstName"]').fill("Naresh")

    await page.locator('[id="createLeadForm_lastName"]').fill("P")

    await page.locator('[id="createLeadForm_personalTitle"]').fill("MR")

    await page.locator('[id="createLeadForm_generalProfTitle"]').fill("Engineer")

    await page.locator('[id="createLeadForm_annualRevenue"]').fill("70000")

    await page.locator('[id="createLeadForm_departmentName"]').fill("QA")

    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill("987654321")

    //Click Create Lead button 
    
    await page.locator('[class="smallSubmit"]').click()

    //Page title

    console.log(`The title of the page is ${await page.title()}`);

}
)