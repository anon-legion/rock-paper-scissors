import React, { useState, useEffect} from 'react';
import './App.css';
import engineResources from './scripts/engine.js';
import rock from './img/rps_rock.png';
import paper from './img/rps_paper.png';
import scissors from './img/rps_scissors.png';
import ButtonGroup from './components/buttonGroup.js';
const { computerPlay, playRound, ACTIONS, RESULTS } = engineResources;


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
  const [gameState, setGameState] = useState(() => ({
    image: {player: null, computer: null},
    input: {player: '', computer: ''}
  }));


  const [effectState, setEffectState] = useState(() => ({
    result: null,
    playerScore: 0,
    computerScore: 0
  }));

  const [btnState, setBtnState] = useState(() => null);

  const [count, setCount] = useState(() => 0);

  
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(prevState => prevState - 1), 300)
    } else {
      if (!btnState) {
        return null;
      }
      rps();
    }
  }, [count])


  useEffect(() => {
    if(!gameState.input.player) {
      return null;
    } else {
      const roundResult = playRound(gameState.input.player, gameState.input.computer);
      switch (roundResult) {
        case RESULTS.WIN:
          setEffectState(prevState => {
            return {...prevState, result: roundResult, playerScore: prevState.playerScore + 1 };
          });
          break;
        case RESULTS.LOSE:
          setEffectState(prevState => {
            return {...prevState, result: roundResult, computerScore: prevState.computerScore + 1 };
          });
          break;
        case RESULTS.DRAW:
          setEffectState(prevState => {
            return {...prevState, result: roundResult };
          });
          break;
      };
    }
  }, [gameState]);
  

  function btnClickFunction(e) {
    setBtnState(prevState => e.target);
  }


  function rps() {
    const newInput = {player: btnState.getAttribute('data-value'), computer: computerPlay()}; 
    const newImage = {player: imgSelector(newInput.player), computer: imgSelector(newInput.computer)};
    setGameState(prevState => {
      return {image: newImage, input: newInput};
    });
  };


  function resetOnClick() {
    setGameState(prevState => {
      return {
        image: {player: null, computer: null},
        input: {player: '', computer: ''}
      };
    });
    setEffectState(prevState => {
      return {
        result: null,
        playerScore: 0,
        computerScore: 0
      };
    });
    btnState.click();
    setBtnState(prevState => null);
  };


  function goOnClick() {
    setCount(prevState => 3);
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
            <h2>{effectState.playerScore}</h2>
          </div>
          <div className="player-img">
            <img src={gameState.image.player} />
          </div>
          <div className="computer-img">
            <img src={gameState.image.computer} />
          </div>
          <div className="computer">
            <h1>Comp</h1>
            <h2>{effectState.computerScore}</h2>
          </div>
        </div>
        <div className="result">
          <h2>{count <= 0 ? effectState.result : count}</h2>
        </div>
        <ButtonGroup buttons={ACTIONS} clickFunction={btnClickFunction}/>
        <div className="btn-controls">
          <button onClick={resetOnClick} disabled={false}>Reset</button>
          <button onClick={goOnClick} disabled={count > 0 || !btnState ? true : false}>Go!</button>
        </div>
      </div>
    </div>
  );
}


export default App;