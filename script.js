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
    question: "Which Schedule of the Indian Constitution contains the Union, State and Concurrent Lists?",
    options: ["Fifth Schedule", "Seventh Schedule", "Ninth Schedule", "Tenth Schedule"],
    answer: "Seventh Schedule",
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
    question: "Article 21 of the Constitution deals with:",
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
    options: ["Chief Justice of India", "President of India", "Lok Sabha Speaker", "Cabinet Secretary"],
    answer: "President of India",
  },
  {
    question: "Which blood group is called the universal donor?",
    options: ["AB+", "O-", "A+", "B-"],
    answer: "O-",
  },
  {
    question: "How many Fundamental Duties are currently listed in the Indian Constitution?",
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

let currentQuestion = 0;
let selectedOption = "";

function loadQuestion() {
  selectedOption = "";

  document.getElementById("progressText").innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("result").innerText = "";
  document.getElementById("giftReveal").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");

  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;
    btn.onclick = () => selectOption(option, btn);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(option, clickedBtn) {
  selectedOption = option;

  const allOptions = document.querySelectorAll(".option-btn");
  allOptions.forEach((btn) => btn.classList.remove("selected"));

  clickedBtn.classList.add("selected");
}

function checkAnswer() {
  const result = document.getElementById("result");
  const giftReveal = document.getElementById("giftReveal");
  const nextBtn = document.getElementById("nextBtn");

  if (!selectedOption) {
    result.style.color = "#ffb347";
    result.innerText = "Select an option first, birthday boy ❤️";
    return;
  }

  if (selectedOption === questions[currentQuestion].answer) {
    const giftNumber = currentQuestion + 1;

    result.style.color = "#7dffb0";
    result.innerText = "Correct 🎉 You unlocked the next gift.";

    giftReveal.innerHTML = `
      <div>Go open</div>
      <div class="gift-big">Gift #${giftNumber} 🎁</div>
      <div>Come back after opening it to unlock the next surprise.</div>
    `;
    giftReveal.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    result.style.color = "#ff8f8f";
    result.innerText = "That’s not correct. Try again, love ❤️";
    giftReveal.classList.add("hidden");
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-section").classList.add("hidden");
    document.getElementById("finalSection").classList.remove("hidden");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

window.onload = loadQuestion;
