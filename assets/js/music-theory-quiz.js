function musicTheoryQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

musicTheoryQuiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

musicTheoryQuiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
          this.score++;
    }

    this.questionIndex++;
}

musicTheoryQuiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}