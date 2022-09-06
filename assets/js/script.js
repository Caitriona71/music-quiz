function check() {

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
   
    
if (q1=="Treble Clef") {Score++}
if (q2=="Crotchet Rest") {Score++}
if (q3=="D Major") {Score++}
if (q4=="Timpani") {Score++}
if (q5=="Quaver Rest") {Score++}
if (q6=="4 crotchet beats in a bar") {Score++}
if (q7=="G Major") {Score++}
if (q8=="Middle C") {Score++}
if (q9=="Woodwind") {Score++}
if (q10=="Demisemiquaver Rest") {Score++}


window.alert(`You got ${Score} correct.`)
if (Score >6)
window.alert("Awesome score!")
else if (Score > 4)
window.alert("Not bad. Try again to improve your score.")
else
window.alert("Awh! Hard luck. Please try again.")

/*window.location.reload()*/

}

/*function restart() {
    window.location.reload()
}*/


