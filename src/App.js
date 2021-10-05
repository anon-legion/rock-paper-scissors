import React, { useState, useEffect} from 'react';
import './App.css';
import engineResources from './scripts/engine.js';
import rock from './img/rps_rock.png';
import paper from './img/rps_paper.png';
import scissors from './img/rps_scissors.png';
const { computerPlay, playRound } = engineResources;

const ACTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
};


const imgSelector = (action) => {
  switch (action) {
    case ACTIONS.ROCK:
      return rock;
    case ACTIONS.PAPER:
      return paper;
    case ACTIONS.SCISSORS:
      return scissors;
    default:
      return null;
  }
}


function App() {
  // const [image, setImage] = useState(() => ({player: null, computer: null}));
  // const [score, setScore] = useState(() => ({player: 0, computer: 0}));
  // const [input, setInput] = useState(() => ({}));

  const [gameState, setGameState] = useState(() => ({
    image: {player: null, computer: null},
    input: {player: '', computer: ''}
  }));

  const [effectState, setEffectState] = useState(() => ({
    result: null,
    score: {player: 0, computer: 0}
  }));

  // useEffect(() => {
  //   if(!gameState.input.player) {
  //     return null;
  //   } else {

  //   }
  // }, [gameState])
  
  function btnOnClick(e) {
    const newInput = {player: e.target.getAttribute('data-value'), computer: computerPlay()}; 
    const newImage = {player: imgSelector(newInput.player), computer: imgSelector(newInput.computer)};
    setGameState(prevState => {
      return {image: newImage, input: newInput};
    });
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
            <h2>{effectState.score.player}</h2>
          </div>
          <div className="player-img">
            <img src={gameState.image.player} />
          </div>
          <div className="computer-img">
            <img src={gameState.image.computer} />
          </div>
          <div className="computer">
            <h1>Comp</h1>
            <h2>{effectState.score.computer}</h2>
          </div>
        </div>
        <div className="result">
          <h2>{effectState.result}</h2>
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