const quizData =[
    {
        question:'How old is florin?',
        a:'10',
        b:'17',
        c:'26',
        d:'25',
        correct:'c'
    },
    {
        question:'What is the most used programming language in 2021?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'b'
    },
    {
        question:'What does HTML stand for?',
        a:'Hypertext Markup Languge',
        b:'Cascading Style Sheet',
        c:'Jason Object notation',
        d:'Application Programming Interface',
        correct:'a'
    }, 
    {
        question:'What year was JavaScript launched?',
        a:'1994',
        b:'1988',
        c:'1995',
        d:'1999',
        correct:'c'
    },
    {
        question:'what is the most used javascript framework of 2022?',
        a:'React JS',
        b:'jQuery',
        c:'Angular',
        d:'Express',
        correct:'a'
    },   
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');

const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0 ;
let score = 0 ;

loadQuiz();

function loadQuiz(){
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML =  currentQuizData.question;

    a_text.innerHTML  =currentQuizData.a;
    b_text.innerHTML  =currentQuizData.b;
    c_text.innerHTML  =currentQuizData.c;
    d_text.innerHTML  =currentQuizData.d;

    
}

function getSelected(){
    
    let answer =  undefined;

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
           answer= answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl =>{
        answerEl.checked =false;
    })
}

submitBtn.addEventListener("click",() =>{
    //check to see the answer
    const answer =getSelected()
    console.log(answer)
    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;

        if(currentQuiz <quizData.length){
            loadQuiz();
        }else{
    
            //Todo : Show Results
           quiz.innerHTML = `<h2>You answered correctly at ${score}/ ${quizData.length} questions</h2> <button onclick= "location.reload()">Reload</button>`
        }
    }


})