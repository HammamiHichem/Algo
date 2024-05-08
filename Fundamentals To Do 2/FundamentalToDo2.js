// 1. Countdown:
function countdown(num) {
    let arr = [];
    for (let i = num; i >= 0; i--) {
        arr.push(i);
    }
    return arr;
}

// 2. Print and Return:
function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

// 3. First Plus Length:
function firstPlusLength(arr) {
    return arr[0] + arr.length;
}

// 4. Values Greater than Second:
function valuesGreaterThanSecond(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

// 5. Values Greater than Second, Generalized:
function valuesGreaterThanSecondGeneral(arr) {
    if (arr.length < 2) {
        return "Array should have at least 2 elements";
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr.length;
}

// 6. This Length, That Value:
function thisLengthThatValue(num1, num2) {
    if (num1 === num2) {
        console.log("Jinx!");
    }
    let arr = [];
    for (let i = 0; i < num1; i++) {
        arr.push(num2);
    }
    return arr;
}

// 7. Fit the First Value:
function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        return "Too big!";
    } else if (arr[0] < arr.length) {
        return "Too small!";
    } else {
        return "Just right!";
    }
}

// 8. Fahrenheit to Celsius:
function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}

// 9. Celsius to Fahrenheit:
function celsiusToFahrenheit(cDegrees) {
    return (cDegrees * 9 / 5) + 32;
}

// 10. (Optionnel) Fahrenheit et Celsius équivalents:
function equivalentTemperature() {
    for (let celsius = 200; celsius >= -100; celsius--) {
        let fahrenheit = celsiusToFahrenheit(celsius);
        if (fahrenheit === celsius) {
            console.log(`At ${celsius}°C, Fahrenheit and Celsius are equivalent.`);
        }
    }
}

// Tests des fonctions
console.log("Countdown:", countdown(5));
console.log("Print and Return:", printAndReturn([10, 20]));
console.log("First Plus Length:", firstPlusLength([1, 2, 3]));
console.log("Values Greater than Second:", valuesGreaterThanSecond([1, 3, 5, 7, 9, 13]));
console.log("Values Greater than Second, Generalized:", valuesGreaterThanSecondGeneral([1, 3, 5, 7, 9, 13]));
console.log("This Length, That Value:", thisLengthThatValue(3, 7));
console.log("Fit the First Value:", fitTheFirstValue([5, 3, 2]));
console.log("Fahrenheit to Celsius:", fahrenheitToCelsius(32));
console.log("Celsius to Fahrenheit:", celsiusToFahrenheit(100));
equivalentTemperature();
