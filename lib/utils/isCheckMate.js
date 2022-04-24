// check current player's list of all possible moves
// filter moves that would put the king in check
// if possible moves list is empty, return true

import { createNewBoard } from "../chess.js";
import { getAllowedMovesForPiece } from "../helpers.js";
import { hasOwnPiece } from "./helpers.js";
import { isInCheck } from "./isInCheck.js";

export const isCheckMate = ({ current, board }) => {
  if (!isInCheck({ current, board })) return false;
  const allPossibleMoves = [];
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cellCoords = [i, j];
      if (hasOwnPiece(cellCoords, current, board)) {
        const possibleMovesForPiece = getAllowedMovesForPiece(
          cellCoords,
          board
        );
        for (let possibleMove of possibleMovesForPiece) {
          const newBoard = createNewBoard({
            board,
            selected: cellCoords,
            toCoords: possibleMove,
          });
          if (!isInCheck({ board: newBoard, current })) {
            allPossibleMoves.push({
              from: cellCoords,
              to: possibleMove,
            });
            // return false;
          }
        }
      }
    }
  }
  console.log({ allPossibleMoves });
  return allPossibleMoves.length === 0;
  // return true;
};
