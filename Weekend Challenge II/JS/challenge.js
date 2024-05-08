const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mathQuestions = [
    { question: 'What is the value of Pi (to 10 decimal places)?', answer: Math.PI.toFixed(10) },
    { question: 'What is the value of e (to 10 decimal places)?', answer: Math.E.toFixed(10) },
    { question: 'What is the square root of 2 (to 10 decimal places)?', answer: Math.sqrt(2).toFixed(10) },
    { question: 'What is the square root of 1/2 (to 10 decimal places)?', answer: Math.sqrt(1/2).toFixed(10) }
];

let score = 0;
let totalQuestions = mathQuestions.length;

function askQuestion() {
    if (mathQuestions.length === 0) {
        console.log(`Quiz completed! Your score: ${score}/${totalQuestions}`);
        rl.close();
        return;
    }

    const questionObj = mathQuestions.pop();
    rl.question(questionObj.question + '\n', (userAnswer) => {
        if (userAnswer.trim() === questionObj.answer) {
            console.log('Correct!');
            score++;
        } else {
            console.log(`Incorrect! The correct answer was: ${questionObj.answer}`);
        }
        askQuestion();
    });
}

console.log('Welcome to the Math Quiz Game!');
console.log('You will be asked to provide the values of some mathematical constants and functions.');

askQuestion();

rl.on('close', () => {
    console.log('Game Over! Thanks for playing.');
});
