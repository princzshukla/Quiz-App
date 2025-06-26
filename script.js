document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
      {
        question: "what is the capital of france?",
        choices: ["paris", "london", "berlin", "mardrid"],
        answer: "paris",
      },

      {
        question: "which planet is known as a red planet?",
        choices: ["mars", "venus", "jupitar", "saturn"],
        answer: "mars",
      },
      {
        question: "who wrote hamlet",
        choices: [
          "charles dikens",
          "jane austin",
          "william shakespeare",
          "mark twain",
        ],
        answer: "william shakespeare",
      },
      {
        question: "who hits most centuries in odi cricket ?",
        choices: ["Virat kohli", "steve smith", "sachin tendulkar", "joe root"],
        answer: "Virat kohli",
      },
      {
        question: "who hits most sixes in odi cricket ?",
        choices: [
          "rohit sharma",
          "shahid afridi",
          "chris gayle",
          "glenn maxewell",
        ],
        answer: "rohit sharma",
      },
      {
        question: "who hits 400 runs in an single test innings?",
        choices: [
          "brian lara",
          "virat kohli",
          "sachin tendulkar",
          "ab devilliers",
        ],
        answer: "brian lara",
      },
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
    restartBtn.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      resultContainer.classList.add("hidden");
      satrtQuiz();
    });

    startBtn.addEventListener("click", satrtQuiz);

    function satrtQuiz() {
      startBtn.classList.add("hidden");
      restartBtn.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      showQuestion();
    }
    function showQuestion() {
    nextBtn.classList.add("hidden");
      questionText.textContent = questions[currentQuestionIndex].question;
       choicesList.innerHTML = "";
      questions[currentQuestionIndex].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => SelectAnswer(choice));
        choicesList.appendChild(li);
      });
    }
    function SelectAnswer(choice) {
      const correctAnswer = questions[currentQuestionIndex].answer;
      if (choice === correctAnswer) {
        score++;
      }
      nextBtn.classList.remove("hidden");
    }

    function showResult() {
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      restartBtn.classList.remove("hidden"); 
      scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }
  });
