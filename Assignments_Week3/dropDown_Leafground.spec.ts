import { test } from '@playwright/test'

test("Dropdown Assignment", async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml")

    //Which is your favorite UI Automation tool?

    await page.locator('//select[@class="ui-selectonemenu"]').selectOption({ label: "Playwright" }) // Select only Playwright option

    let automationToolValues = page.locator('//select[@class="ui-selectonemenu"]/option') // This line holds all 5 values

    const automationToolCount = await automationToolValues.count(); // This line extracts the count of the object

    for (let index = 0; index < automationToolCount; index++) {

        let automationdropdownValues = await automationToolValues.nth(index).innerText(); // Looping each object to print the names

        console.log(automationdropdownValues) // Print the Automation tool name

    }

    //Choose your preferred country

    await page.locator('//label[text()="Select Country"]').click();

    await page.locator('//li[text()="India"]').click();

    //Confirm Cities belongs to Country is loaded

    await page.locator('//label[text()="Select City"]').click();

    await page.locator('//li[text()="Chennai"]').click();

    //Choose any three courses from the dropdown

    // const courseDropdown = page.locator('//h5[text()="Choose the Course"]/following-sibling::div/button')

    // await courseDropdown.click();
    // await page.locator('//li[text()="AWS"]').click();

    // await courseDropdown.click();
    // await page.locator('//li[text()="Playwright"]').click();

    // await courseDropdown.click();
    // await page.locator('//li[text()="PostMan"]').click();

    //Choose a language and print all the values from the dropdown

    await page.locator('//label[text()="Select Language"]').click();

    await page.locator('//li[text()="English"]').click();

    let languageDropdown = page.locator('//ul[@id="j_idt87:lang_items"]//li[@role="option"]')

    const languageCount = await languageDropdown.count()

    for(let i = 1; i < languageCount; i++ ) {

        const languageDropdownValues = await languageDropdown.nth(i).innerText()

        console.log(languageDropdownValues)
    }



    //Select 'Two' irrespective of the language chosen

    await page.locator('//label[text()="Select Values"]').click();

    await page.locator('//li[text()="Two"]').click();

    await page.waitForTimeout(3000)
}


)