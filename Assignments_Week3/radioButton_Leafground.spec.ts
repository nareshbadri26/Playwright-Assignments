import {test, expect} from '@playwright/test'

test ("Radio Button Validation", async({page}) => {

    await page.goto("https://leafground.com/radio.xhtml")

    //Identify and assert the default selected radio button

    let defaultRadioSection = page.getByText('Find the default select radio button', {exact: true}).locator('..')

    let safariRadioButton = defaultRadioSection.getByText('Safari', {exact: true})

    await expect(safariRadioButton).toBeChecked();

    //Click your most favorite browser and assert that the browser is enabled

    let defaultBrowserSection = page.getByText('Your most favorite browser', {exact: true}).locator('..')

    let ChromeRadioButton = defaultBrowserSection.getByText('Chrome', {exact: true})

    await ChromeRadioButton.click()

    await expect(ChromeRadioButton).toBeChecked();

    //Click one of the cities

    await page.getByText('Chennai', {exact: true}).click()

    //Select the age group. Assert the default selected button

    await expect(page.getByText("21-40 Years")).toBeChecked();
}

)