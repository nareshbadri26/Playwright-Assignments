"use strict";
let testExecutionSummary = {
    suiteName: "Playwright Automation Suite",
    totalTests: 100,
    passedTests: 95,
    failedTests: 5,
    executionTime: "10 minutes"
};
console.log(testExecutionSummary.suiteName);
console.log(testExecutionSummary.totalTests);
console.log(testExecutionSummary.passedTests);
console.log(testExecutionSummary.failedTests);
console.log(testExecutionSummary.executionTime);
let passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log(`Pass Percentage: ${passPercentage}%`);
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution Successful");
}
else {
    console.log("Execution Completed with Failures");
}
