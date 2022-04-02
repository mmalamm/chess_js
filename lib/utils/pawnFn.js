export const pawnFn = (coords, color, board) => {
  const moves = [];
  const diags = getAdjacentDiagCoords(coords, color);
  diags.forEach((d) => {
    if (hasEnemyPiece(coords, color, board)) {
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
};

function getAdjacentDiagCoords(coords, color) {}

function hasEnemyPiece(coords, color, board) {}

function isEmpty(cellToCheck, board) {}

function getOneCellFwd(coords, color) {}

function isHomeRow(coords, color) {}
