import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers.js";

export const bishopFn = (coords, color, board) => {
  const [rowIdx, cIdx] = coords;

  //top left diags:
  const topLeftDiags = [];
  let currentTopLeft = [rowIdx - 1, cIdx - 1];
  while (areCoordsInBounds(currentTopLeft) && isEmpty(currentTopLeft, board)) {
    topLeftDiags.push(currentTopLeft);
    currentTopLeft = currentTopLeft.map((c) => c - 1);
  }
  if (
    areCoordsInBounds(currentTopLeft) &&
    hasEnemyPiece(currentTopLeft, color, board)
  ) {
    topLeftDiags.push(currentTopLeft);
  }

  //top right diags:
  const topRightDiags = [];
  let currentTopRight = [rowIdx - 1, cIdx + 1];
  while (
    areCoordsInBounds(currentTopRight) &&
    isEmpty(currentTopRight, board)
  ) {
    topRightDiags.push(currentTopRight);
    currentTopRight = [currentTopRight[0] - 1, currentTopRight[1] + 1];
  }
  if (
    areCoordsInBounds(currentTopRight) &&
    hasEnemyPiece(currentTopRight, color, board)
  ) {
    topRightDiags.push(currentTopRight);
  }

  //bot right diags:
  const botRightDiags = [];
  let currentBotRight = [rowIdx + 1, cIdx + 1];
  while (
    areCoordsInBounds(currentBotRight) &&
    isEmpty(currentBotRight, board)
  ) {
    botRightDiags.push(currentBotRight);
    currentBotRight = currentBotRight.map((c) => c + 1);
  }
  if (
    areCoordsInBounds(currentBotRight) &&
    hasEnemyPiece(currentBotRight, color, board)
  ) {
    botRightDiags.push(currentBotRight);
  }

  //bot left diags:
  const botLeftDiags = [];
  let currentBotLeft = [rowIdx + 1, cIdx - 1];
  while (areCoordsInBounds(currentBotLeft) && isEmpty(currentBotLeft, board)) {
    botLeftDiags.push(currentBotLeft);
    currentBotLeft = [currentBotLeft[0] + 1, currentBotLeft[1] - 1];
  }
  if (
    areCoordsInBounds(currentBotLeft) &&
    hasEnemyPiece(currentBotLeft, color, board)
  ) {
    botLeftDiags.push(currentBotLeft);
  }

  return [...topLeftDiags, ...topRightDiags, ...botRightDiags, ...botLeftDiags];
};
