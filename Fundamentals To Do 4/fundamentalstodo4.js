// Only Keep the Last Few
function keepLastFew(arr, num) {
    arr.splice(0, arr.length - num);
    return arr;
}

console.log(keepLastFew([2, 4, 6, 8, 10], 3)); // Output: [6, 8, 10]

// Math Help
function findXIntercept(M, B) {
    return -B / M;
}

console.log(findXIntercept(2, 5)); // Example Output: -2.5

// Poor Kenny
function whatHappensToday() {
    const outcomes = ['volcanos', 'tsunamis', 'earthquakes', 'blizzards', 'meteors'];
    const probabilities = [10, 15, 20, 25, 30];
    let totalProb = 0;
    for (let prob of probabilities) {
        totalProb += prob;
    }
    const randomNum = Math.random() * totalProb;
    let sum = 0;
    for (let i = 0; i < probabilities.length; i++) {
        sum += probabilities[i];
        if (randomNum <= sum) {
            return outcomes[i];
        }
    }
}

console.log(whatHappensToday()); // Output: one of the outcomes

// What Really Happened?
function whatReallyHappensToday() {
    const outcomes = ['volcanos', 'tsunamis', 'earthquakes', 'blizzards', 'meteors'];
    let result = [];
    for (let outcome of outcomes) {
        if (Math.random() < 0.01) {
            result.push(outcome);
        }
    }
    return result.length > 0 ? result : ['nothing'];
}

console.log(whatReallyHappensToday()); // Output: array of outcomes or ['nothing']

// Soaring IQ
function finalIQ() {
    let iq = 101;
    let increase = 0.01;
    for (let day = 1; day <= 98; day++) {
        iq += increase;
        increase += 0.01;
    }
    return iq;
}

console.log(finalIQ()); // Output: final IQ

// Letter Grade
function letterGrade(score) {
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`Score: ${score}. Grade: ${grade}`);
}

letterGrade(88); // Output: Score: 88. Grade: B
letterGrade(61); // Output: Score: 61. Grade: D

// More Accurate Grades
function accurateGrade(score) {
    let grade;
    let sign = '';
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    if (grade !== 'F') {
        if (score % 10 >= 8 || score === 100) {
            sign = '+';
        } else if (score % 10 <= 2) {
            sign = '-';
        }
    }

    console.log(`Score: ${score}. Grade: ${grade}${sign}`);
}

accurateGrade(88); // Output: Score: 88. Grade: B+
accurateGrade(61); // Output: Score: 61. Grade: D-
