const questions = [
  {
    question: "Which Article deals with Equality before Law?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: "Article 14"
  }
];

let selected = "";

window.onload = loadQuestion;

function loadQuestion() {
  document.getElementById("question").innerText = questions[0].question;

  let html = "";
  questions[0].options.forEach(opt => {
    html += `<button onclick="select('${opt}')">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = html;
}

function select(opt) {
  selected = opt;
}

function checkAnswer() {
  if (selected === questions[0].answer) {
    let gift = Math.floor(Math.random() * 5) + 1;
    document.getElementById("result").innerText = "Correct 💖";
    document.getElementById("gift").innerText = "Gift Number: " + gift + " 🎁";
  } else {
    document.getElementById("result").innerText = "Try again ❤️";
  }
}
