import './App.css';
import engineResources from './scripts/engine.js';
const { computerPlay, playRound} = engineResources;

function App() {
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
            <h2>{computerScore}</h2>
          </div>
        </div>
        <div className="btn-group">
          <button data-value="rock">Rock</button>
          <button data-value="paper">Paper</button>
          <button data-value="scissors">Scissors</button>
        </div>
      </div>
    </div>
  );
}

const btnAll = document.querySelectorAll('button');
let userInput, computerInput, playerScore = 0, computerScore = 0;

function btnOnClick(e) {
  userInput = e.target.getAttribute('data-value');
  computerInput = computerPlay();
  console.log(`userInput =\t${userInput}\ncomputerInput =\t${computerInput}`);
  console.log(playRound(userInput, computerInput));
}

btnAll.forEach(button => {
  button.addEventListener('click', btnOnClick);
});


export default App;
