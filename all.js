let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p ");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3); 
 	return choices[randomNumber]; 
}

function win(userChoice, computerChoice) {
    
	const smallUserWord = "user";
	const smallCompWord = "computer";
	const userChoice_div = document.getElementById(userChoice);

	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${(smallUserWord)} beats ${(smallCompWord)}. You Win!`; 
}

function lose(userChoice, computerChoice) {
	
	const smallUserWord = "user";
	const smallCompWord = "computer";
	const userChoice_div = document.getElementById(userChoice);

	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${(smallUserWord)} losses to ${(smallCompWord)}. You lose!`; 
}
                              
function draw(userChoice, computerChoice) {
	const smallUserWord = "user";
	const smallCompWord = "computer";
   	const userChoice_div = document.getElementById(userChoice);

	result_p.innerHTML = `${(smallUserWord)} equal ${(smallCompWord)}. it's draw!`; 
}



function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
   	case 'rs':
   	case 'pr':
   	case 'sp':
   	    win(userChoice + computerChoice);
   	   	break;

   	case 'rp':
   	case 'ps':
   	case 'sr':
   		lose(userChoice + computerChoice);
   	   	break;
    
    case 'rr':
   	case 'pp':
   	case 'ss':
   		draw(userChoice + computerChoice);
   	   	break;
   }
}

function main() {
	rock_div.addEventListener('click', function(){
		game('r');
	})

    paper_div.addEventListener('click', function(){
		game('p');
	})

	scissor_div.addEventListener('click', function(){
		game('s');
	})
}

main();
