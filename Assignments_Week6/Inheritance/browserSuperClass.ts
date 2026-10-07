export class Browser {

    browserName: string = "";
    browserVersion: string = "";

    openURL() {

        console.log(`Opening ${this.browserName} browser version ${this.browserVersion}`);
    }

    closeBrowser() {

        console.log("Browser is closed");
    }

    navigateBack() {

        console.log("Navigate back to browser");
    }
}
