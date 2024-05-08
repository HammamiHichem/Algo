// Setting and Swapping
let myNumber = 42;
let myName = "John";
[myNumber, myName] = [myName, myNumber];

// Print -52 to 1066
for (let i = -52; i <= 1066; i++) {
    console.log(i);
}

// Don’t Worry, Be Happy
function beCheerful() {
    for (let i = 0; i < 98; i++) {
        console.log("good morning!");
    }
}
beCheerful();

// Multiples of Three – but Not All
for (let i = -300; i <= 0; i += 3) {
    if (i !== -3 && i !== -6) {
        console.log(i);
    }
}

// Printing Integers with While
let num1 = 2000;
while (num1 <= 5280) {
    console.log(num1);
    num1++;
}

// You Say It’s Your Birthday
function isBirthday(month, day) {
    if ((month === 7 && day === 7) || (month === 7 && day === 17)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}
isBirthday(7, 7);

// Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// Print and Count
let count = 0;
for (let i = 512; i <= 4096; i += 5) {
    console.log(i);
    count++;
}
console.log("Count:", count);

// Multiples of Six
let num2 = 6;
while (num2 <= 60000) {
    console.log(num2);
    num2 += 6;
}

// Counting, the Dojo Way
for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log("Coding Dojo");
    } else if (i % 5 === 0) {
        console.log("Coding");
    } else {
        console.log(i);
    }
}

// What Do You Know?
function whatDoYouKnow(incoming) {
    console.log(incoming);
}
whatDoYouKnow("Hello!");

// Whoa, That Sucker’s Huge…
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log("Sum:", sum);

// Countdown by Fours
let num3 = 2016;
while (num3 > 0) {
    console.log(num3);
    num3 -= 4;
}

// Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2, 9, 3);

// The Final Countdown
function finalCountdown(param1, param2, param3, param4) {
    while (param2 <= param3) {
        if (param2 % param1 === 0 && param2 !== param4) {
            console.log(param2);
        }
        param2++;
    }
}
finalCountdown(3, 5, 17, 9);
