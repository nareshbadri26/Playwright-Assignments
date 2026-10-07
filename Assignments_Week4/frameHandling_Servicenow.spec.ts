import { test, expect } from '@playwright/test'

test("Handling Frames in Servicenow", async ({ page }) => {

    //Login to Service now Instance url

    await page.goto("https://dev430872.service-now.com/login.do?user_name=admin&sys_action=sysverb_login&user_password=xQJe2oDxE%2B%2B8")

    await page.waitForLoadState("domcontentloaded")

    //Click on All--> Service Catalog

    await page.getByRole('menuitem', { name: "All", exact: true }).click()

    await page.waitForLoadState("domcontentloaded")

    const searchBox = page.getByRole('textbox', { name: "Enter search term to filter All menu", exact: true })

    await searchBox.fill("Service Catalog")

    await searchBox.press("Enter")

    await page.getByRole('link', { name: "Service Catalog 1 of 1", exact: true }).first().click()

    await page.waitForLoadState("domcontentloaded")

    //Click Mobiles -> Apple iphone 13

    const mobileFrameRef = page.frameLocator('#gsft_main');

    const mobiles = mobileFrameRef.locator('//a[text()="Mobiles"]');

    await mobiles.click();

    await page.waitForLoadState("domcontentloaded")

    await mobileFrameRef.locator('//strong[text()="Apple iPhone 13"]').click()

    await page.waitForLoadState("domcontentloaded")

    await expect(page).toHaveTitle("Apple iPhone 13 | ServiceNow")

    // Click No for ‘Is this a replacement for a lost or broken iPhone?’

    const noOption = mobileFrameRef.locator('label').filter({ hasText: 'No' });

    await noOption.click();

    await expect(mobileFrameRef.getByRole('radio', { name: /No/ })).toBeChecked();

    // Select 500 MB [$1.00] from the Monthly data allowance and get the count of items present 

    const monthlyDataAllowance = mobileFrameRef.locator('//select[@class="form-control cat_item_option "]')

    await monthlyDataAllowance.selectOption({ value: "500MB" })

    console.log(`Count of Monthly data allowance is ${await monthlyDataAllowance.locator('option').count()}`)

    //Assert and choose Starlight from the colour 

    const starlightOption = mobileFrameRef.locator('label').filter({ hasText: 'Starlight' });

    await starlightOption.click()

    await expect(mobileFrameRef.getByRole('radio', { name: /Starlight/ })).toBeChecked();

    //Assert Choose the second option for the storage

    const storageOption = mobileFrameRef.locator('label').filter({ hasText: '256 GB [add $100.00]' });

    await storageOption.click();

    await expect(mobileFrameRef.getByRole('radio', { name: /256 GB/ })).toBeChecked();

    //Click Order Now button 

    await mobileFrameRef.getByRole('button', { name: 'Order Now', exact: true }).click();

    //Assert the order status, title and url of the page

    await expect(page).toHaveTitle(/Order Status/);

    await expect(page).toHaveURL(/3Dcatalog_default/);

    const orderStatus = page.getByText(/^Order Status: REQ\d+$/)

    await expect(orderStatus).toBeVisible();

    console.log(await orderStatus.textContent());

}
)