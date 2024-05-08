const quizContainer = document.getElementById('quizContainer');
const startBtn = document.getElementById('startBtn');
let score = 0;

const mathQuestions = [
  { question: 'What is the value of Pi (to 10 decimal places)?', answer: Math.PI.toFixed(10) },
  { question: 'What is the value of e (to 10 decimal places)?', answer: Math.E.toFixed(10) },
  { question: 'What is the square root of 2 (to 10 decimal places)?', answer: Math.sqrt(2).toFixed(10) },
  { question: 'What is the square root of 1/2 (to 10 decimal places)?', answer: Math.sqrt(1/2).toFixed(10) }
];

function startQuiz() {
  score = 0;
  showNextQuestion();
}

function showNextQuestion() {
  if (mathQuestions.length === 0) {
    endQuiz();
    return;
  }

  const questionObj = mathQuestions.pop();
  const userAnswer = prompt(questionObj.question);
  if (userAnswer && userAnswer.trim() === questionObj.answer) {
    score++;
    alert('Correct!');
  } else {
    alert(`Incorrect! The correct answer was: ${questionObj.answer}`);
  }
  showNextQuestion();
}

function endQuiz() {
  alert(`Quiz completed! Your score: ${score}/${mathQuestions.length + score}`);
}

startBtn.addEventListener('click', () => {
  quizContainer.style.display = 'block';
  startBtn.style.display = 'none';
  startQuiz();
});
