import React, { useState, useReducer} from 'react';
import './App.css';
import engineResources from './scripts/engine.js';
const { computerPlay, playRound } = engineResources;

const rock = <img src='./images/rps_rock.png' />;
const paper = <img src='./images/rps_paper.png' />;
const scissors = <img src='./images/rps_scissors.png' />;

const ACTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ROCK:
      return { player: rock, computer: window[`${action.payload}`] };
      break;
    case ACTIONS.PAPER:
      return { player: paper, computer: window[`${action.payload}`] };
      break;
    case ACTIONS.SCISSORS:
      return { player: scissors, computer: window[`${action.payload}`] };
      break;
    default:
      return state;
  }
};

function App() {
  const [imageState, dispatch] = useReducer(reducer, {player: null, computer: null});
  const [playerScore, setPlayerScore] = useState(() => 0);
  const [compScore, setCompScore] = useState(() => 0);
  const [userInput, setUserInput] = useState(() => '');
  const [result, setResult] = useState(() => null);
  let compInput;

  const playerWin = () => {
    setPlayerScore(currentScore => currentScore + 1);
  };

  const computerWin = () => {
    setCompScore(currentScore => currentScore +1);
  }

  function btnOnClick(e) {
    setUserInput(currentVal => e.target.getAttribute('data-value'));
    compInput = computerPlay();
    dispatch({ type: userInput, payload: compInput });
    console.log(`computerInput =\t${compInput}`);
    setResult(currentResult => playRound(userInput, compInput));
    switch (result) {
      case 'win':
        playerWin();
        break;
      case 'lose':
        computerWin();
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome RPS</h1>
        <h2>(Not rapes dummy, Rock Paper Scissors!)</h2>
      </header>
      <div className="App-body">
        <div className="game-display">
          <div className="player">
            <h1>Player</h1>
            <h2>{playerScore}</h2>
          </div>
          <div className="player-img">
            {paper}
          </div>
          <div className="computer-img">
            {rock}
          </div>
          <div className="computer">
            <h1>Comp</h1>
            <h2>{compScore}</h2>
          </div>
        </div>
        <div className="result">
          <h2>{result}</h2>
        </div>
        <div className="btn-group">
          <button onClick={btnOnClick} data-value={ACTIONS.ROCK}>Rock</button>
          <button onClick={btnOnClick} data-value={ACTIONS.PAPER}>Paper</button>
          <button onClick={btnOnClick} data-value={ACTIONS.SCISSORS}>Scissors</button>
        </div>
      </div>
    </div>
  );
}


export default App;