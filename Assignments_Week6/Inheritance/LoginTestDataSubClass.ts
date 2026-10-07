import { TestData } from "./TestDataSuperClass";

class LoginTestData extends TestData {

    enterUsername() {
        console.log("Enter username");
    }

    enterPassword() {
        console.log("Enter password");
    }
}

const loginTest = new LoginTestData();

// LoginTestData Methods
loginTest.enterUsername();

loginTest.enterPassword();

// TestData methods
loginTest.enterCredentials();

loginTest.navigateToHomePage();