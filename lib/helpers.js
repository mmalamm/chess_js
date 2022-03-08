export const createDiv = (className) => {
  const div = document.createElement("div");
  if (className) div.classList.add(className);
  return div;
};

const createRow = (c) => [..."rhbqkbhr"].map((p) => c + p);
const createPawns = (c) => [..."p".repeat(8)].map((p) => c + p);

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

export const isEqual = (a, b) => js(a) === js(b);
