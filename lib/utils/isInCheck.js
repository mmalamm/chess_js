import { getAllowedMovesForPiece } from "../helpers.js";
import { hasEnemyPiece } from "./helpers.js";

export const isInCheck = ({ current, board }) => {
  // check position of current's king
  const kingCoords = findKing({ current, board });
  // check all possible moves of enemy's pieces to see if one of them is equal to current king's position
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (hasEnemyPiece([i, j], current, board)) {
        const allowedMoves = getAllowedMovesForPiece([i, j], board);
        for (let move of allowedMoves) {
          if (move[0] === kingCoords[0] && move[1] === kingCoords[1]) {
            return true;
          }
        }
      }
    }
  }
};

const findKing = ({ current, board }) => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === `${current}k`) return [i, j];
    }
  }
};
