let playerScore = 0;
let computerScore = 0;

document.querySelector('.js-rock').addEventListener('click', () => {
    playRound('rock')
});

document.querySelector('.js-paper').addEventListener('click', () => {
    playRound('paper');
});

document.querySelector('.js-scissors').addEventListener('click', () => {
    playRound('scissors');
});

function playRound(playerMove) {
    let computerMove = pickComputerMove();
    document.querySelector('.js-winner').textContent = '';
    
    document.querySelector('.js-playerPick').textContent = `${playerMove}`
    document.querySelector('.js-computerPick').textContent = `${computerMove}`;

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            document.querySelector('.js-score')
            .textContent = `It's a tie!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
        else if (computerMove === 'paper') {
            computerScore++;
            document.querySelector('.js-score')
            .textContent = `You lose!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
        else if (computerMove === 'scissors') {
            playerScore++;
            document.querySelector('.js-score')
            .textContent = `You win!\nYour score: ${playerScore} Computer score: ${computerScore}`
        };
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            playerScore++;
            document.querySelector('.js-score')
            .textContent = `You win!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
        else if (computerMove === 'paper') {
            document.querySelector('.js-score')
            .textContent = `It's a tie!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
        else if (computerMove === 'scissors') {
            computerScore++;
            document.querySelector('.js-score')
            .textContent = `You lose!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            computerScore++;
            document.querySelector('.js-score')
            .textContent = `You lose!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
        else if (computerMove === 'paper') {
            playerScore++;
            document.querySelector('.js-score')
            .textContent = `You win!\nYour score: ${playerScore} Computer score: ${computerScore}`
        }
        else if (computerMove === 'scissors') {
            document.querySelector('.js-score')
            .textContent = `It's a tie!\nYour score: ${playerScore} Computer score: ${computerScore}`
        };
    };

    if (playerScore === 5) {
        document.querySelector('.js-winner').textContent = "Congratulations! You've won this game!"
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        document.querySelector('.js-winner').textContent = "You've lost... Better luck next time."        
        playerScore = 0;
        computerScore = 0;
    }
};

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