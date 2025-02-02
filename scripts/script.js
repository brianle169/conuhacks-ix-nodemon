// Question class
class Question {
  constructor(question, optionA, optionB, optionC, optionD, answer) {
    this.question = question;
    this.options = { A: optionA, B: optionB, C: optionC, D: optionD };
    this.answer = answer;
  }

  isCorrect(choice) {
    return choice === this.answer;
  }

  displayQuestion() {
    return `Q: ${this.question}\nA) ${this.options.A}\nB) ${this.options.B}\nC) ${this.options.C}\nD) ${this.options.D}`;
  }
}

// Player class
class Player {
  constructor(name, choice, score) {
    this.name = name;
    this.choice = choice;
    this.score = score;
  }
}

const q1 = new Question(
  "What is the size of int in Java?",
  "16-bit",
  "32-bit",
  "64-bit",
  "8-bit",
  "B"
);
const q2 = new Question(
  "Which keyword is used to inherit a class in Java?",
  "extends",
  "implements",
  "inherits",
  "super",
  "A"
);
const q3 = new Question(
  "Which of these is not a Java primitive type?",
  "int",
  "float",
  "boolean",
  "string",
  "D"
);
const q4 = new Question(
  "What is the default value of a boolean variable in Java?",
  "true",
  "false",
  "null",
  "0",
  "B"
);
const q5 = new Question(
  "Which method is called when an object is created?",
  "finalize()",
  "init()",
  "start()",
  "constructor",
  "D"
);
const q6 = new Question(
  "Which of the following is used to handle exceptions in Java?",
  "catch",
  "try-catch",
  "throw",
  "error",
  "B"
);
const q7 = new Question(
  "Which keyword is used to define a constant in Java?",
  "final",
  "const",
  "static",
  "var",
  "A"
);
const q8 = new Question(
  "What is the superclass of all classes in Java?",
  "Object",
  "Main",
  "BaseClass",
  "SuperClass",
  "A"
);
const q9 = new Question(
  "Which of the following is not a Java access modifier?",
  "private",
  "protected",
  "internal",
  "public",
  "C"
);
const q10 = new Question(
  "Which Java feature allows multiple methods with the same name but different parameters?",
  "Overloading",
  "Overriding",
  "Polymorphism",
  "Encapsulation",
  "A"
);
const q11 = new Question(
  "What is used to read input from the user in Java?",
  "Scanner",
  "BufferedReader",
  "InputStream",
  "Reader",
  "A"
);
const q12 = new Question(
  "Which Java collection stores key-value pairs?",
  "List",
  "Set",
  "Map",
  "Array",
  "C"
);
const q13 = new Question(
  "Which package is automatically imported in every Java program?",
  "java.util",
  "java.io",
  "java.lang",
  "java.net",
  "C"
);
const q14 = new Question(
  "Which loop is best suited when the number of iterations is known?",
  "while",
  "do-while",
  "for",
  "switch",
  "C"
);
const q15 = new Question(
  "What is used to terminate a loop prematurely?",
  "break",
  "continue",
  "exit",
  "return",
  "A"
);
const q16 = new Question(
  "Which data type is used for decimal values in Java?",
  "int",
  "double",
  "boolean",
  "char",
  "B"
);
const q17 = new Question(
  "Which keyword is used to create an interface in Java?",
  "interface",
  "class",
  "implements",
  "abstract",
  "A"
);
const q18 = new Question(
  "What is the return type of a constructor?",
  "void",
  "Object",
  "Class",
  "No return type",
  "D"
);
const q19 = new Question(
  "Which keyword is used to prevent method overriding?",
  "static",
  "final",
  "protected",
  "private",
  "B"
);
const q20 = new Question(
  "Which exception is thrown when an array index is out of bounds?",
  "NullPointerException",
  "ArrayIndexOutOfBoundsException",
  "IndexException",
  "RuntimeException",
  "B"
);

let questionArr = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
  q16,
  q17,
  q18,
  q19,
  q20,
];

