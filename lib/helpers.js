import {
  bishopFn,
  kingFn,
  knightFn,
  queenFn,
  rookFn,
} from "./utils/helpers.js";
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
  king: kingFn,
  rook: rookFn,
  queen: queenFn,
};
