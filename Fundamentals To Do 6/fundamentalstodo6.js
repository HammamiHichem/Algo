// Threes and Fives
function threesFives() {
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    console.log("Sum of numbers divisible by 3 or 5 but not both:", sum);
}

function betterThreesFives(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    console.log("Sum of numbers divisible by 3 or 5 but not both:", sum);
}

// Generate Coin Change
function generateCoinChange(cents) {
    let quarters = Math.floor(cents / 25);
    cents %= 25;
    let dimes = Math.floor(cents / 10);
    cents %= 10;
    let nickels = Math.floor(cents / 5);
    cents %= 5;
    let pennies = cents;
    console.log(`${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`);
}

// Messy Math Mashup
function messyMath(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i === num / 3) return -1;
        if (i % 3 === 0) continue;
        if (i % 7 === 0) sum += i * 2;
        else sum += i;
    }
    return sum;
}

// Twelve-Bar Blues
function twelveBarBlues() {
    for (let i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}

// Fibonacci
function fibonacci(index) {
    if (index <= 1) return index;
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= index; i++) {
        let temp = current;
        current += prev;
        prev = temp;
    }
    return current;
}

// Sum to One Digit
function sumToOne(num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

// Clock Hand Angles
function clockHandAngles(seconds) {
    const hourDegreesPerSecond = 0.00833333333;
    const minuteDegreesPerSecond = 0.1;
    const secondDegreesPerSecond = 6;

    let hours = seconds / 3600;
    let minutes = seconds / 60;
    let hourHandAngle = hours * 30 % 360;
    let minuteHandAngle = minutes * 6 % 360;
    let secondHandAngle = seconds * 6 % 360;

    console.log(`Hour hand: ${hourHandAngle.toFixed(3)} degs. Minute hand: ${minuteHandAngle.toFixed(3)} degs. Second hand: ${secondHandAngle.toFixed(3)} degs.`);
}

// Is Prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Test Functions
threesFives();
betterThreesFives(100, 4000000);
generateCoinChange(94);
console.log("Messy Math:", messyMath(4));
twelveBarBlues();
console.log("Fibonacci(7):", fibonacci(7));
console.log("Sum to One Digit(928):", sumToOne(928));
clockHandAngles(3600);
console.log("Is 7 prime?", isPrime(7));
