import {test, expect} from '@playwright/test'


test("Merge Lead using Windows Handling", async({page, context}) => {

    //Navigate to the url

    await page.goto("https://leaftaps.com/opentaps/control/main")

    //Enter Login Credentials

    await page.locator('[id="username"]').fill("Demosalesmanager")

    await page.locator('[id="password"]').fill("crmsfa")

    await page.locator('[class="decorativeSubmit"]').click()

    //Click CRM/SFA   

    await page.locator('[id="label"]').click()

    //Click Merge Lead 

    await page.locator('//a[text()="Leads"]').click();

    await page.getByRole('link', {name: "Merge Leads", exact: true}).click()

    
    //From Lead

    const [fromLeadPage] = await Promise.all([context.waitForEvent('page'), page.getByRole('img', { name: "Lookup", exact: true }).first().click()]);

    await fromLeadPage.waitForLoadState();

    await fromLeadPage.locator('a.linktext[href*="set_value"]').first().click();


    //To Lead

    const [toLeadPage] = await Promise.all([context.waitForEvent('page'), page.getByRole('img', { name: "Lookup", exact: true }).last().click()]);

    await toLeadPage.waitForLoadState();

    await toLeadPage.locator('a.linktext[href*="set_value"]').last().click();

    //Listener to accept the alert

    page.on('dialog', async(acceptAlert) => {

        await acceptAlert.accept()

        console.log(`Message of the alert is ${acceptAlert.message()}`)

        console.log(`Type of the alert is ${acceptAlert.type()}`)
        
    })

    //Click Merge Lead

    await page.getByRole('link', {name: "Merge", exact: true}).click()

    //Assert the page after Merge Lead
    
    await expect (page).toHaveTitle(/View Lead/)

    console.log(`Title of the page is ${page.title()}`)

    












}

)