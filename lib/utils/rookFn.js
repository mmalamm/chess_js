import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers.js";

export const rookFn = (coords, color, board) => {
  const [r, c] = coords;

  // lefts
  const lefts = [];
  let currentLeft = [r, c - 1];
  while (areCoordsInBounds(currentLeft) && isEmpty(currentLeft, board)) {
    lefts.push(currentLeft);
    currentLeft = [currentLeft[0], currentLeft[1] - 1];
  }
  if (
    areCoordsInBounds(currentLeft) &&
    hasEnemyPiece(currentLeft, color, board)
  ) {
    lefts.push(currentLeft);
  }

  // rights
  const rights = [];
  let currentRight = [r, c + 1];
  while (areCoordsInBounds(currentRight) && isEmpty(currentRight, board)) {
    rights.push(currentRight);
    currentRight = [currentRight[0], currentRight[1] + 1];
  }
  if (
    areCoordsInBounds(currentRight) &&
    hasEnemyPiece(currentRight, color, board)
  ) {
    rights.push(currentRight);
  }

  // tops
  const tops = [];
  let currentTop = [r - 1, c];
  while (areCoordsInBounds(currentTop) && isEmpty(currentTop, board)) {
    tops.push(currentTop);
    currentTop = [currentTop[0] - 1, currentTop[1]];
  }
  if (
    areCoordsInBounds(currentTop) &&
    hasEnemyPiece(currentTop, color, board)
  ) {
    tops.push(currentTop);
  }

  // bots
  const bots = [];
  let currentBot = [r + 1, c];
  while (areCoordsInBounds(currentBot) && isEmpty(currentBot, board)) {
    bots.push(currentBot);
    currentBot = [currentBot[0] + 1, currentBot[1]];
  }
  if (
    areCoordsInBounds(currentBot) &&
    hasEnemyPiece(currentBot, color, board)
  ) {
    bots.push(currentBot);
  }

  return [...tops, ...rights, ...bots, ...lefts];
};
