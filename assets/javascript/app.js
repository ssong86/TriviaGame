var triviaQuestions=[{
		question: "Which actor does not play as a Spiderman?",
		answerList: ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Robert Downey Jr"],
		answer: 3
	},{
		question: "Which spierman movie is the latest one?",
		answerList: ["Spiderman Homecoming", "Amazing Spiderman", "Spiderman 3", "Spiderman 1"],
		answer: 0
	},{
		question: "Who is the most powerful villain in Spiderman?",
		answerList: ["Green Goblin", "Dr. Octopus", "Venom", "Electro"],
		answer: 2
	},{
		question: "Where is Spiderman's hometown?",
		answerList: ["Brooklyn", "Queens", "Manhattan", "San Francisco"],
		answer: 1
}];

var currentQuestion;
var correctAnswer;
var wrongAnswer;
var answered;
var unAnswered;
var sec;
var time;
var userSelect;

var messages = {
	correct: "CORRECT! You are a spidey guy",
	incorrect: "INCORRECT! You are an ANT!",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#wrongAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	wrongAnswer = 0;
	unAnswered = 0;
	newQuestion();
}

function countdown(){
	sec = 30;
	$('#timeLeft').html('<h3>Time Remaining: ' + sec + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	sec--;
	$('#timeLeft').html('<h3>Time Remaining: ' + sec + '</h3>');
	if(sec < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}