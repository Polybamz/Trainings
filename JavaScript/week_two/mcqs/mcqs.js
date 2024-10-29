const questions = [
   {
        text: "What is the output of the following code? console.log(1 + 2 * 3);",
    options: {
          'A': "1",
          'B': "3",
          'C': "7",
          'D': "15"
        },
        answer: "D"
    },
     {
        text: "What is the output of the following code? console.log(2 * 3 + 4);",
      options: {
          'A': "10",
          'B': "12",
          'C': "14",
          'D': "16"
        },
        answer: "D"
    },
   {
        text: "What is the output of the following code? console.log(2 * (3 + 4));",
      options: {
          'A': "10",
          'B': "12",
          'C': "14",
          'D': "16"
        },
        answer: "D"
    },
     {
        text: "What is the output of the following code? console.log(2 * (3 + 4) / 2);",
      options: {
          'A': "9",
          'B': "11",
          'C': "13",
          'D': "15"
        },
        answer: "D"
    },
    {
        text: "What is the output of the following code? console.log(2 * (3 + 4) / 2 - 1);",
      options: {
          'A': "8",
          'B': "10",
          'C': "12",
          'D': "14"
        },
        answer: "D"
    },
       
    
  ]




function displayQuiz(questions) {
  let currentQuestion = 0;
  let score = 0;

  function showQuestion(questionIndex) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const submitButton = document.getElementById('submit-button');

    // Show the current question
    questionElement.textContent = questions[questionIndex].text;

    // Clear previous options
    optionsElement.innerHTML = '';

    // Display options
    Object.entries(questions[questionIndex].options).forEach(([key, value]) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option';
      optionElement.textContent = `${key}: ${value}`;
      optionElement.addEventListener('click', () => {
        checkAnswer(key, questionIndex);
      });
      optionsElement.appendChild(optionElement);
    });

    // Disable submit button until all questions are answered
    submitButton.disabled = true;
  }

  function checkAnswer(selectedOption, questionIndex) {
    if (selectedOption === questions[questionIndex].answer) {
      alert('Correct!');
      score++;
    } else {
      alert(`Incorrect. The correct answer was ${questions[questionIndex].answer}.`);
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      showResults();
    }
  }

  function showResults() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Quiz finished! Your score is ${score} out of ${questions.length}.`;
    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = false;
    submitButton.textContent = 'Restart Quiz';
    submitButton.addEventListener('click', () => {
      location.reload();
    });
  }

  // Start the quiz
  showQuestion(currentQuestion);
}

// Initialize the quiz
displayQuiz(questions);

