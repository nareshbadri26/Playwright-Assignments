"use strict";
class LoginTestPage {
    browserName = "Chrome";
    password = "admin123";
    userName = "tester";
    openApplication() {
        console.log(`Opening application in ${this.browserName}`);
    }
    login() {
        console.log(`Username: ${this.userName}`);
        console.log(`Password: ${this.password}`);
    }
}
const logintest = new LoginTestPage();
logintest.openApplication();
logintest.login();
console.log(logintest.browserName);
