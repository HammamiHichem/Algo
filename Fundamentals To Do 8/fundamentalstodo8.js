// Gaming Fun(damentals)

// rollOne function
function rollOne() {
    return Math.floor(Math.random() * 6) + 1;
}

// playFives function
function playFives(num) {
    for (let i = 0; i < num; i++) {
        let roll = rollOne();
        console.log(roll);
        if (roll === 5) {
            console.log("That’s good luck!");
        }
    }
}

// playStatistics function
function playStatistics() {
    let rolls = [];
    for (let i = 0; i < 8; i++) {
        rolls.push(rollOne());
    }
    console.log("Lowest roll:", Math.min(...rolls));
    console.log("Highest roll:", Math.max(...rolls));
}

// playStatistics2 function
function playStatistics2() {
    let rolls = [];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        let roll = rollOne();
        rolls.push(roll);
        sum += roll;
    }
    console.log("Lowest roll:", Math.min(...rolls));
    console.log("Highest roll:", Math.max(...rolls));
    console.log("Total sum of rolls:", sum);
}

// playStatistics3 function
function playStatistics3(num) {
    let rolls = [];
    for (let i = 0; i < num; i++) {
        rolls.push(rollOne());
    }
    console.log("Lowest roll:", Math.min(...rolls));
    console.log("Highest roll:", Math.max(...rolls));
}

// playStatistics4 function
function playStatistics4(num) {
    let rolls = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        let roll = rollOne();
        rolls.push(roll);
        sum += roll;
    }
    console.log("Lowest roll:", Math.min(...rolls));
    console.log("Highest roll:", Math.max(...rolls));
    console.log("Average roll:", sum / num);
}

// Statistics Until Doubles

function rollTwentySidedDie() {
    return Math.floor(Math.random() * 20) + 1;
}

function statisticsUntilDoubles() {
    let rolls = [];
    let roll;
    let prevRoll;
    let count = 0;
    while (true) {
        prevRoll = roll;
        roll = rollTwentySidedDie();
        rolls.push(roll);
        count++;
        if (roll === prevRoll) {
            console.log("Number of rolls:", count);
            console.log("Minimum roll:", Math.min(...rolls));
            console.log("Maximum roll:", Math.max(...rolls));
            console.log("Average roll:", rolls.reduce((acc, val) => acc + val) / count);
            break;
        }
    }
}

// Claire is Where?

let claireX = 0;
let claireY = 0;

function reset() {
    claireX = 0;
    claireY = 0;
}

function moveBy(xOffset, yOffset) {
    claireX += xOffset;
    claireY += yOffset;
}

function xLocation() {
    return claireX;
}

function yLocation() {
    return claireY;
}

function distFromHome() {
    return Math.sqrt(claireX * claireX + claireY * claireY);
}

// Date, on a Deserted Island

// Weekday names
function weekdayName(weekdayNum) {
    switch (weekdayNum) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid weekday number";
    }
}

// Weekday names for any day of the year
function weekdayName2(dayNum) {
    return weekdayName(dayNum % 7 === 0 ? 7 : dayNum % 7);
}

// someDays function
function someDays() {
    for (let i = 0; i < 17; i++) {
        let day = Math.floor(Math.random() * 365) + 1;
        let result = weekdayName2(day);
        if (result === "Saturday" || result === "Sunday") {
            result += " - Enjoy your day off!";
        } else {
            result += " - Work hard!";
        }
        console.log(result);
    }
}

// Month names
function monthName(monthNum) {
    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNum];
}

// Days in each month for the year 2017
function monthToDays(monthNum) {
    switch (monthNum) {
        case 1:
            return 31;
        case 2:
            return 28;
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
        default:
            return "Invalid month number";
    }
}

// Day to Month
function dayToMonth(dayNum) {
    let daysPassed = 0;
    let month = 1;
    while (daysPassed < dayNum) {
        daysPassed += monthToDays(month);
        month++;
    }
    return monthName(month - 1);
}

// Full date function
function fullDate(dayNum) {
    let weekday = weekdayName2(dayNum);
    let month = dayToMonth(dayNum);
    let dayOfMonth = dayNum;
    for (let i = 1; i < monthToDays(dayToMonth(dayNum)); i++) {
        if (dayNum <= monthToDays(dayToMonth(dayNum))) {
            dayOfMonth = dayNum;
            break;
        }
        dayNum -= monthToDays(dayToMonth(dayNum));
    }
    let year = 2017;
    return weekday + ", " + month + " " + dayOfMonth + ", " + year;
}

// Full date function 2
function fullDate2(dayNum) {
    let date = new Date(2016, 11, 31 + dayNum);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Full date function 3
function fullDate3(dayNum) {
    let date = new Date(2016, 11, 31 + dayNum);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Gaming Fun(damentals)
playFives(5); // Appel de la fonction playFives avec un argument de 5
playStatistics(); // Appel de la fonction playStatistics
playStatistics2(); // Appel de la fonction playStatistics2
playStatistics3(6); // Appel de la fonction playStatistics3 avec un argument de 6
playStatistics4(6); // Appel de la fonction playStatistics4 avec un argument de 6
statisticsUntilDoubles(); // Appel de la fonction statisticsUntilDoubles

// Claire is Where?
reset(); // Appel de la fonction reset
moveBy(3, 2); // Appel de la fonction moveBy avec des arguments de décalage de 3 et 2
console.log("Claire's X location:", xLocation()); // Affichage de la position X de Claire
console.log("Claire's Y location:", yLocation()); // Affichage de la position Y de Claire
console.log("Distance from home:", distFromHome()); // Affichage de la distance par rapport au point de départ

// Date, on a Deserted Island
console.log("Weekday Name:", weekdayName(3)); // Affichage du nom du jour de la semaine pour le numéro 3
console.log("Weekday Name:", weekdayName2(350)); // Affichage du nom du jour de la semaine pour le jour 350
someDays(); // Appel de la fonction someDays
console.log("Month Name:", monthName(5)); // Affichage du nom du mois pour le numéro 5
console.log("Days in Month:", monthToDays(5)); // Affichage du nombre de jours dans le mois pour le numéro 5
console.log("Month for Day:", dayToMonth(75)); // Affichage du mois pour le jour 75
console.log("Full Date:", fullDate(142)); // Affichage de la date complète pour le jour 142
console.log("Full Date 2:", fullDate2(8475)); // Affichage de la date complète 2 pour le jour 8475
console.log("Full Date 3:", fullDate3(139947)); // Affichage de la date complète 3 pour le jour 139947
