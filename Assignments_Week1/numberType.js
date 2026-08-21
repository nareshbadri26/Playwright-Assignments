function checkNumber(num) {

    if (num > 0) {
        return "Positive Number";

    } else if (num < 0) {
        return "Negative Number";

    } else {
        return "Zero";
    }
}

let number = 10;

console.log(checkNumber(number));