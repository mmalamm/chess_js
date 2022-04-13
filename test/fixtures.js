// white, king-side castling setup state
const whiteKingsideCastleSetup = {
  current: "w",
  selected: null,
  board: [
    ["br", null, "bb", "bq", "bk", null, null, "br"],
    ["bp", "bp", "bp", "bp", null, "bp", "bp", "bp"],
    [null, null, "bh", "bb", "bp", null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, "wb", "wp", null, null, null, null],
    [null, "wp", null, null, "wp", "wh", null, null],
    ["wp", null, "wp", "bh", null, "wp", "wp", "wp"],
    ["wr", "wh", null, "wq", "wk", null, null, "wr"],
  ],
};

const whiteKingsideCastleSetup2 = {
  current: "b",
  selected: null,
  board: [
    ["br", null, "bb", null, "bk", null, null, "br"],
    ["bp", "bp", "bp", "bp", null, "bp", "bp", "bp"],
    [null, null, "bh", null, "bp", "bq", null, "bh"],
    [null, null, null, null, null, null, null, null],
    [null, "bb", null, "wp", null, null, null, null],
    [null, null, "wh", null, null, "wh", "wp", "wb"],
    ["wp", "wp", "wp", "wb", "wp", "wp", null, "wp"],
    ["wr", null, null, "wq", "wk", null, null, "wr"],
  ],
};

const thing = {
  current: "b",
  selected: null,
  board: [
    ["br", null, "bb", null, "bk", null, null, "br"],
    ["bp", "bp", "bp", "bp", null, "bp", "bp", "bp"],
    [null, null, "bh", null, "bp", "bq", null, "bh"],
    [null, null, null, null, null, null, null, null],
    [null, "bb", null, "wp", null, null, null, null],
    [null, null, "wh", null, null, "wh", "wp", "wb"],
    ["wp", "wp", "wp", "wb", "wp", "wp", null, "wp"],
    ["wr", null, null, "wq", "wk", null, null, "wr"],
  ],
  castlingAllowed: {
    whiteQueenSide: true,
    whiteKingSide: true,
    blackQueenSide: true,
    blackKingSide: true,
  },
};
