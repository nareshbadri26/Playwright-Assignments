function compareStrings(str1, str2) {

    // Step 1: Remove spaces and convert to lowercase
    let string1 = str1.replaceAll(" ", "").toLowerCase();
    let string2 = str2.replaceAll(" ", "").toLowerCase();

    // Step 2: Convert strings into arrays and sort characters
    let sortedString1 = string1.split("").sort().join("");
    let sortedString2 = string2.split("").sort().join("");

    // Step 3: Compare sorted strings
    let result = sortedString1 === sortedString2;

    // Step 4: Return the result
    return result;
}

console.log(compareStrings("listen", "silent"));