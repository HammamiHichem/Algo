// Push Front
function pushFront(arr, val) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr;
}

// Test cases for Push Front
console.log(pushFront([5, 7, 2, 3], 8)); // Output: [8, 5, 7, 2, 3]
console.log(pushFront([99], 7)); // Output: [7, 99]

// Pop Front
function popFront(arr) {
    var val = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--; // Shorten the array by 1
    console.log(val + " returned, with " + arr + " printed in the function");
    return val;
}

// Test cases for Pop Front
console.log(popFront([0, 5, 10, 15])); // Output: 0 returned, with [5, 10, 15] printed in the function
console.log(popFront([4, 5, 7, 9])); // Output: 4 returned, with [5, 7, 9] printed in the function

// Insert At
function insertAt(arr, index, val) {
    for (var i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr;
}

// Test cases for Insert At
console.log(insertAt([100, 200, 5], 2, 311)); // Output: [100, 200, 311, 5]
console.log(insertAt([9, 33, 7], 1, 42)); // Output: [9, 42, 33, 7]

// BONUS: Remove At
function removeAt(arr, index) {
    var val = arr[index];
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--; // Shorten the array by 1
    console.log(val + " returned, with " + arr + " printed in the function");
    return val;
}

// Test cases for Remove At
console.log(removeAt([1000, 3, 204, 77], 1)); // Output: 3 returned, with [1000, 204, 77] printed in the function
console.log(removeAt([8, 20, 55, 44, 98], 3)); // Output: 44 returned, with [8, 20, 55, 98] printed in the function

// BONUS: Swap Pairs
function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

// Test cases for Swap Pairs
console.log(swapPairs([1, 2, 3, 4])); // Output: [2, 1, 4, 3]
console.log(swapPairs(["Brendan", true, 42])); // Output: [true, "Brendan", 42]

// BONUS: Remove Duplicates
function removeDupes(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// Test cases for Remove Duplicates
console.log(removeDupes([-2, -2, 3.14, 5, 5, 10])); // Output: [-2, 3.14, 5, 10]
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29])); // Output: [9, 19, 29]
