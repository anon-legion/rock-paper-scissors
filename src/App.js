import React, { useState, useEffect} from 'react';
import './App.css';
import engineResources from './scripts/engine.js';
import rock from './img/rps_rock.png';
import paper from './img/rps_paper.png';
import scissors from './img/rps_scissors.png';
import ButtonGroup from './components/buttonGroup.js';
import Footer from './components/Footer.js';
import 'bulma/css/bulma.min.css';


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
        default:
          return null;
      };
    }
  }, [gameState]);
  

  function btnClickFunction(e) {
    e.target === btnState ? setBtnState(prevState => null) : setBtnState(prevState => e.target);
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
    if (btnState) {
      btnState.click();
      setBtnState(prevState => null);
    };
  };


  function goOnClick() {
    setCount(prevState => 3);
  }


  return (
    <>
      <header className="hero">
        <div className="hero-body p-4">
          <h1 className="title is-1 is-size-3-mobile">World RPS Championship</h1>
          <h2 className="subtitle is-3 has-text-grey-lighter is-size-6-mobile">(You vs the best, Rock Paper Scissors!)</h2>
        </div>
      </header>
      <main className="section is-flex is-flex-direction-column is-align-items-center">
        <div className="container">
          <div className="level is-flex">
            <div className="level-left">
              <div className="level-item has-item-gap">
                <h2 className="is-size-3 has-text-grey-lighter">{effectState.playerScore}</h2>
                <h1 className="is-size-3 has-text-weight-semibold">Player</h1>
              </div>
            </div>
            <div className="level-right is-flex is-align-items-center m-0">
              <div className="level-item has-item-gap">
                <h1 className="is-size-3 has-text-weight-semibold">Champ</h1>
                <h2 className="is-size-3 has-text-grey-lighter">{effectState.computerScore}</h2>
              </div>
            </div>
          </div>
          <div className="illustration">
            <figure className="image">
              <img
                src={gameState.image.player}
                alt={`${gameState.input.player}`}
              />
            </figure>
            <figure className="image">
              <img src={gameState.image.computer} alt={`${gameState.input.computer}`} />
            </figure>
          </div>
        </div>
        <div className="result">
          <h1 className="is-size-3 is-uppercase has-text-weight-semibold">{count <= 0 ? effectState.result : count}</h1>
        </div>
        <ButtonGroup buttons={ACTIONS} clickFunction={btnClickFunction}/>
        <div className="btn-controls">
          <button className="is-size-5" onClick={resetOnClick} disabled={count > 0 ? true : false}>Reset</button>
          <button className="is-size-5" onClick={goOnClick} disabled={count > 0 || !btnState ? true : false}>Go!</button>
        </div>
      </main>
      <Footer />
    </>
  );
}


export default App;