// Game variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

// DOM elements
const questionText = document.querySelector(".question");
const optionButtons = document.querySelectorAll(".option");
const timerDisplay = document.querySelector(".timer-display");
// const scoreDisplay = document.querySelector(".score-display");
const questionPanel = document.querySelector(".question-panel");
const optionPanel = document.querySelector(".option-panel");
const timeScoreDisplay = document.querySelector(".time-score-display");

function resetButtons() {
  optionButtons.forEach((button) => {
    button.style.backgroundColor = "bisque";
    button.removeAttribute("disabled");
  });
}

// Function to load a question
function loadQuestion() {
  resetButtons();
  //   scoreDisplay.textContent = `Current Score - ${score}`;
  if (currentQuestionIndex < questionArr.length) {
    const q = questionArr[currentQuestionIndex];
    questionText.textContent = `Q${currentQuestionIndex + 1}: ` + q.question;
    optionButtons[0].textContent = `A) ${q.options.A}`;
    optionButtons[1].textContent = `B) ${q.options.B}`;
    optionButtons[2].textContent = `C) ${q.options.C}`;
    optionButtons[3].textContent = `D) ${q.options.D}`;
    resetTimer();
  } else {
    // End the game
    clearInterval(timer);
    questionText.textContent = `Game Over! You scored ${score} out of ${
      questionArr.length * 20
    }.`;
    optionPanel.style.display = "none"; // Hide buttons
    timeScoreDisplay.style.display = "none";
    // Add a restart button
    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("restart-button");
    restartButton.addEventListener("click", restart);
    questionPanel.appendChild(restartButton);
  }
}

function restart(event) {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  optionPanel.style.display = "flex";
  event.target.style.display = "none";
  timeScoreDisplay.style.display = "flex";
  loadQuestion();
}

// Function to reset and start the timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.textContent = `Time left - ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left - ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null); // No answer selected
    }
  }, 1000);
}

// Function to check the answer
function checkAnswer(selectedAnswer, button) {
  clearInterval(timer); // Stop the timer

  if (selectedAnswer !== null) {
    let timeUsed = 15 - timeLeft;

    const correctAnswer = questionArr[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score += 20 - timeUsed;
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  }

  currentQuestionIndex++;
  setTimeout(loadQuestion, 200); // Move to the next question after a short delay
}

// Function to handle answer selection
function handleAnswer(event) {
  const selectedAnswer = event.target.value; // "A", "B", "C", or "D"
  optionButtons.forEach((button) => {
    button["disabled"] = true;
  });
  checkAnswer(selectedAnswer, event.target);
}

// Attach event listeners to buttons
optionButtons.forEach((button) => {
  button.addEventListener("click", handleAnswer);
});

function startGame() {
  let pregamePanel = document.querySelector(".pregame-panel");
  console.log("Hello");
  pregamePanel.style.display = "none";
  loadQuestion();
}

function addPreGamePanel() {
  let pregamePanel = document.createElement("div");
  pregamePanel.classList.add("pregame-panel");
  let introduction = document.createElement("h2");
  introduction.classList.add("introduction");
  introduction.textContent = `Welcome to Katrivia! Let's test your knowledge on Java Programming Language!`;
  let gameRule = document.createElement("p");
  gameRule.textContent =
    'There are total 20 questions, each question is worth 20 points, and you have 15 seconds to answer each question. You will get deducted 1 point for each second passed, so think fast! Press "Start Game" whenever you\'re ready!';
  let startButton = document.createElement("button");
  startButton.classList.add("start-button");
  startButton.textContent = "Start Game";
  startButton.addEventListener("click", startGame);

  pregamePanel.appendChild(introduction);
  pregamePanel.appendChild(gameRule);
  pregamePanel.appendChild(startButton);
  questionPanel.appendChild(pregamePanel);
}

// Start the game
// loadQuestion();
window.addEventListener("load", addPreGamePanel);
