//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:  65130500070     Name: : วนัสนันท์ ตรีอภิบาลวงศา

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {
    const newBtn = document.createElement('button')
    newBtn.textContent = 'New Quiz' 
    newBtn.addEventListener('click', generateQuiz)

    const clearBtn = document.createElement('button')
    clearBtn.textContent = 'Clear Quiz' 
    clearBtn.addEventListener('click', clearQuiz)

    const menu = document.getElementById('menu')
    menu.appendChild(newBtn)
    menu.appendChild(clearBtn)

    console.log(getRandomQuiz().question)
}

function generateQuiz() {

    clearQuiz()

    //question
    const container = document.getElementById('quizContainer')
    const randomQuiz = getRandomQuiz()
    const p = document.createElement('p')
    const Qdiv = document.createElement('div')
    Qdiv.textContent = randomQuiz.question
    Qdiv.setAttribute('id', 'question')
    container.appendChild(Qdiv)
    Qdiv.appendChild(p)


    //option

    const choiceBtn1 = document.createElement('button')
    choiceBtn1.setAttribute('style', 'margin: 5px')

    const choiceBtn2 = document.createElement('button')
    choiceBtn2.setAttribute('style', 'margin: 5px')

    const choiceBtn3 = document.createElement('button')
    choiceBtn3.setAttribute('style', 'margin: 5px')

    const choiceBtn4 = document.createElement('button')
    choiceBtn4.setAttribute('style', 'margin: 5px')

    // const options = getRandomQuiz().options


    choiceBtn1.textContent = randomQuiz.options[0]
    choiceBtn2.textContent = randomQuiz.options[1]
    choiceBtn3.textContent = randomQuiz.options[2]
    choiceBtn4.textContent = randomQuiz.options[3]
    
    choiceBtn1.addEventListener('click', checkAnswer) 
    choiceBtn2.addEventListener('click', checkAnswer) 
    choiceBtn3.addEventListener('click', checkAnswer) 
    choiceBtn4.addEventListener('click', checkAnswer) 
   
    Qdiv.appendChild(choiceBtn1)
    Qdiv.appendChild(choiceBtn2)
    Qdiv.appendChild(choiceBtn3)
    Qdiv.appendChild(choiceBtn4)

    
}

function clearQuiz() {
    const container = document.getElementById('quizContainer')
    const answerDiv = document.querySelector('.answer')

    container.textContent = ''
    answerDiv.textContent = ''
}

function checkAnswer(e) {
    const answerDiv = document.querySelector('.answer')
    const answer = randomQuiz().answer
    if (e == answer){
        return answerDiv.textContent = 'Correct'
    } else return answerDiv.textContent = 'Wrong Answer'
}

init();
