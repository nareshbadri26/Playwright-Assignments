function intersection(arr1, arr2) {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {

            result.push(arr1[i]);
        }
    }

    return result;
}


// Typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// Duplicate values
console.log(intersection([1, 2, 2, 3, 3, 4], [2, 3, 3, 5]));

// No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));

// All elements common
console.log(intersection([1, 2, 3], [1, 2, 3]));