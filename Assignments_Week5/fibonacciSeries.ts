function fibonacci(n: number): number {

    let a = 0;

    let b = 1;

    for (let i = 0; i < n; i++) {

        let next = a + b;
        a = b;
        b = next;
    }

    return a;
}

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(2));  
console.log(fibonacci(5)); 
console.log(fibonacci(10));