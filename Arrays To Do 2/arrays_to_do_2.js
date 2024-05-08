// Reverse:

// Question: How to reverse the order of an array in JavaScript?
function reverseArray(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}


// Rotate:

// Question: How to reverse the order of an array in JavaScript?
function rotateArr(arr, shiftBy) {
    var n = arr.length;
    var offset = shiftBy % n;
    if (offset < 0) {
        offset += n;
    }
    var newArr = [];
    for (var i = 0; i < n; i++) {
        newArr[(i + offset) % n] = arr[i];
    }
    for (var j = 0; j < n; j++) {
        arr[j] = newArr[j];
    }
}

// Filter Range:


// Question: How to reverse the order of an array in JavaScript?
function filterRange(arr, min, max) {
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[index++] = arr[i];
        }
    }
    arr.length = index;
    return arr;
}

// Concat:

// Question: How to reverse the order of an array in JavaScript?
function arrConcat(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
}

// Exemples d'utilisation de reverseArray
var arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]

// Exemples d'utilisation de rotateArr
var arr2 = [1, 2, 3, 4, 5];
rotateArr(arr2, 2);
console.log(arr2); // Output: [4, 5, 1, 2, 3]

// Exemples d'utilisation de filterRange
var arr3 = [10, 15, 20, 25, 30];
console.log(filterRange(arr3, 15, 25)); // Output: [15, 20, 25]

// Exemples d'utilisation de arrConcat
var arr4 = [1, 2, 3];
var arr5 = [4, 5, 6];
console.log(arrConcat(arr4, arr5)); // Output: [1, 2, 3, 4, 5, 6]
