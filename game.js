document.addEventListener("DOMContentLoaded", () => {

	document.getElementById("startgame").addEventListener("click", playRandomKey);
	document.addEventListener("keydown", userInput, false);
	var key = ['KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyA', 'KeyB'];
	var guess;
	var guessText;
	var score = 0;
	var answer = -1;
	var gameStart = false;

	function playRandomKey(){
		document.getElementById("answer").innerHTML = "<br> Guess: "+ "<br> Answer: ";
	
		//randomized 7 notes 
		answer = Math.floor(Math.random() * 7)
		var answerAudio = "sound/sound" + answer + ".m4a";
		answerAudio = new Audio(answerAudio);
		answerAudio.play();
		gameStart = true;
	}

	function userInput(event){

		if(gameStart){
			document.getElementById("answer").innerHTML = event.code;
		switch(event.code){
			case "KeyC":
				guess = 0;
				break;
			case "KeyD":
				guess = 1;
				break;
			case "KeyE":
				guess = 2;
				break;
			case "KeyF":
				guess = 3;
				break;
			case "KeyG":
				guess = 4;
				break;
			case "KeyA":
				guess = 5;
				break;
			case "KeyB":
				guess = 6;
				break;
		}

		//document.getElementById("answer").innerHTML = choice;
		answerCheck(event.code);
			gameStart = !gameStart;
		}
	}	

	function answerCheck(event){
		if(guess == answer){
			score++;
		}else if(guess > answer){
			score =	answer - guess;
		}else if(guess < answer){
			score = guess - answer;
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("answer").innerHTML = "<br> Guess: " + event + "<br> Answer: " + key[answer];
	}


});