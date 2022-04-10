export function hasEnemyPiece(coords, color, board) {
  const enemyPieceColor = color === "b" ? "w" : "b";
  const [rowIdx, cIdx] = coords;
  if (board[rowIdx][cIdx] === null) return false;
  return board[rowIdx][cIdx][0] === enemyPieceColor;
}

export function isEmpty(cellToCheck, board) {
  const [rowIdx, cIdx] = cellToCheck;

  return board[rowIdx][cIdx] === null;
}

export function areCoordsInBounds(coords) {
  return coords.every((v) => v > -1 && v < 8);
}

const getStraightMoves =
  ({ coords, color, board }) =>
  (applyChange) => {
    const output = [];
    let currentCell = applyChange(coords);
    while (areCoordsInBounds(currentCell)) {
      if (isEmpty(currentCell, board)) {
        output.push(currentCell);
        currentCell = applyChange(currentCell);
        continue;
      }

      if (hasEnemyPiece(currentCell, color, board)) {
        output.push(currentCell);
        break;
      }

      break;
    }

    return output;
  };

export const getDiagonals = (coords, color, board) => {
  const f = getStraightMoves({ color, coords, board });

  const topLeftDiags = f((c) => c.map((c_) => c_ - 1));
  const topRightDiags = f((c) => [c[0] - 1, c[1] + 1]);
  const botRightDiags = f((c) => c.map((c_) => c_ + 1));
  const botLeftDiags = f((coords) => [coords[0] + 1, coords[1] - 1]);

  return [...topLeftDiags, ...topRightDiags, ...botRightDiags, ...botLeftDiags];
};

export const getOrthogonals = (coords, color, board) => {
  const f = getStraightMoves({ color, coords, board });

  const lefts = f((c) => [c[0], c[1] - 1]);
  const rights = f((c) => [c[0], c[1] + 1]);
  const tops = f((c) => [c[0] - 1, c[1]]);
  const bots = f((c) => [c[0] + 1, c[1]]);

  return [...tops, ...rights, ...bots, ...lefts];
};

export const rookFn = (coords, color, board) =>
  getOrthogonals(coords, color, board);

export const bishopFn = (coords, color, board) =>
  getDiagonals(coords, color, board);

export const queenFn = (coords, color, board) =>
  [getDiagonals, getOrthogonals].map((f) => f(coords, color, board)).flat();

const getMovesFromDeltas = (coords, color, board) => (getDeltas) =>
  getDeltas(coords).filter(
    (m) =>
      areCoordsInBounds(m) &&
      (hasEnemyPiece(m, color, board) || isEmpty(m, board))
  );

export const knightFn = (coords, color, board) =>
  getMovesFromDeltas(
    coords,
    color,
    board
  )(([r, c]) => [
    [r - 1, c - 2],
    [r - 2, c - 1],
    [r - 2, c + 1],
    [r - 1, c + 2],
    [r + 2, c + 1],
    [r + 1, c + 2],
    [r + 2, c - 1],
    [r + 1, c - 2],
  ]);

export const kingFn = (coords, color, board) =>
  getMovesFromDeltas(
    coords,
    color,
    board
  )(([r, c]) => [
    [r - 1, c],
    [r - 1, c + 1],
    [r, c + 1],
    [r + 1, c + 1],
    [r + 1, c],
    [r + 1, c - 1],
    [r, c - 1],
    [r - 1, c - 1],
  ]);
