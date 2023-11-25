let container = document.querySelector("container");
let box = document.querySelector("box");


const questions = [
    {
        question: "bigest billding in the world",
        answers: [
            { text: "burjkhalifa", correct: true },
            { text: "mannat", correct: false },
            { text: "yourhouse", correct: false },
            { text: "antila", correct: false },

        ]
    },
    {
        question: "sumerpur mla",
        answers: [
            { text: "madan rathod", correct: false },
            { text: "sayam lhoda", correct: false },
            { text: "joraram kumawat", correct: true},
            { text: "sanju mhisra", correct: false },

        ]
    },
    {
        question: "area of rajasthan",
        answers: [
            { text: "8,483,413", correct: false },
            { text: "3,42,952", correct: true },
            { text: "4,83,847", correct: false },
            { text: "2,84,369", correct: false },

        ]
    },
    {
        question: "android programing language",
        answers: [
            { text: "html", correct: false },
            { text: "roby", correct: false },
            { text: "php", correct: false },
            { text: "jawa", correct: true },

        ]
    },
];

let mainbody = document.getElementById("main-body");
let questionbox = document.getElementById("question");
let answerbutton = document.getElementById("btn");
let nextbutton = document.getElementById("next-button");
let scoree = document.getElementById("score");

correntquestionindex = 0;
score = 0;

function startqiuz(){
    correntquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "next";
    showquestion();
}
function showquestion(){
    restarter();
    let correntquestion = questions[correntquestionindex];
    let questionno = correntquestionindex + 1;
    questionbox.innerHTML  = questionno + ". " + correntquestion.question;

    correntquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        mainbody.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function restarter(){
    nextbutton.style.display = "none";
    while(mainbody.firstChild){
        mainbody.removeChild(mainbody.firstChild);
    }

}

function selectanswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(mainbody.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbutton.style.display = "block";
}
function nextquiz(){
    correntquestionindex++;
   
    if(correntquestionindex < questions.length){
        showquestion();
        
    }
    else{
        showscore();
    }
}
function showscore(){
restarter();
scoree.innerHTML =`your score is: ${score} out of ${questions.length}`;

nextbutton.innerHTML = "play agine"; 
nextbutton.style.display = "block";

if(score == questions.length){
    function playsound(audioName){
        let audio = new Audio(audioName);
        audio.play();
    }
    playsound("7c.mp3");
}
}
nextbutton.addEventListener("click",()=>{
    if(correntquestionindex < questions.length){
        nextquiz();
        
    }
    else{
        location.reload();
    }
});


startqiuz();
