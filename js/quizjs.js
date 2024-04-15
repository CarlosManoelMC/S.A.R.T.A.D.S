
const questions = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import quizQuestions from "./questoes_quiz.js";

let currentIndex = 0;
let questionsCorrect = 0;

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${quizQuestions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}


function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${quizQuestions.length}`;
    const item = quizQuestions[currentIndex];
    answers.innerHTML = "";
    questions.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;

        const button = div.querySelector("button");

        // Remove previous event listener if any
        button.removeEventListener("click", nextQuestion);

        // Add the new event listener
        button.addEventListener("click", nextQuestion);

        answers.appendChild(div);
    });
}

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
}

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}


loadQuestion();

