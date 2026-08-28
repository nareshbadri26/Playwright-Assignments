function sumOfNValues(n) {

    let sum = 0

    for (let i = 1; i <= n; i++) {

        sum = sum + i

        console.log(i, sum);
    }
    return sum;

}

console.log(sumOfNValues(5));

