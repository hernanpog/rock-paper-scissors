console.log(playRound());

function pickComputerMove() {
    randomNumber = Math.random();
    let computerMove;

    if (randomNumber < 0.3) {
        return computerMove = 'rock';
    }
    else if (randomNumber > 0.3 && randomNumber < 0.6) {
        return computerMove = 'paper';
    }
    else {
        return computerMove = 'scissors';
    };
};

function playRound() {

    let message = '';
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerMove = prompt('Pick your move: rock, paper, scissors.');
        playerMove = playerMove.toLowerCase();

        let computerMove = pickComputerMove();
        
        if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                message = "It's a tie! Both chose the same move."
            }
            else if (computerMove === 'paper') {
                message = "You lose! Paper beats Rock."
                computerScore++;
            }
            else if (computerMove === 'scissors') {
                message = "You win! Rock beats Scissors."
                playerScore++;
            };
        }
        else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                message = "You win! Paper beats Rock."
                playerScore++;
            }
            else if (computerMove === 'paper') {
                message = "It's a tie! Both chose the same move."
            }
            else if (computerMove === 'scissors') {
                message = "You lose! Scissors beats Paper."
                computerScore++;
            }
        }
        else if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                message = "You lose! Rock beats Scissors."
                computerScore++;
            }
            else if (computerMove === 'paper') {
                message = "You win! Scissors beats Paper"
                playerScore++;
            }
            else if (computerMove === 'scissors') {
                message = "It's a tie! Both chose the same move."
            };
        };
        console.log(`${message}\nScore: You = ${playerScore} Computer = ${computerScore}`);
    };

    if (playerScore > computerScore) {
        return 'You Won!'
    }
    else if (playerScore < computerScore) {
        return 'You Lost!';
    }
    else {
        return "It's a tie!";
    }
};