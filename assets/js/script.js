function populate() {
    if(musicTheoryQuiz.isEnded()) {
        displayScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = musicTheoryQuiz.getQuestionIndex().options;
        for(var i = 0; i < options.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = options[i];
            guess("btn" + i, options[i]);
        }
        displayProgress();
    }
}


function guess(id, guess) {
    var button = document.getElementById("id");
    button.onclick = function() {
        musicTheoryQuiz.guess(guess);
        populate();
    };
}


function displayProgress() {
    var currentQuestionNumber = musicTheoryQuiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + musicTheoryQuiz.questions.length;
}


function displayScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + musicTheoryQuiz.score + "</h2>";
    var element = document.getElementById("musicTheoryQuiz");
    element.innerHTML = gameOverHTML;
}

// Add Question
    var questions = [
        new Question("What clef is this? <br> <img src=assets/images/>clef1.jpg> </br>", ["Treble Clef", "Tenor Clef", "Bass Clef", "Alto Clef"], "Treble Clef"),

        new Question("What type of rest is this?", ["Minim Rest", "Semiquaver Rest", "Crotchet Rest", "Quaver Rest"], "Crotchet Rest"),
        
        new Question("What is the key signature?", ["E Minor", "D Major", "E Major", "G Major"], "D Major"),
        
        new Question("What is the name of this percussion instrument?", ["Cymbals", "Xylophone", "Side Drum", "Timpani"], "Timpani"),

        new Question("This rest is a:", ["Quaver Rest", "Semibreve Rest", "Semiquaver Rest", "Minim Rest"], "Quaver Rest"),
        
        new Question("The time signature indicates:", ["2 minim beats in a bar", "4 quaver beats in a bar", "4 minim beats in a bar",  "4 crotchet beats in a bar"], "4 crotchet beats in a bar"),
        
        new Question("What is the key signature?", ["G Major", "G Minor", "F# Minor", "C Major"], "G Major"),

        new Question("Which note is this?", ["F", "Middle C", "A", "E"], "Middle C"),

        new Question("In which orchestral family does this instrument belong?", ["Percussion", "Brass", "Strings", "Woodwind"], "Woodwind"),
        
        new Question("This rest is a:", ["Semibreve Rest", "Demisemiquaver Rest", "Crotchet Rest", "Semiquaver Rest"], "Demisemiquaver Rest"),

    ];

    var Quiz = new Quiz(questions);

    populate();
        
    
/*const ansBtn=document.getElementsByClassName("ans_btn")*/

/*function check() {
    var Score=0;
    var q1=document.musicquiz.question1.value;
    var q2=document.musicquiz.question2.value;
    var q3=document.musicquiz.question3.value;
    var q4=document.musicquiz.question4.value;
    var q5=document.musicquiz.question5.value;
    var q6=document.musicquiz.question6.value;
    var q7=document.musicquiz.question7.value;
    var q8=document.musicquiz.question8.value;
    var q9=document.musicquiz.question9.value;
    var q10=document.musicquiz.question10.value;

    function myFunction() {
        document.getElementById("right_answer").innerHTML = "Treble Clef";
      }


if (q1=="Treble Clef") {
    Score++
    var correct=this
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
        question: "What clef is this?",
        a: "Treble Clef",
        b: "Tenor Clef",
        c: "Bass Clef",
        d: "Alto Clef",
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
        b: "Middvar C",
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

const musicQuiz = document.getElementbyId("music-quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementbyId("question");
const optionA = document.getElementbyId("optionA");
const optionB = document.getElementbyId("optionB");
const optionC = document.getElementbyId("optionC");
const optionD = document.getElementbyId("optionD");

const submitBtn = document.getElementbyId("submit");

var currentMusicQuiz = 0
var score = 0

loadMusicQuiz()

function loadMusicQuiz(){
    deselectAnswers()

    const currentMusicQuizData = data[currentMusicQuiz]

    questionEl.innerText = currentMusicQuizData.question
    optionA.innerText = currentMusicQuizData.a
    optionB.innerText = currentMusicQuizData.b
    optionC.innerText = currentMusicQuizData.c
    optionD.innerText = currentMusicQuizData.d
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>(
        answerEl.checked = false
    ))
}

function getSect(){
    var answer

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener("click", () =>{
    const answer = getSected()


    if(answer){
        if(answer === data[currentMusicQuiz].correct)
            score++
    }
    currentMusicQuiz++

    if(currentMusicQuiz < data.length){
        loadMusicQuiz()
    }
    else{
        music-quiz.innerHTML = `
        <h2>You answered ${score}/${data.length} Question correctly</h2>

        <button onclick="location.reload()">Try again</button></h2>
        `;
    }
})*/

/*import Swal from 'sweetalert2/dist/sweetalert2.js'

Swal.fire('') */

/*function check() {
    
    var Score = 0;
    var q1 = document.musicquiz.question1.value;
    var q2 = document.musicquiz.question2.value;
    var q3 = document.musicquiz.question3.value;
    var q4 = document.musicquiz.question4.value;
    var q5 = document.musicquiz.question5.value;
    var q6 = document.musicquiz.question6.value;
    var q7 = document.musicquiz.question7.value;
    var q8 = document.musicquiz.question8.value;
    var q9 = document.musicquiz.question9.value;
    var q10 = document.musicquiz.question10.value;

    if (q1 === "Treble Clef") {Score++;}
    if (q2 === "Crotchet Rest") {Score++;}
    if (q3 === "D Major") {Score++;}
    if (q4 === "Timpani") {Score++;}
    if (q5 === "Quaver Rest") {Score++;}
    if (q6 === "4 crotchet beats in a bar") {Score++;}
    if (q7 === "G Major") {Score++;}
    if (q8 === "Middle C") {Score++;}
    if (q9 === "Woodwind") {Score++;}
    if (q10 === "Demisemiquaver Rest") {Score++;}

    Pop up windows for scores and message to player
   window.alert(`You got ${Score} correct.`);
    if (Score > 6)
    window.alert("Awesome score!");

    else if (Score > 4)
    window.alert("Not bad. Try again to improve your score.");
    else
    window.alert("Awh! Hard luck. Please try again.");

    window.location.reload();
}

function restart() {
    window.location.reload();
}*/

  

 


