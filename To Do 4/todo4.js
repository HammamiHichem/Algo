// Extract-o-matic
function extractDigit(num, digitNum) {
    if (digitNum >= 0) {
        return Math.floor(num / 10 ** digitNum) % 10;
    } else {
        return Math.floor((num * 10 ** Math.abs(digitNum))) % 10;
    }
}

// Test cases
console.log(extractDigit(1824, 2)); // Output: 8
console.log(extractDigit(1824, 0)); // Output: 4
console.log(extractDigit(1824, 7)); // Output: 0
console.log(extractDigit(123.45, -1)); // Output: 4

// Most Significant Digit
function mostSignificantDigit(num) {
    num = Math.abs(num);
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    return num;
}

// Test cases
console.log(mostSignificantDigit(12345)); // Output: 1
console.log(mostSignificantDigit(67.89)); // Output: 6
console.log(mostSignificantDigit(0.00987)); // Output: 9
console.log(mostSignificantDigit(-12345)); // Output: 1
console.log(mostSignificantDigit(-0.00987)); // Output: 9
