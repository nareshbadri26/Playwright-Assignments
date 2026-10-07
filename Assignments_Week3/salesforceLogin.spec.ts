import { chromium, test } from "@playwright/test";

test("Salesforce Login", async () => {

    //Launch Chromium in non-headless mode

    const browser = await chromium.launch({ headless: false, channel: "chrome" });

    //Create a new browser context

    const context = await browser.newContext();

    //Open a new page within the browser context

    const page = await context.newPage();

    //Load the Salesforce url

    await page.goto("https://login.salesforce.com/?locale=in")

    //Use your Salesforce credentials to Login

    await page.locator('//input[@id="username"]').fill("nareshbadri26.f1a46b578782@agentforce.com")

    await page.locator('//input[@id="Login"]').click()

    await page.locator('//input[@id="password"]').fill("Cricketfan23$")

    await page.locator('//input[@id="Login"]').click()

    await page.waitForLoadState('domcontentloaded')

    //Get Page Title and URL

    const title = await page.title();

    const url = page.url();

    console.log(`The title of the page is ${title}`);

    console.log(`The URL of the page is ${url}`);

}
)