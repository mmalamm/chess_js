import { bishopFn, queenFn, rookFn } from "./utils/helpers.js";
import { knightFn } from "./utils/knightFn.js";
import { pawnFn } from "./utils/pawnFn.js";

export const createDiv = (className) => {
  const div = document.createElement("div");
  if (className) div.classList.add(className);
  return div;
};

const createRow = (c) => [..."rhbqkbhr"].map((p) => c + p);
const createPawns = (c) => [..."p".repeat(8)].map((p) => c + p);

const pieceNames = {
  p: "pawn",
  r: "rook",
  h: "knight",
  b: "bishop",
  q: "queen",
  k: "king",
};

const pieceHash = {
  br: "♜",
  bh: "♞",
  bb: "♝",
  bq: "♛",
  bk: "♚",
  bp: "♟",
  wr: "♖",
  wh: "♘",
  wb: "♗",
  wq: "♕",
  wk: "♔",
  wp: "♙",
};
export const getPieceCharacter = (pieceCode) => pieceHash[pieceCode];

export const createInitState = () => {
  const initState = {
    current: "w",
    selected: null,
  };

  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let i = 0; i < 8; i++) row.push(null);
    board.push(row);
  }

  board[0] = createRow("b");
  board[1] = createPawns("b");
  board[6] = createPawns("w");
  board[7] = createRow("w");

  return {
    ...initState,
    board,
  };
};

const js = (a) => JSON.stringify(a);
const jp = (s) => JSON.parse(s);
export const dd = (o) => jp(js(o));

export const isEqual = (a, b) => js(a) === js(b);

export const getSelectedPiece = (gameState) => {
  const { selected, board } = gameState;
  if (!selected) return null;
  const [rowIdx, cellIdx] = selected;
  const piece = board[rowIdx][cellIdx];
  return {
    piece,
    coords: selected,
    pieceName: pieceNames[piece[1]],
    pieceColor: piece[0],
  };
};

export const getAllowedMovesList = (gameState) => {
  const { selected, board, current } = gameState;
  const o = getSelectedPiece(gameState);
  if (o === null) return [];

  return fns[o.pieceName](selected, current, board);
};
const fns = {
  pawn: pawnFn,
  bishop: bishopFn,
  knight: knightFn,
  rook: rookFn,
  queen: queenFn,
};

/// allowed moves logic:
/**
## Pawn

create empty list
check adjacent diagonals for enemy pieces; if true, add to list
check delta +1y;
  if empty
    add to list
    if homerow: check delta +2y; if empty, add to list

## Bishop

create empty list

calculate diagonals: start from top left and go clockwise:
deltas until collide with piece or wall

for topLeftDiags: rowIdx-- cellIdx--
for topRghtDiags: rowIdx-- cellIdx++
for botRghtDiags: rowIdx++ cellIdx++
for botLeftDiags: rowIdx++ cellIdx--

## Horse

[
  [r-1, c-2],
  [r-2, c-1],
  [r-2, c+1],
  [r-1, c+2],
  [r+2, c+1],
  [r+1, c+2],
  [r+2, c-1],
  [r+1, c-2]
]

## Rook

for lefts: [r, c--]
for rghts: [r, c++]
for tops:  [r--, c]
for bots:  [r++, c]

## Queen

## King





 */
