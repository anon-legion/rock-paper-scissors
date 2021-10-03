import React, { useState, useEffect } from 'react';
import './App.css';
import engineResources from './scripts/engine.js';
const { computerPlay, playRound} = engineResources;

function App() {
  const [playerScore, setPlayerScore] = useState(() => 0);
  const [compScore, setCompScore] = useState(() => 0);
  const gameVals = ['rock', 'paper', 'scissors'];
  const rock = <img src='./images/rps_rock.png' />;
  const paper = <img src='./images/rps_paper.png' />;
  const scisorrs = <img src='./images/rps_scissors.png' />;
  let userInput, compInput, result;

  const playerWin = () => {
    setPlayerScore(currentScore => currentScore + 1);
  };

  const computerWin = () => {
    setCompScore(currentScore => currentScore +1);
  }

  function btnOnClick(e) {
    userInput = e.target.getAttribute('data-value');
    compInput = computerPlay();
    console.log(`computerInput =\t${compInput}`);
    result = playRound(userInput, compInput);
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
          </div>
          <div className="computer-img">
          </div>
          <div className="computer">
            <h1>Comp</h1>
            <h2>{compScore}</h2>
          </div>
        </div>
        <div className="btn-group">
          <button onClick={btnOnClick} data-value={gameVals[0]}>Rock</button>
          <button onClick={btnOnClick} data-value={gameVals[1]}>Paper</button>
          <button onClick={btnOnClick} data-value={gameVals[2]}>Scissors</button>
        </div>
      </div>
    </div>
  );
}


export default App;