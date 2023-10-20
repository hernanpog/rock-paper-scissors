let playerScore = 0;
let computerScore = 0;

function pickComputerMove() {
    randomNumber = Math.random();

    if (randomNumber < 0.3) {
        return 'rock';
    }
    else if (randomNumber > 0.3 && randomNumber < 0.6) {
        return 'paper';
    }
    else {
        return 'scissors';
    };
};

function playRound() {
    let playerMove = prompt('Pick your move: rock, paper, scissors.');
    playerMove = playerMove.toLowerCase();

    let computerMove = pickComputerMove();
    
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            console.log(`It's a tie! Both chose the same move.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
        else if (computerMove === 'paper') {
            computerScore++;
            console.log(`You lose! Paper beats Rock.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
        else if (computerMove === 'scissors') {
            playerScore++;
            console.log(`You win! Rock beats Scissors.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        };
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            playerScore++;
            console.log(`You win! Paper beats Rock.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
        else if (computerMove === 'paper') {
            console.log(`It's a tie! Both chose the same move.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
        else if (computerMove === 'scissors') {
            computerScore++;
            console.log(`You lose! Scissors beats Paper.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            computerScore++;
            console.log(`You lose! Rock beats Scissors.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
        else if (computerMove === 'paper') {
            playerScore++;
            console.log(`You win! Scissors beats Paper.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        }
        else if (computerMove === 'scissors') {
            console.log(`It's a tie! Both chose the same move.\nScore: You: ${playerScore} Computer: ${computerScore}`);
        };
    };
};
