import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers.js";

export const knightFn = (coords, color, board) => {
  const [r, c] = coords;

  return [
    [r - 1, c - 2],
    [r - 2, c - 1],
    [r - 2, c + 1],
    [r - 1, c + 2],
    [r + 2, c + 1],
    [r + 1, c + 2],
    [r + 2, c - 1],
    [r + 1, c - 2],
  ].filter(
    (m) =>
      areCoordsInBounds(m) &&
      (hasEnemyPiece(m, color, board) || isEmpty(m, board))
  );
};
