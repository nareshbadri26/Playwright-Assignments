function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching " + browserName + " browser");
    }
}

function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Testing");
            break;

        case "sanity":
            console.log("Running Sanity Testing");
            break;

        case "regression":
            console.log("Running Regression Testing");
            break;

        default:
            console.log("Running Smoke Testing");
            break;
    }
}

launchBrowser("chrome");
runTests("regression");