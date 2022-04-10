import { areCoordsInBounds, hasEnemyPiece, isEmpty } from "./helpers.js";

export const pawnFn = (coords, color, board) => {
  const moves = [];
  const diags = getAdjacentDiagCoords(coords, color);
  diags.forEach((d) => {
    if (hasEnemyPiece(d, color, board)) {
      moves.push(d);
    }
  });

  const oneCellFwd = getOneCellFwd(coords, color);
  if (isEmpty(oneCellFwd, board)) {
    moves.push(oneCellFwd);
  } else {
    return moves;
  }

  if (isHomeRow(coords, color)) {
    const twoCellsFwd = getOneCellFwd(oneCellFwd, color);
    if (isEmpty(twoCellsFwd, board)) {
      moves.push(twoCellsFwd);
    }
  }

  return moves;
};

function getAdjacentDiagCoords(coords, color) {
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

  return output.filter(areCoordsInBounds);
}

function getOneCellFwd(coords, color) {
  const [rowIdx, cIdx] = coords;
  return color === "w" ? [rowIdx - 1, cIdx] : [rowIdx + 1, cIdx];
}

function isHomeRow(coords, color) {
  const [rowIdx] = coords;
  return color === "w" ? rowIdx === 6 : rowIdx === 1;
}
