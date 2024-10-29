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
    const quizContainer = document.getElementById('quiz-container');
  
    questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question';
  
      const questionText = document.createElement('p');
      questionText.textContent = `Question ${index + 1}: ${question.text}`;
      questionElement.appendChild(questionText);
  
      const optionsElement = document.createElement('ul');
      Object.entries(question.options).forEach(([key, value]) => {
          const optionElement = document.createElement('li');
          optionElement.style.listStyleType = 'none';
          
        optionElement.innerHTML = `<input type="radio" name="q${index}" value="${key}"> ${key}: ${value}`;
        optionsElement.appendChild(optionElement);
      });
      questionElement.appendChild(optionsElement);
  
      quizContainer.appendChild(questionElement);
    });
  
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', () => {
      // Check answers and display results
      const answers = [];
      questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        answers.push(selectedOption ? selectedOption.value : null);
      });
  
        // Calculate the score
      let failledQ = []
      let score = 0;
      questions.forEach((question, index) => {
        if (answers[index] === question.answer) {
          score++;
        } else {
            failledQ.push(index + 1)
        }
      });
        let average = questions.length / 2
         
      const resultElement = document.getElementById('result');
        resultElement.textContent = `Your score is ${score} out of ${questions.length}.`;
        resultElement.style.color = score === questions.length ? 'green' : score === 0 ? 'red' : 'bule';
        resultElement.style.fontSize = '20px';
        resultElement.style.fontWeight = 'bold';
    });
    //   const currection = document.getElementById('c-btn');
    //   currection.addEventListener('click', () => {
    //       forEach((e) => {
    //          console.log(e)
    //      })         
    //   });

  }
  
  displayQuiz(questions);