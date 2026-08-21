//Code using var
// 
const browserName = "Chrome";

function getBrowserName() {

    if (browserName === "Chrome") {
        
    }

    var browserName = "Firefox";

    console.log("Local browserName: " + browserName);
}

getBrowserName();

console.log("Global browserName: " + browserName);

const browserName = "Chrome";

//Code using let

function getBrowserName() {

    if (browserName === "Chrome") {
        console.log("Global browserName: " + browserName);
    }

    let browserName = "Firefox";

    console.log("Local browserName: " + browserName);
}

getBrowserName();