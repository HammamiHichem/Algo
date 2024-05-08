const questions = [
    "What is the capital of France? (Hint: starts with 'P')",
    "What is the largest planet in our solar system? (Hint: starts with 'J')",
    "What is the chemical symbol for water? (Hint: two letters, H and O)"
];

const answers = ["Paris", "Jupiter", "H2O"];

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name-input");
    const startButton = document.getElementById("start-button");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question");
    const answerInput = document.getElementById("answer-input");
    const submitButton = document.getElementById("submit-button");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result");
    const restartButton = document.getElementById("restart-button");

    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    startButton.addEventListener("click", function() {
        const userName = nameInput.value.trim();
        if (!userName) {
            alert("Please enter your name.");
            return;
        }
        nameInput.disabled = true;
        startButton.disabled = true;
        questionContainer.style.display = "block";
        showQuestion();
    });

    submitButton.addEventListener("click", function() {
        const userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            alert("Please enter your answer.");
            return;
        }
        checkAnswer(userAnswer);
    });

    restartButton.addEventListener("click", function() {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        resultContainer.style.display = "none";
        questionContainer.style.display = "block";
        nameInput.disabled = false;
        startButton.disabled = false;
        restartButton.style.display = "none";
        showQuestion();
    });

    function showQuestion() {
        questionText.textContent = `${questions[currentQuestionIndex]}`;
    }

    function checkAnswer(userAnswer) {
        if (userAnswer.toLowerCase() === answers[currentQuestionIndex].toLowerCase()) {
            correctAnswers++;
            resultText.textContent = "Correct!";
        } else {
            resultText.textContent = "Incorrect.";
        }
        currentQuestionIndex++;
        answerInput.value = "";
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.style.display = "none";
        resultContainer.style.display = "block";

        if (correctAnswers === questions.length) {
            resultText.textContent = `Excellent! You answered ${questions.length} questions with ${correctAnswers} correct.`;
        } else if (correctAnswers === 2) {
            resultText.textContent = `Unfortunately, you answered only two questions correctly.`;
        } else if (correctAnswers === 1) {
            resultText.textContent = `Unfortunately, you answered only one question correctly.`;
        } else if (correctAnswers === 0) {
            resultText.textContent = `Bad student! You didn't answer any questions.`;
        } else {
            resultText.textContent = `Game over, ${nameInput.value}! You answered ${questions.length} questions with ${correctAnswers} correct.`;
        }

        restartButton.style.display = "block";
    }
});
