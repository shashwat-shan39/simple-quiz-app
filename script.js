const startBtn=document.getElementById("start-btn");
const qsnContainer=document.getElementById("question-container");
const qsnElement = document.getElementById("question");
const ansBtnsElement=document.getElementById("answer-btns");
const nextBtn=document.getElementById("next-btn");

let shuffledQsns,currQsnIdx;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", ()=>{
    currQsnIdx++;
    setNextQuestion();
})

function startGame(){
    startBtn.classList.add("hide");
    shuffledQsns= questions.sort(()=> Math.random()- .5);
    currQsnIdx=0;
    qsnContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQsns[currQsnIdx])
}

function showQuestion(qsn){
    qsnElement.innerText=qsn.question;
    qsn.answers.forEach(ans => {
       const btn=document.createElement("button");
       btn.innerText=ans.Text;
       btn.classList.add("btn");
       if(ans.correct){
        btn.dataset.correct=ans.correct;
       }
        ansBtnsElement.appendChild(btn);
        btn.addEventListener('click', selectAnswer)
    });
}
function resetState(){
    clearStatusClass(document.body);
    nextBtn.classList.add("hide");
    while(ansBtnsElement.firstChild){
        ansBtnsElement.removeChild(ansBtnsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBn=e.target;
    const correct=selectedBn.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(ansBtnsElement.children).forEach(btn =>{
        setStatusClass(btn,btn.dataset.correct)
    })
    if(shuffledQsns.length > currQsnIdx+1){
        nextBtn.classList.remove("hide");
    } else{
        startBtn.innerText="Restart";
        startBtn.classList.remove("hide");
    } 
}

function setStatusClass(ele,correct){
    clearStatusClass(ele);
    if(correct){
        ele.classList.add("correct");
    }else{
        ele.classList.add("wrong");
    }
}

function clearStatusClass(ele){
    ele.classList.remove("correct");
    ele.classList.remove("wrong");
}

const questions=[
    {
       question: "what is the capital of Russia ?" ,
       answers:[
        {Text: "Dhaka" , correct: false},
        {Text: "Amsterdam" , correct: false},
        {Text: "Kyiv" , correct: false},
        {Text: "Moscow" , correct: true}
       ]
    },
    {
        question: "which planet does not have rings ?" ,
        answers:[
         {Text: "Saturn" , correct: false},
         {Text: "Jupiter" , correct: false},
         {Text: "Venus" , correct: true},
         {Text: "Neptune" , correct: false}
        ]
     },
     {
        question: "who directed the movie chinatown(1974) " ,
        answers:[
         {Text: "Roman Polanski" , correct: true},
         {Text: "Stanley Kubrick" , correct: false},
         {Text: "Cint Eastwood" , correct: false},
         {Text: "Alfred Hitchcock" , correct: false}
        ]
     },
     {
        question: "which of the following was not in the axis power in WW2 " ,
        answers:[
         {Text: "Japan" , correct: false},
         {Text: "Switzerland" , correct: true},
         {Text: "Germany" , correct: false},
         {Text: "Italy" , correct: false}
        ]
     },
     {
        question: "Who won the ODI cricket World cup in 1996" ,
        answers:[
         {Text: "India" , correct: false},
         {Text: "Australia" , correct: false},
         {Text: "Sri lanka" , correct: true},
         {Text: "Pakistan" , correct: false}
        ]
     },
     {
        question: "Which is the biryani capital of the world?" ,
        answers:[
         {Text: "Kolkata" , correct: false},
         {Text: "Hyderabad" , correct: true},
         {Text: "Lucknow" , correct: false},
         {Text: "Kerala" , correct: false}
        ]
     },
     {
        question: "the greatest female chess player of all time?" ,
        answers:[
         {Text: "Judit Polgar" , correct: true},
         {Text: "Alexandra Botez" , correct: false},
         {Text: "Andrea Botez" , correct: false},
         {Text: "Vera Menchik" , correct: false}
        ]
     },
     {
        question: "Dutch painter Vincent van Gogh famously cut off what body part in 1888?" ,
        answers:[
         {Text: "Finger" , correct: false},
         {Text: "Toe" , correct: false},
         {Text: "Nose" , correct: false},
         {Text: "Ear" , correct: true}
        ]
     },
     {
        question: "which language have more than 500+ million speakers?" ,
        answers:[
         {Text: "French" , correct: false},
         {Text: "Russian" , correct: false},
         {Text: "Arabic" , correct: false},
         {Text: "Spanish" , correct: true}
        ]
     },
     {
        question: "______ is the coffee capital of the world" ,
        answers:[
         {Text: "China" , correct: false},
         {Text: "India" , correct: false},
         {Text: "Brazil" , correct: true},
         {Text: "Switzerland" , correct: false}
        ]
     }
]
