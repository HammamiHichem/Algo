const readline = require('readline');

const questions = [
    "What is the capital of Tunisia? (Hint: starts with 'T')",
    "What is the largest planet in our solar system? (Hint: starts with 'J')",
    "What is the chemical symbol for water? (Hint: two letters, H and O)"
];

const answers = ["Tunis", "Jupiter", "H2O"];

function playQuiz() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Welcome! Please enter your name: ", (userName) => {
        if (!userName) {
            console.log("No name entered. Exiting the game.");
            rl.close();
            return;
        }

        let questionsAnswered = 0;
        let correctAnswers = 0;

        function askQuestion(i) {
            if (i >= questions.length) {
                console.log(`Game over, ${userName}! You answered ${questionsAnswered} questions with ${correctAnswers} correct.`);
                rl.close();
                return;
            }

            rl.question(`${userName}, ${questions[i]} `, (userAnswer) => {
                if (!userAnswer) {
                    console.log("Exiting the game.");
                    rl.close();
                    return;
                }

                questionsAnswered++;

                if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
                    correctAnswers++;
                    console.log("Correct!");
                } else {
                    console.log("Incorrect.");
                }

                askQuestion(i + 1);
            });
        }

        askQuestion(0);
    });
}

playQuiz();
