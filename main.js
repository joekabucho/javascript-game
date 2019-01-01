function playRound(playerSelection, computerSelection, score) {
	if (((playerSelection == 'Rock') && (computerSelection == 'Scissors'))  ||
	   ((playerSelection == 'Paper') && (computerSelection == 'Rock'))      ||
	   ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
		score[0]++;
	} else if (playerSelection==computerSelection) {
		console.log("Tie!");
	} else {
		console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
		score[1]++;

	}
	return score;
}

function computerPlay() {
	let n = Math.random();
	if (n<=(1/3)) {
		return 'Rock';
	} else if (n<=(2/3)) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
}

function playerPlay() {
	while (true) {
		let selection = prompt("Enter Rock, Paper, or Scissors");
		if (selection!=null) {
			selection = selection.toLowerCase();
		}
		if (selection=='rock') {
			return 'Rock';
		} else if (selection=='paper') {
			return 'Paper';
		} else if (selection=='scissors') {
			return 'Scissors';
		} else {
			alert(`"${selection}" is not a valid choice, please re-enter`);
		}
		setTimeout(function(){},500);
	}
}

function game() {
	let score = [0,0]; 

	for (let i=0;i<5;i++) {
		score=playRound(playerPlay(),computerPlay(), score);
	}
	let result;

	if (score[0]>score[1]) {
		result='win';
	} else if (score[0]<score[1]) {
		result='lose';
	} else {
		result='tie';
	}
		console.log(`The final score is ${score[0]} to ${score[1]}. You ${result}!`);
	}


