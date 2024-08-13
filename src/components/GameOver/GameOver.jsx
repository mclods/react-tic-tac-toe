import './GameOver.css';

function GameOver({ winner, handleRestart }) {
  return (
    <div className="gameOver">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It&apos;s a draw</p>}
      <p>
        <button onClick={handleRestart}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
