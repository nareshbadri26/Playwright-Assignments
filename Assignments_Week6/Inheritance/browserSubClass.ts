import { Browser } from "./browserSuperClass";

class Chrome extends Browser {

    openIncognito() {

        console.log("Open the browser in incognito");
    }

    clearCache() {

        console.log("Clear the cache in browser");
    }
}

class Edge extends Browser {

    takeSnap() {

        console.log("Take the snapshot in browser");
    }

    clearCookies() {

        console.log("Clear the cookies in browser");
    }
}

class Safari extends Browser {

    readerMode() {

        console.log("Browser is in read mode");
    }

    fullScreenMode() {

        console.log("Browser is in full screen mode");
    }
}

const chromeBrowser = new Chrome();

const edgeBrowser = new Edge();

const safariBrowser = new Safari();

// Access methods using chromeBrowser object

chromeBrowser.browserName = "Chrome";

chromeBrowser.browserVersion = "1.0";

chromeBrowser.openIncognito();

chromeBrowser.clearCache();

chromeBrowser.closeBrowser();

chromeBrowser.navigateBack();

chromeBrowser.openURL();

// Access methods using edgeBrowser object

edgeBrowser.browserName = "Edge";

edgeBrowser.browserVersion = "1.1";

edgeBrowser.clearCookies();

edgeBrowser.closeBrowser();

edgeBrowser.navigateBack();

edgeBrowser.takeSnap();

edgeBrowser.openURL();

// Access methods using safariBrowser object

safariBrowser.browserName = "Safari";

safariBrowser.browserVersion = "1.2";

safariBrowser.closeBrowser();

safariBrowser.fullScreenMode();

safariBrowser.navigateBack();

safariBrowser.readerMode();

safariBrowser.openURL();