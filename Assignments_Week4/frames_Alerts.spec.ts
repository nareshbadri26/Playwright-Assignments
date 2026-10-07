import { test, expect } from '@playwright/test'

test("Frames and Alerts Assignment", async ({ page }) => {

    page.on('dialog', async (alertHandling) => { // To Handle the alert by tester instead of Playwright

        console.log(`Message of the alert is ${alertHandling.message()}`); // Print the message of the alert

        console.log(`Type of the alert is ${alertHandling.type()}`); // Print the type of the alert

        await alertHandling.accept(); // Accept the alert

    }
    )

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    const framepath = page.frameLocator('//iframe[@id="iframeResult"]'); //Find the frame

    await framepath.getByRole('button', { name: "Try it", exact: true }).click(); //Click the Try it button

    await expect(framepath.locator('#demo')).toHaveText('You pressed OK!'); //Assert the text after clicking Try it button

}
)