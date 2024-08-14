import './Log.css';

function Log({ turns, players }) {
  return (
    <ol className="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player]} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
