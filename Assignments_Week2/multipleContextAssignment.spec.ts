import { chromium, firefox, test } from "@playwright/test";

test("Launch Edge and Firefox", async () => {


    // ------------- 1. Launch Edge ------------------

    const edgeBrowser = await chromium.launch({
        headless: false,
        channel: "msedge"
    });

    const edgePage = await edgeBrowser.newPage();

    await edgePage.goto("https://www.redbus.in");

    console.log("RedBus Title:", await edgePage.title());
    console.log("RedBus URL:", edgePage.url());


    // ------------- 2. Launch Firefox ------------------

    const firefoxBrowser = await firefox.launch({
        headless: false
    });

    const firefoxPage = await firefoxBrowser.newPage();

    await firefoxPage.goto("https://www.flipkart.com");

    console.log("Flipkart Title:", await firefoxPage.title());
    console.log("Flipkart URL:", firefoxPage.url());
});