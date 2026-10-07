function factorial (n: number): number {

    if (n < 0) {

        throw new Error("Factorial is not defined for negative numbers");
    }

    let result = 1;

    for (let i = 2; i<= n; i++) {

        result = result * i;
    }

    return result;

}

// Example calls
console.log(factorial(5));  
console.log(factorial(4));
console.log(factorial(3)); 
console.log(factorial(0)); 


// Example with negative input
try {

    console.log(factorial(-5));

} catch (error) {

    console.log(error);
}