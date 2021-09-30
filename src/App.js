import './App.css';
import game from './scripts/engine.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="btn-group">
          <buton className="btn" data-value="rock">Rock</buton>
          <buton className="btn" data-value="paper">Paper</buton>
          <buton className="btn" data-value="scissors">Scissors</buton>
        </div>
      </header>
    </div>
  );
}

export default App;
