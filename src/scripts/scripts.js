const computerPlay = () => {
    let roll = Math.random() * 30, result;
    switch (true) {
        case roll <= 10 :
            result = 'rock';
            break;
        case roll <= 20 && roll > 10:
            result = 'paper';
            break;
        case roll > 20:
            result = 'scissors';
            break;
        default:
            console.warn('result outside parameter');
            break;
    }
    return result;
}

const playRound = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                return 'draw';
            case 'paper':
                return 'lose';
            case 'scissors':
                return 'win';
        }
    } else if (playerChoice === 'paper') {
        switch (computerChoice) {
            case 'rock':
                return 'win';
            case 'paper':
                return 'draw';
            case 'scissors':
                return 'lose';
        }
    } else {
        switch (computerChoice) {
            case 'rock':
                return 'lose';
            case 'paper':
                return 'win';
            case 'scissors':
                return 'draw';
        }
    }
}

//let userInput = process.argv[2];

console.log(computerPlay());