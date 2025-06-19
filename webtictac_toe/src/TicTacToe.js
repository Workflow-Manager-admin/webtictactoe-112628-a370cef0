import React, { useState } from 'react';

/*
PRIMARY COLORS:
  -- Primary:   #4CAF50
  -- Secondary: #FFC107
  -- Accent:    #2196F3
*/

/**
 * BOARD_SIZE is fixed for Tic Tac Toe (3x3).
 */
const BOARD_SIZE = 3;

// Helper function to determine winner or draw
function calculateWinner(squares) {
  const lines = [
    // Rows
    [0,1,2],[3,4,5],[6,7,8],
    // Columns
    [0,3,6],[1,4,7],[2,5,8],
    // Diagonals
    [0,4,8],[2,4,6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  if (squares.every(Boolean)) return 'draw';
  return null;
}

// PUBLIC_INTERFACE
function TicTacToe() {
  /**
   * State for game board and turn, winner status.
   * 'X' always goes first.
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  /**
   * Handles a click on a square (cell).
   * Ignores click if already filled or if game is over.
   */
  function handleClick(idx) {
    if (squares[idx] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  /**
   * Reset game to initial state.
   */
  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  /**
   * Text to show as turn indicator or result.
   */
  let statusText;
  if (winner === 'X' || winner === 'O') {
    statusText = `Winner: ${winner}`;
  } else if (winner === 'draw') {
    statusText = "It's a draw!";
  } else {
    statusText = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  // Theming for board and status display.
  // Color variables: primary("#4CAF50")=player X, secondary("#FFC107")=player O, accent("#2196F3")=active indicator.
  return (
    <div className="ttt-container">
      <h2 className="ttt-title">Web Tic Tac Toe</h2>
      <div className="ttt-status" data-testid="status" style={{
        fontWeight: 600,
        fontSize: '1.25rem',
        marginBottom: '18px',
        color:
          winner ? '#2196F3' : xIsNext ? '#4CAF50' : '#FFC107'
      }}>
        {/* Turn indicator or winner/draw status */}
        {statusText}
      </div>
      <div className="ttt-board">
        {squares.map((val, idx) => (
          <button
            key={idx}
            className="ttt-cell"
            data-testid={`cell-${idx}`}
            type="button"
            onClick={() => handleClick(idx)}
            aria-label={val ? `Cell ${idx+1}: ${val}` : `Empty Cell ${idx+1}`}
            style={{
              color: val === 'X'
                ? '#4CAF50'
                : val === 'O'
                  ? '#FFC107'
                  : '#1A1A1A',
              fontWeight: 'bold'
            }}
            disabled={!!squares[idx] || winner}
          >
            {val}
          </button>
        ))}
      </div>
      {(winner || squares.every(Boolean)) && (
        <button
          className="ttt-restart-btn"
          type="button"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      )}
    </div>
  );
}

export default TicTacToe;
