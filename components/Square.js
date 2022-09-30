import React from "react";

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinningSquare ? "winning" : ""}${
        isWinningSquare ? "winning" : ""
      } ${value === "X" ? "text-green" : "text-orange"}`}
      style={{ fontWeight: isWinningSquare ? "bold" : "normal" }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
