const playerMove = prompt('Pick your move: rock, paper, scissors.');

console.log(playGame(playerMove, pickComputerMove()));

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
    }
};

function playGame(playerPick, computerMove) {
    playerPick = playerPick.toLowerCase();
    
    if (playerPick === 'rock') {
        if (computerMove === 'rock') {
            return "It's a tie! Both chose the same move."
        }
        else if (computerMove === 'paper') {
            return "You lose! Paper beats Rock."
        }
        else if (computerMove === 'scissors') {
            return "You win! Rock beats Scissors."
        }
    }
    else if (playerPick === 'paper') {
        if (computerMove === 'rock') {
            return "You win! Paper beats Rock."
        }
        else if (computerMove === 'paper') {
            return "It's a tie! Both chose the same move."
        }
        else if (computerMove === 'scissors') {
            return "You lose! Scissors beats Paper."
        }
    }
    else if (playerPick === 'scissors') {
        if (computerMove === 'rock') {
            return "You lose! Rock beats Scissors."
        }
        else if (computerMove === 'paper') {
            return "You win! Scissors beats Paper"
        }
        else if (computerMove === 'scissors') {
            return "It's a tie! Both chose the same move."
        }
    }
};