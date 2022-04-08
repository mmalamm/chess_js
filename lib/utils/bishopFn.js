import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers";

export const bishopFn = (coords, color, board) => {
  const [rowIdx, cIdx] = coords;

  //top left diags:
  const topLeftDiags = [];
  let currentTopLeft = [rowIdx - 1, cIdx - 1];
  while (areCoordsInBounds(currentTopLeft) && isEmpty(currentTopLeft, board)) {
    if (hasEnemyPiece(currentTopLeft, color, board)) {
      topLeftDiags.push(currentTopLeft);
      break;
    }

    topLeftDiags.push(currentTopLeft);
    currentTopLeft = currentTopLeft.map((c) => c - 1);
  }

  //top right diags:
  const topRightDiags = [];
  let currentTopRight = [rowIdx - 1, cIdx + 1];
  while (
    areCoordsInBounds(currentTopRight) &&
    isEmpty(currentTopRight, board)
  ) {
    if (hasEnemyPiece(currentTopRight, color, board)) {
      topRightDiags.push(currentTopRight);
      break;
    }

    topRightDiags.push(currentTopRight);
    currentTopRight = [currentTopRight[0] - 1, currentTopRight[1] + 1];
  }

  //bot right diags:
  const botRightDiags = [];
  let currentBotRight = [rowIdx + 1, cIdx + 1];
  while (
    areCoordsInBounds(currentBotRight) &&
    isEmpty(currentBotRight, board)
  ) {
    if (hasEnemyPiece(currentBotRight, color, board)) {
      botRightDiags.push(currentBotRight);
      break;
    }

    botRightDiags.push(currentBotRight);
    currentBotRight = currentBotRight.map((c) => c + 1);
  }

  //bot left diags:
  const botLeftDiags = [];
  let currentBotLeft = [rowIdx + 1, cIdx - 1];
  while (areCoordsInBounds(currentBotLeft) && isEmpty(currentBotLeft, board)) {
    if (hasEnemyPiece(currentBotLeft, color, board)) {
      botLeftDiags.push(currentBotLeft);
      break;
    }

    botLeftDiags.push(currentBotLeft);
    currentBotLeft = [currentBotLeft[0] + 1, currentBotLeft[1] - 1];
  }

  return [...topLeftDiags, ...topRightDiags, ...botRightDiags, ...botLeftDiags];
};
