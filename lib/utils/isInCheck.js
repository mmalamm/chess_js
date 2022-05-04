import { getAllowedMovesForPiece } from "../helpers.js";
import { hasEnemyPiece } from "./helpers.js";

export const isInCheck = ({ board, whosTurn }) => {
  // check position of current player's king
  const kingCoords = findKing({ whosTurn, board });
  // check all possible moves of enemy's pieces to see if one of them is equal to current king's position
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (hasEnemyPiece([i, j], whosTurn, board)) {
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

const findKing = ({ board, whosTurn }) => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === `${whosTurn}k`) return [i, j];
    }
  }
};
