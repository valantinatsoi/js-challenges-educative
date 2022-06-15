// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

// Write - Your - Code - From - Here

const contentElement = document.getElementById("content");

questions.forEach(question => {
  const questionElement = document.createElement("p");

  const questionNumberElement = questionElement.appendChild(document.createElement("strong"));
  const questionNumber = questions.indexOf(question) + 1;
  questionNumberElement.textContent = `Question ${questionNumber}: `
  const statement = document.createTextNode(question.statement);
  questionElement.appendChild(questionNumberElement);
  questionElement.appendChild(statement);

  const button = document.createElement("button");
  button.textContent = "Show answer";
  button.addEventListener("click", e => {
    answerElement = document.createElement("p");
    answerElement.innerText = question.answer;
    button.parentNode.replaceChild(answerElement, button);
  });



  contentElement.appendChild(questionElement);
  contentElement.appendChild(button);
});

//SOLUTION
// let i = 1; // Question index

// questions.forEach(question => {
//   // Question title
//   const titleElement = document.createElement("strong");
//   titleElement.textContent = `Question ${i}: `;

//   // Question statement text in a <i> tag
//   const statementTextElement = document.createElement("i");
//   statementTextElement.textContent = question.statement;

//   // Question statement in a <div> tag
//   const statementElement = document.createElement("div");
//   statementElement.appendChild(titleElement);
//   statementElement.appendChild(statementTextElement);

//   // Answer zone, with a button initially
//   const answerZoneElement = document.createElement("div");
//   const buttonElement = document.createElement("button");
//   buttonElement.textContent = "Show answer";
//   answerZoneElement.appendChild(buttonElement);

//   buttonElement.addEventListener("click", () => {
//     // Replace button by answer
//     const answerElement = document.createElement("div");
//     answerElement.textContent = question.answer;
//     answerZoneElement.innerHTML = "";
//     answerZoneElement.appendChild(answerElement);
//   });

//   // Question is statement + answer
//   const questionElement = document.createElement("p");
//   questionElement.appendChild(statementElement);
//   questionElement.appendChild(answerZoneElement);
//   document.getElementById("content").appendChild(questionElement);

//   i++;
// });
