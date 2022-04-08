import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers";

export const knightFn = (coords, color, board) => {
  const [r, c] = coords;

  const moves = [
    [r - 1, c - 2],
    [r - 2, c - 1],
    [r - 2, c + 1],
    [r - 1, c + 2],
    [r + 2, c + 1],
    [r + 1, c + 2],
    [r + 2, c - 1],
    [r + 1, c - 2],
  ].filter(areCoordsInBounds);

  const output = [];

  for (let m of moves) {
    if (hasEnemyPiece(m, color, board) || isEmpty(m, board)) {
      output.push(m);
    }
  }

  return output;
};
