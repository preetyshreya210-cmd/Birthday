const questions = [
  {
    question: "Which Article of the Indian Constitution deals with Equality before Law?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: "Article 14",
  },
  {
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    answer: "B.R. Ambedkar",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which part of the Constitution contains Fundamental Rights?",
    options: ["Part I", "Part II", "Part III", "Part IV"],
    answer: "Part III",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "Which Schedule contains Union, State and Concurrent Lists?",
    options: ["Fifth", "Seventh", "Ninth", "Tenth"],
    answer: "Seventh",
  },
  {
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "B.R. Ambedkar"],
    answer: "Dr. Rajendra Prasad",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Which body conducts the Civil Services Examination in India?",
    options: ["SSC", "NTA", "UPSC", "Election Commission"],
    answer: "UPSC",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Ganga", "Yangtze"],
    answer: "Nile",
  },
  {
    question: "Article 21 deals with:",
    options: ["Freedom of speech", "Right to life and personal liberty", "Equality before law", "Cultural rights"],
    answer: "Right to life and personal liberty",
  },
  {
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: "Australia",
  },
  {
    question: "Who appoints the Prime Minister of India?",
    options: ["Chief Justice", "President of India", "Lok Sabha Speaker", "Cabinet Secretary"],
    answer: "President of India",
  },
  {
    question: "Which blood group is called the universal donor?",
    options: ["AB+", "O-", "A+", "B-"],
    answer: "O-",
  },
  {
    question: "How many Fundamental Duties are currently listed?",
    options: ["10", "11", "12", "9"],
    answer: "11",
  },
  {
    question: "Which planet has the most prominent ring system?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    answer: "Saturn",
  },
  {
    question: "What does GDP stand for?",
    options: ["Gross Domestic Product", "General Development Plan", "Gross Development Process", "Global Domestic Policy"],
    answer: "Gross Domestic Product",
  },
  {
    question: "Who wrote the National Anthem of India?",
    options: ["Bankim Chandra Chatterjee", "Sarojini Naidu", "Rabindranath Tagore", "Subramania Bharati"],
    answer: "Rabindranath Tagore",
  },
  {
    question: "Which layer of the Earth is liquid?",
    options: ["Crust", "Inner Core", "Outer Core", "Mantle"],
    answer: "Outer Core",
  },
  {
    question: "The Right to Constitutional Remedies is under which Article?",
    options: ["Article 32", "Article 14", "Article 19", "Article 25"],
    answer: "Article 32",
  }
];

const celebrationGifs = [
  "https://media.giphy.com/media/3KC2jD2QcBOSc/giphy.gif",
  "https://media.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
  "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
  "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
  "https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif",
  "https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif",
  "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif",
  "https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif",
  "https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif",
  "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif",
  "https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif",
  "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif",
  "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
  "https://media.giphy.com/media/26FPqut4xUve9mXeg/giphy.gif",
  "https://media.giphy.com/media/3orieTfp1MeFLiBQR2/giphy.gif"
];

const failGifs = [
  "https://media.giphy.com/media/Wvo6vaUsQa3Di/giphy.gif",
  "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
  "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif"
];

let currentQuestion = 0;
let selectedOption = "";
let giftOrder = [];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateGiftOrder() {
  giftOrder = shuffleArray(Array.from({ length: 20 }, (_, i) => i + 1));
}

function renderQuiz() {
  const progress = document.getElementById("progress");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const giftBox = document.getElementById("giftBox");
  const nextBtn = document.getElementById("nextBtn");
  const celebrateImg = document.getElementById("celebrateImg");

  if (!progress || !questionEl || !optionsEl) return;

  selectedOption = "";
  resultEl.textContent = "";
  giftBox.innerHTML = "";
  nextBtn.style.display = "none";

  if (celebrateImg) {
    celebrateImg.src = celebrationGifs[currentQuestion];
  }

  const q = questions[currentQuestion];
  progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.onclick = () => selectOption(option, btn);
    optionsEl.appendChild(btn);
  });
}

function selectOption(option, clickedBtn) {
  selectedOption = option;
  document.querySelectorAll(".option-btn").forEach((btn) => btn.classList.remove("selected"));
  clickedBtn.classList.add("selected");
}

function checkAnswer() {
  const resultEl = document.getElementById("result");
  const giftBox = document.getElementById("giftBox");
  const nextBtn = document.getElementById("nextBtn");
  const celebrateImg = document.getElementById("celebrateImg");

  if (!selectedOption) {
    resultEl.style.color = "#c48829";
    resultEl.textContent = "Select an option first 💌";
    return;
  }

  if (selectedOption === questions[currentQuestion].answer) {
    const giftNumber = giftOrder[currentQuestion];

    resultEl.style.color = "#1f8a4d";
    resultEl.textContent = "Correct 🎉 You unlocked a gift.";

    giftBox.innerHTML = `
      <div>Go open</div>
      <div class="gift-big">Gift #${giftNumber} 🎁</div>
      <div>Then click next for the next surprise.</div>
    `;

    nextBtn.style.display = "inline-block";

    if (celebrateImg) {
      celebrateImg.src = celebrationGifs[currentQuestion];
    }
  } else {
    resultEl.style.color = "#d24747";
    resultEl.textContent = "Oops, that's not correct. Try again ❤️";
    giftBox.innerHTML = "";
    nextBtn.style.display = "none";

    if (celebrateImg) {
      const randomFail = failGifs[Math.floor(Math.random() * failGifs.length)];
      celebrateImg.src = randomFail;
    }
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuiz();
  } else {
    document.getElementById("progress").textContent = "All gifts unlocked ❤️";
    document.getElementById("question").textContent = "You unlocked all 20 gifts.";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").textContent = "";
    document.getElementById("giftBox").innerHTML = `
      <div class="gift-big">All 20 Gifts Unlocked 🎉</div>
      <div>Your random gift order was: ${giftOrder.join(", ")}</div>
    `;
    document.getElementById("nextBtn").style.display = "none";

    const celebrateImg = document.getElementById("celebrateImg");
    if (celebrateImg) {
      celebrateImg.src = "https://media.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif";
    }
  }
}

function toggleLetter(id) {
  const content = document.getElementById(id);
  if (content) {
    content.classList.toggle("hidden");
  }
}

window.onload = function () {
  generateGiftOrder();
  renderQuiz();
};
