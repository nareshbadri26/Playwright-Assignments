"use strict";
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
// Example calls
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
// Example with negative input
try {
    console.log(factorial(-5));
}
catch (error) {
    console.log(error);
}
