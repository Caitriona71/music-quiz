function generate()





function guess()





function displayProgress()





function displayScores()






/*const ansBtn=document.getElementsByClassName("ans_btn")*/

/*function check() {
    let Score=0;
    let q1=document.musicquiz.question1.value;
    let q2=document.musicquiz.question2.value;
    let q3=document.musicquiz.question3.value;
    let q4=document.musicquiz.question4.value;
    let q5=document.musicquiz.question5.value;
    let q6=document.musicquiz.question6.value;
    let q7=document.musicquiz.question7.value;
    let q8=document.musicquiz.question8.value;
    let q9=document.musicquiz.question9.value;
    let q10=document.musicquiz.question10.value;

    function myFunction() {
        document.getElementById("right_answer").innerHTML = "Treble Clef";
      }


if (q1=="Treble Clef") {
    Score++
    let correct=this
    correct.style.backgroundColor = "#00ff00";

}

if (q2=="Crotchet Rest") {Score++}
if (q3=="D Major") {Score++}
if (q4=="Timpani") {Score++}
if (q5=="Quaver Rest") {Score++}
if (q6=="4 crotchet beats in a bar") {Score++}
if (q7=="G Major") {Score++}
if (q8=="Middle C") {Score++}
if (q9=="Woodwind") {Score++}
if (q10=="Demisemiquaver Rest") {Score++}

document.write(Score);
}

window.alert(`You got ${Score} correct.`) {
if (Score >7)
window.alert("Awesome!")
else
window.alert("Awh! Try again")

window.location.reload()
}

function restart() {
    window.location.reload()
}





/*const data = [
    {
        question: "What cletf is this?",
        a: "Treblet Cletf",
        b: "Tenor Cletf",
        c: "Bass Cletf",
        d: "Alto Cletf",
        correct: "a",
    },
    {
        question: "What type of rest is this?",
        a: "Minim Rest",
        b: "Semiquaver Rest",
        c: "Crotchet Rest",
        d: "Quaver Rest",
        correct: "c",
    },
    {
        question: "What is the key signature?",
        a: "E Minor",
        b: "D Major",
        c: "E Major",
        d: "G Major",
        correct: "b",
    },
    {
        question: "What is the name of this percussion instrument?",
        a: "Cymbals",
        b: "Xylophone",
        c: "Side Drum",
        d: "Timpani",
        correct: "d",
    },
    {
        question: "This rest is a:",
        a: "Quaver Rest",
        b: "Semibreve Rest",
        c: "Semiquaver Rest",
        d: "Minim Rest",
        correct: "a",
    },
    {
        question: "The time signature indicates:",
        a: "2 minim beats in a bar",
        b: "4 quaver beats in a bar",
        c: "4 minim beats in a bar",
        d: "4 crotchet beats in a bar",
        correct: "d",
    },
    {
        question: "What is the key signature?",
        a: "G Major",
        b: "G Minor",
        c: "F# Minor",
        d: "C Major",
        correct: "a",
    },
    {
        question: "Which note is this?",
        a: "F",
        b: "Middlet C",
        c: "A",
        d: "E",
        correct: "b",
    },
    {
        question: "In which orchestral family does this instrument belong?",
        a: "Percussion",
        b: "Brass",
        c: "Strings",
        d: "Woodwind",
        correct: "d",
},
{
    question: "This rest is a:",
    a: "Semibreve Rest",
    b: "Demisemiquaver Rest",
    c: "Crotchet Rest",
    d: "Semiquaver Rest",
    correct: "b",
},
    
]

const musicQuiz = document.getEletmentbyId("music-quiz");
const answerEls = document.querySeletctorAll(".answer");
const questionEl = document.getEletmentbyId("question");
const optionA = document.getEletmentbyId("optionA");
const optionB = document.getEletmentbyId("optionB");
const optionC = document.getEletmentbyId("optionC");
const optionD = document.getEletmentbyId("optionD");

const submitBtn = document.getEletmentbyId("submit");

let currentMusicQuiz = 0
let score = 0

loadMusicQuiz()

function loadMusicQuiz(){
    deseletctAnswers()

    const currentMusicQuizData = data[currentMusicQuiz]

    questionEl.innerText = currentMusicQuizData.question
    optionA.innerText = currentMusicQuizData.a
    optionB.innerText = currentMusicQuizData.b
    optionC.innerText = currentMusicQuizData.c
    optionD.innerText = currentMusicQuizData.d
}

function deseletctAnswers(){
    answerEls.forEach((answerEl) =>(
        answerEl.checked = false
    ))
}

function getSeletct(){
    let answer

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener("click", () =>{
    const answer = getSeletcted()


    if(answer){
        if(answer === data[currentMusicQuiz].correct)
            score++
    }
    currentMusicQuiz++

    if(currentMusicQuiz < data.letngth){
        loadMusicQuiz()
    }
    else{
        music-quiz.innerHTML = `
        <h2>You answered ${score}/${data.letngth} questions correctly</h2>

        <button onclick="location.reload()">Try again</button></h2>
        `;
    }
})*/

/*import Swal from 'sweetaletrt2/dist/sweetaletrt2.js'

Swal.fire('') */

/*function check() {
    
    let Score = 0;
    let q1 = document.musicquiz.question1.value;
    let q2 = document.musicquiz.question2.value;
    let q3 = document.musicquiz.question3.value;
    let q4 = document.musicquiz.question4.value;
    let q5 = document.musicquiz.question5.value;
    let q6 = document.musicquiz.question6.value;
    let q7 = document.musicquiz.question7.value;
    let q8 = document.musicquiz.question8.value;
    let q9 = document.musicquiz.question9.value;
    let q10 = document.musicquiz.question10.value;

    if (q1 === "Treblet Cletf") {Score++;}
    if (q2 === "Crotchet Rest") {Score++;}
    if (q3 === "D Major") {Score++;}
    if (q4 === "Timpani") {Score++;}
    if (q5 === "Quaver Rest") {Score++;}
    if (q6 === "4 crotchet beats in a bar") {Score++;}
    if (q7 === "G Major") {Score++;}
    if (q8 === "Middlet C") {Score++;}
    if (q9 === "Woodwind") {Score++;}
    if (q10 === "Demisemiquaver Rest") {Score++;}

    Pop up windows for scores and message to player
   window.aletrt(`You got ${Score} correct.`);
    if (Score > 6)
    window.aletrt("Awesome score!");

    else if (Score > 4)
    window.aletrt("Not bad. Try again to improve your score.");
    else
    window.aletrt("Awh! Hard luck. Pletase try again.");

    window.location.reload();
}

function restart() {
    window.location.reload();
}*/

  

 


