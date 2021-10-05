const ACTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
};

const RESULTS = {
    WIN: 'win',
    LOSE: 'lose',
    DRAW: 'draw'
}

const computerPlay = () => {
    let roll = Math.random() * 300, result;
    switch (true) {
        case Math.floor(roll) % 3 === 0:
            result = ACTIONS.ROCK;
            break;
        case Math.floor(roll) % 3 === 1:
            result = ACTIONS.PAPER;
            break;
        case Math.floor(roll) % 3 === 2:
            result = ACTIONS.SCISSORS;
            break;
        default:
            console.warn('result outside parameter');
            break;
    }
    return result;
}

const playRound = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === ACTIONS.ROCK) {
        switch (computerChoice) {
            case ACTIONS.ROCK:
                return RESULTS.DRAW;
            case ACTIONS.PAPER:
                return RESULTS.LOSE;
            case ACTIONS.SCISSORS:
                return RESULTS.WIN;
        }
    } else if (playerChoice === ACTIONS.PAPER) {
        switch (computerChoice) {
            case ACTIONS.ROCK:
                return RESULTS.WIN;
            case ACTIONS.PAPER:
                return RESULTS.DRAW;
            case ACTIONS.SCISSORS:
                return RESULTS.LOSE;
        }
    } else {
        switch (computerChoice) {
            case ACTIONS.ROCK:
                return RESULTS.LOSE;
            case ACTIONS.PAPER:
                return RESULTS.WIN;
            case ACTIONS.SCISSORS:
                return RESULTS.DRAW;
        }
    }
}

// let userInput = process.argv[2];
// let computerInput = computerPlay();
// console.log(`\nComputer picked: ${computerInput}`);
// console.log(playRound(userInput, computerInput));
// console.log('\n');

const engineResources = { computerPlay, playRound, ACTIONS, RESULTS };
export default engineResources;