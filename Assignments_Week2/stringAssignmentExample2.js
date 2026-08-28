function lastWordLength(sentence) {

    // Step 1: Trim the string
    let trimmedString = sentence.trim();

    // Step 2: Split into words
    let words = trimmedString.split(" ");

    // Step 3: Identify the last word
    let lastWord = words[words.length - 1];

    // Step 4: Calculate the length
    let length = lastWord.length;

    // Step 5: Return the length
    return length;
}

console.log(lastWordLength("I love Playwright   "));
