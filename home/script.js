var questions = [
    "What is your favorite color?",
    "What is your favorite animal?",
    "What is your favorite food?"
  ];

  var currentQuestionIndex = 0; // Index to keep track of the current question

  // Function to display the next question
  function nextQuestion() {
    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++; // Increment the index to get the next question
      displayQuestion(); // Display the next question
    } else {
      alert("You have reached the end of the questionnaire."); // Alert when there are no more questions
    }
  }

  // Function to display the current question
  function displayQuestion() {
    var questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex];
  }

  // Display the first question when the page loads
  displayQuestion();