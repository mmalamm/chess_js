import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers";

export const pawnFn = (coords, color, board) => {
  const moves = [];
  const diags = getAdjacentDiagCoords(coords, color);
  diags.forEach((d) => {
    if (areCoordsInBounds(d) && hasEnemyPiece(d, color, board)) {
      moves.push(d);
    }
  });

  const oneCellFwd = getOneCellFwd(coords, color);
  if (isEmpty(oneCellFwd, board)) {
    moves.push(oneCellFwd);
  } else {
    return;
  }

  if (isHomeRow(coords, color)) {
    const twoCellsFwd = getOneCellFwd(oneCellFwd, color);
    if (isEmpty(twoCellsFwd, board)) {
      moves.push(twoCellsFwd);
    }
  }

  return moves;
};

export function getAdjacentDiagCoords(coords, color) {
  const [rowIdx, cIdx] = coords;
  let output;
  if (color === "w") {
    output = [
      [rowIdx - 1, cIdx - 1],
      [rowIdx - 1, cIdx + 1],
    ];
  }

  if (color === "b") {
    output = [
      [rowIdx + 1, cIdx - 1],
      [rowIdx + 1, cIdx + 1],
    ];
  }

  return output.filter((c) => !(c.includes(-1) || c.includes(8)));
}

function getOneCellFwd(coords, color) {
  const [rowIdx, cIdx] = coords;
  if (color === "w") {
    return [rowIdx - 1, cIdx];
  }

  if (color === "b") {
    return [rowIdx + 1, cIdx];
  }
}

function isHomeRow(coords, color) {
  const [rowIdx] = coords;
  return color === "w" ? rowIdx === 6 : rowIdx === 1;
}
