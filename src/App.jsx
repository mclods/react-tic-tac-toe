import './App.css';
import Player from './components/Player/Player';

function App() {
  return (
    <main>
      <div className="gameContainer">
        <ol className="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
