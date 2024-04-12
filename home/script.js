const startBtn = document.getElementById("startBtn")
const cont = document.getElementById("cont")
startBtn.addEventListener("click", function() {
    var startBtn = document.querySelector('.start_btn');
    var infoBox = document.querySelector('.info_box');
    startBtn.style.display = 'none';
    infoBox.style.display = 'block';
  });
  var countdownElement = document.getElementById('countdown');
  var countdownInterval;
  
  cont.addEventListener('click', function() {
      var info_box = document.querySelector(".info_box");
      var quiz_box = document.querySelector('.quiz_box');
      info_box.style.display = 'none';
      quiz_box.style.display = 'block';
      var startTime = 90 * 60;
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      countdownInterval = setInterval(function() {
        var minutes = Math.floor(startTime / 60);
        var seconds = startTime % 60;
        var secondsFormatted = seconds < 10 ? '0' + seconds : seconds;
        countdownElement.textContent = minutes + ':' + secondsFormatted;
        startTime--;
  
        if (startTime < 0) {
          clearInterval(countdownInterval);
          countdownElement.textContent = 'Finish';
        }
      }, 1000);
  });

  const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hype Text Preprocessor",
            "Hype Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ],
        correctAnswer: 1
    },
    {
        question: "What does JS stand for?",
        options: [
            "Hype JS Preprocessor",
            "Hype Text Python Language",
            "Hyper Text Test Language",
            "Hyper Tool Multi Language"
        ],
        correctAnswer: 0
    }
];

let currentQuestion = 0;

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('optionsContainer');

  questionElement.innerText = questions[currentQuestion].question;
  optionsContainer.innerHTML = '';

  questions[currentQuestion].options.forEach((option, index) => {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('option');
      optionDiv.innerHTML = `<span>${option}</span>`;
      optionsContainer.appendChild(optionDiv);

      optionDiv.addEventListener('click', () => {
          if (index === questions[currentQuestion].correctAnswer) {
              optionDiv.classList.add('correct');
          } else {
              optionDiv.classList.add('incorrect');
          }
      });
  });
}

const nextBtn = document.getElementById('next_btn');
const previusBtn=document.getElementById('previous_btn')
const submitExam=document.getElementById('submit_btn')

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {

        var submit_btn = document.querySelector('.submit_btn')
        nextBtn.style.display = "none"
        submit_btn.style.display = "block"
        submitExam.addEventListener('click',function(){
          var resultBox = document.querySelector('.result_box')
          var quiz_box = document.querySelector('.quiz_box')
          quiz_box.style.display = "none";
          resultBox.style.display="block"; //this we

        })
    }
});

showQuestion();


