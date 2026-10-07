class LoginTestPage {

    public browserName: string = "Chrome";
    private password: string = "admin123";
    protected userName: string = "tester";

    public openApplication() {
        console.log(`Opening application in ${this.browserName}`);
    }

    public login() {
        console.log(`Username: ${this.userName}`);
        console.log(`Password: ${this.password}`);
    }
}

const logintest = new LoginTestPage();

logintest.openApplication();
logintest.login();

console.log(logintest.browserName);

//console.log(logintest.password); //Cannot access outside class
//console.log(logintest.userName); //Cannot access outside class
