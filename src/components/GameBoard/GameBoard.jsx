import { useState } from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSquareClick, turns }) {
  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol className="gameBoard">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {
                  <button onClick={() => onSquareClick(rowIndex, colIndex)} disabled={!!playerSymbol}>
                    {playerSymbol}
                  </button>
                }
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
