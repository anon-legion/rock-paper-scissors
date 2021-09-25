const computerPlay = () => {
    let roll = Math.random() * 300, result;
    switch (true) {
        case Math.round(roll) % 3 === 0:
            result = 'rock';
            break;
        case Math.round(roll) % 3 === 1:
            result = 'paper';
            break;
        case Math.round(roll) % 3 === 2:
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

const game = () => {
    const maxRounds = 5;
    let currentRound = 0, userInput, computerInput;
    while (currentRound < maxRounds) {
        console.log(`Round ${currentRound + 1}`);
        // userInput = window.prompt('Rock, Paper, Scissors?');
        userInput = 'scissors' // use button group for userInput;
        computerInput = computerPlay();
        console.log(`Computer picked: ${computerInput}`);
        console.log(`Result: ${playRound(userInput, computerInput)}`);
        currentRound++;
    }
}

game();

// export default game;
// let userInput = process.argv[2];
// let computerInput = computerPlay();
// console.log(`\nComputer picked: ${computerInput}`);
// console.log(playRound(userInput, computerInput));
// console.log('\n');