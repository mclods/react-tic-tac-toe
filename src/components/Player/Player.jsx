import { useState } from 'react';
import './Player.css';

function Player({ initialName, symbol, isActive, updatePlayerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function onEdit() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      updatePlayerName(symbol, playerName);
    }
  }

  function onInputChange(event) {
    setPlayerName(event.target.value.toUpperCase());
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            className="playerInput"
            value={playerName}
            onChange={onInputChange}
          />
        ) : (
          <span className="playerName">{playerName}</span>
        )}
        <span className="playerSymbol">{symbol}</span>
      </span>
      <button className="playerButton" onClick={onEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

export default Player;
