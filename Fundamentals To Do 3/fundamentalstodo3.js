// Biggie Size
function makeItBig(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

// Print Low, Return High
function printLowReturnHigh(arr) {
    let lowest = arr[0];
    let highest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    console.log("Lowest:", lowest);
    return highest;
}

// Print One, Return Another
function printOneReturnAnother(arr) {
    let secondToLast = arr[arr.length - 2];
    let firstOdd;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log("Second-to-last:", secondToLast);
    return firstOdd;
}

// Double Vision
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

// Count Positives
function countPositives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

// Evens and Odds
function evensAndOdds(arr) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
            oddCount = 0;
        } else {
            oddCount++;
            evenCount = 0;
        }
        if (oddCount === 3) {
            console.log("That’s odd!");
            oddCount = 0;
        }
        if (evenCount === 3) {
            console.log("Even more so!");
            evenCount = 0;
        }
    }
}

// Increment the Seconds
function incrementSeconds(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}

// Previous Lengths
function previousLengths(arr) {
    let previousLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].length;
        arr[i] = previousLength;
        previousLength = temp;
    }
    return arr;
}

// Add Seven to Most
function addSevenToMost(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

// Reverse Array
function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// Outlook: Negative
function makeNegative(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(-Math.abs(arr[i]));
    }
    return newArr;
}

// Always Hungry
function alwaysHungry(arr) {
    let hungry = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            hungry = false;
        }
    }
    if (hungry) {
        console.log("I'm hungry");
    }
}

// Swap Toward the Center
function swapTowardCenter(arr) {
    for (let i = 0; i < arr.length / 2; i += 2) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// Scale the Array
function scaleArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}

// Appel de la fonction makeItBig
console.log(makeItBig([-1, 3, 5, -5])); // Output: [-1, "big", "big", -5]

// Appel de la fonction printLowReturnHigh
console.log(printLowReturnHigh([1, 5, 2, -3])); // Output: Highest: 5, Lowest: -3

// Appel de la fonction printOneReturnAnother
console.log(printOneReturnAnother([2, 4, 6, 8, 10])); // Output: Second-to-last: 8, First odd value: 1

// Appel de la fonction double
console.log(double([1, 2, 3])); // Output: [2, 4, 6]

// Appel de la fonction countPositives
console.log(countPositives([-1, 1, 1, 1])); // Output: [-1, 1, 1, 3]

// Appel de la fonction evensAndOdds
evensAndOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Output: That’s odd!, Even more so!

// Appel de la fonction incrementSeconds
console.log(incrementSeconds([1, 2, 3, 4, 5])); // Output: 1, 3, 3, 5, 5

// Appel de la fonction previousLengths
console.log(previousLengths(["apple", "banana", "orange"])); // Output: [0, 5, 6]

// Appel de la fonction addSevenToMost
console.log(addSevenToMost([1, 2, 3, 4])); // Output: [9, 10, 11]

// Appel de la fonction reverseArray
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// Appel de la fonction makeNegative
console.log(makeNegative([1, -3, 5])); // Output: [-1, 3, -5]

// Appel de la fonction alwaysHungry
alwaysHungry(["food", "not food", "food"]); // Output: yummy, yummy

// Appel de la fonction swapTowardCenter
console.log(swapTowardCenter([1, 2, 3, 4, 5, 6])); // Output: [6, 2, 4, 3, 5, 1]

// Appel de la fonction scaleArray
console.log(scaleArray([1, 2, 3], 2)); // Output: [2, 4, 6]
