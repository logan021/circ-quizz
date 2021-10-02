
const startButton = document.querySelector('#start-btn');
const questtionContainer = document.querySelector('.hide');
const nextButton = document.querySelector('#next-btn')
const questionElement = document.querySelector('#question');
const answerButtonElement = document.querySelector('#answer-buttons')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {

    questtionContainer.classList.remove('hide');
    startButton.classList.add('hide');
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
            (answerButtonElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');

    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question = [
    {
        question: " Who Scored first Double hundred in Mens ODI?",
        answers: [
            { text: 'Sachin Tendulkar', correct: true },
            { text: 'Virendre Sehwag', correct: false },
        ]
    },
    {
        question: " Who has most  Double hundred in Mens ODI?",
        answers: [
            { text: 'Sachin Tendulkar', correct: false },
            { text: 'Rohit Sharma', correct: true },
        ]
    },
    {
        question: " Who has highest Batting average in Men's Test cricket",
        answers: [
            { text: 'Sir Don Bradman', correct: true },
            { text: 'Sir Alaister Cook', correct: false },
        ]
    }
]