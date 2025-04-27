const quizDB = [
    {
        question: "What language is used to write Node.js applications?",
        options: ["Java", "C++", "Python", "JavaScript"],
        answer: "d"
    }
];

let currentQuestion = 0;
let score = 0;

// Load the first question when the page loads
window.addEventListener("load", displayQuestion);

function displayQuestion() {
    let q = quizDB[currentQuestion];
    document.getElementById("question").innerHTML = q.question;
    document.getElementById("choice1Label").innerHTML = q.options[0];
    document.getElementById("choice2Label").innerHTML = q.options[1];
    document.getElementById("choice3Label").innerHTML = q.options[2];
    document.getElementById("choice4Label").innerHTML = q.options[3];
}

// Handle answer submission
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkAnswer);

function checkAnswer() {
    let userAnswer = "";
    let choices = document.getElementsByName("answer");

    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            userAnswer = choices[i].id;
            break;
        }
    }

    if (userAnswer) {
        console.log("Moving to the next question");

        // Check if the answer is correct
        if (userAnswer === quizDB[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizDB.length) {
            displayQuestion();
        } else {
            document.getElementById("quizPage").innerHTML = "";
            document.getElementById("result").innerHTML =
                "You answered " + score + " out of " + quizDB.length;
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}
