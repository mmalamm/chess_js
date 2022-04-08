import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers";

export const bishopFn = (coords, color, board) => {
  const moves = [];
  const [rowIdx, cIdx] = coords;

  //top left diags:
  let currentTopLeft = [rowIdx - 1, cIdx - 1];
  while (areCoordsInBounds(currentTopLeft) && isEmpty(currentTopLeft, board)) {
    if (hasEnemyPiece(currentTopLeft, color, board)) {
      moves.push(currentTopLeft);
      break;
    }

    moves.push(currentTopLeft);
    currentTopLeft = currentTopLeft.map((c) => c - 1);
  }

  //top right diags:
  let currentTopRight = [rowIdx - 1, cIdx + 1];
  while (
    areCoordsInBounds(currentTopRight) &&
    isEmpty(currentTopRight, board)
  ) {
    if (hasEnemyPiece(currentTopRight, color, board)) {
      moves.push(currentTopRight);
      break;
    }

    moves.push(currentTopRight);
    currentTopRight = [currentTopRight[0] - 1, currentTopRight[1] + 1];
  }

  //bot right diags:
  let currentBotRight = [rowIdx + 1, cIdx + 1];
  while (
    areCoordsInBounds(currentBotRight) &&
    isEmpty(currentBotRight, board)
  ) {
    if (hasEnemyPiece(currentBotRight, color, board)) {
      moves.push(currentBotRight);
      break;
    }

    moves.push(currentBotRight);
    currentBotRight = currentBotRight.map((c) => c + 1);
  }

  //bot left diags:
  let currentBotLeft = [rowIdx + 1, cIdx - 1];
  while (areCoordsInBounds(currentBotLeft) && isEmpty(currentBotLeft, board)) {
    if (hasEnemyPiece(currentBotLeft, color, board)) {
      moves.push(currentBotLeft);
      break;
    }

    moves.push(currentBotLeft);
    currentBotLeft = [currentBotLeft[0] + 1, currentBotLeft[1] - 1];
  }

  return moves;
};
