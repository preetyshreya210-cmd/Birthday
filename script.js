const questions = [
  {
    question: "Which Article deals with Equality before Law?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: "Article 14"
  },
  {
    question: "Father of Indian Constitution?",
    options: ["Gandhi", "Nehru", "B.R. Ambedkar", "Patel"],
    answer: "B.R. Ambedkar"
  }
];

let current = 0;
let selected = "";

function startQuiz() {
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].question;

  let optionsHTML = "";
  questions[current].options.forEach(opt => {
    optionsHTML += `<button onclick="selectOption('${opt}')">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
}

function selectOption(opt) {
  selected = opt;
}

function checkAnswer() {
  if (selected === questions[current].answer) {
    let gift = Math.floor(Math.random() * 5) + 1;
    document.getElementById("result").innerText = "Correct! 💖";
    document.getElementById("gift").innerText = "Your Gift Number is: " + gift + " 🎁";
  } else {
    document.getElementById("result").innerText = "Try again ❤️";
  }
}
