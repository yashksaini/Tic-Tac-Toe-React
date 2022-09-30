import React from "react";
import Square from "./Square";

export const Board = ({ board, handleSquareClick, winningSquares }) => {
  // It will return square component with funciton
  const renderSquare = (position) => {
    const isWinningSquare = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        isWinningSquare={isWinningSquare}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
