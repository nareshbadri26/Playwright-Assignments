import { test, expect } from '@playwright/test'

test("Checkbox Assignment", async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml")

    //Click Basic Checkbox

    await page.locator('//span[text()="Basic"]').click()

    //Click Notification Checkbox

    await page.locator('//span[text()="Ajax"]').click()

    await expect (page.locator('//span[text()="Checked"]')).toBeVisible()

    //Select favorite language

    await page.locator('//label[text()="Python"]').click()

    await page.locator('//label[text()="Javascript"]').click()

    //Click Tri-State Checkbox

    await page.locator('//div[@id="j_idt87:ajaxTriState"]').click()

    await expect (page.locator('//p[text()="State = 1"]')).toBeVisible()

    //Click Toggle Switch

    await page.locator('//div[@class="ui-toggleswitch-slider"]').click()

    await expect (page.locator('//span[text()="Checked"]')).toBeVisible()

    //Verify Checkbox is disabled

    await expect(page.getByLabel("Disabled")).toBeDisabled()

    //Select multiple options on the page

    await page.locator('//ul[@data-label="Cities"]').click()

    await page.locator('//li[@data-item-value="London"]').click()

    await page.locator('//li[@data-item-value="Berlin"]').click()

}
)