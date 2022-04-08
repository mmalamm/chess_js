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
