// Sigma
function sigma(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Factorial
function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

// Star Art - Left Justified
function drawLeftStars(num) {
    let stars = '';
    for (let i = 0; i < num; i++) {
        stars += '*';
    }
    console.log(stars);
}

// Star Art - Right Justified
function drawRightStars(num) {
    let stars = '';
    for (let i = 0; i < 75 - num; i++) {
        stars += ' ';
    }
    for (let i = 0; i < num; i++) {
        stars += '*';
    }
    console.log(stars);
}

// Star Art - Centered
function drawCenteredStars(num) {
    let stars = '';
    let spaces = Math.floor((75 - num) / 2);
    for (let i = 0; i < spaces; i++) {
        stars += ' ';
    }
    for (let i = 0; i < num; i++) {
        stars += '*';
    }
    console.log(stars);
}

// Character Art - Left Justified
function drawLeftChars(num, char) {
    let chars = '';
    for (let i = 0; i < num; i++) {
        chars += char;
    }
    console.log(chars);
}

// Character Art - Right Justified
function drawRightChars(num, char) {
    let chars = '';
    for (let i = 0; i < 75 - num; i++) {
        chars += ' ';
    }
    for (let i = 0; i < num; i++) {
        chars += char;
    }
    console.log(chars);
}

// Character Art - Centered
function drawCenteredChars(num, char) {
    let chars = '';
    let spaces = Math.floor((75 - num) / 2);
    for (let i = 0; i < spaces; i++) {
        chars += ' ';
    }
    for (let i = 0; i < num; i++) {
        chars += char;
    }
    console.log(chars);
}

// Test Functions
console.log("Sigma(3):", sigma(3)); // Output: 6
console.log("Factorial(3):", factorial(3)); // Output: 6
console.log("drawLeftStars(5):");
drawLeftStars(5); // Output: *****
console.log("drawRightStars(5):");
drawRightStars(5); // Output:                                                                  *****
console.log("drawCenteredStars(5):");
drawCenteredStars(5); // Output:                               *****
console.log("drawLeftChars(5, '*'):");
drawLeftChars(5, '*'); // Output: *****
console.log("drawRightChars(5, '*'):");
drawRightChars(5, '*'); // Output:                                                                  *****
console.log("drawCenteredChars(5, '*'):");
drawCenteredChars(5, '*'); // Output:                               *****
