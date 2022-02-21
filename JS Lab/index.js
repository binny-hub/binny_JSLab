function Quiz(questions){
    this.score =0;
    this.questions= questions;
    this.questionIndex =0;

}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;

}
Quiz.prototype.getQuestionByIndex = function(){
    /*
    var quest1= this.questions[this.questionIndex];;
    */
     return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(ans){ 
    if (this.getQuestionByIndex().isCorrectAnswer(ans)){
        this.score++;
    }
    this.questionIndex++;
}

function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
};

Question.prototype.isCorrectAnswer =function(ans){
    return this.answer === ans;
}

var questions= [
    new Question("What is the capital of India ?",["Mumbai","New Delhi", "Chennai","Kolkata"], "New Delhi"),
    new Question("Who is the President of India ?",["Ram Nath Kovind","Pratibha D. Patil", "M. Venkaiah Naidu", "Arun Jaitley"], "Ram Nath Kovind"),
    new Question("Who is the Vice President of India ?",["Ram Nath Kovind","Pratibha D. Patil", "M. Venkaiah Naidu", "Arun Jaitley"], "M. Venkaiah Naidu"),
    new Question("Who is the Finance Minister of India ?",["Amit Singh","Smriti Irani", "M. Venkaiah Naidu", "Nirmala Sitaraman"], "Nirmala Sitaraman"),
    new Question("Who is the Home Minister of India ?",["Amit Singh","Smriti Irani", "M. Venkaiah Naidu", "Nirmala Sitaraman"], "Amit Singh")
]

function loadQuestions(){
    if (quiz.isEnded() ){
       showScores();
       }
   else{  // displaying question
       var element = document.getElementById("question");
       element.innerHTML = quiz.getQuestionByIndex().text;
       var choices = quiz.getQuestionByIndex().choices;
       for(var i=0; i<choices.length; i++){
          var  element = document.getElementById("choice"+i);
          element.innerHTML = choices[i];
          handleOptionButton("btn"+i, choices[i]);
       }
       showProgress();
   }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question "+currentQuestionNumber +" of "+ quiz.questions.length;


};

function showScores(){
    var quizOver = "<h1> Results </h1>";
    quizOver += "<h2 id = 'score'>  Your Scores " + quiz.score + " and  your % is "+ (quiz.score/questions.length )*100 + "% </h2>"
    var element = document.getElementById("quiz");
    element.innerHTML = quizOver;

};

function handleOptionButton(id,choice){
    var button = document.getElementById(id);
    button.onclick = function(){
       quiz.checkOptionWithAnswer(choice);
       loadQuestions();
    }
}

var quiz= new Quiz(questions);
loadQuestions();


 