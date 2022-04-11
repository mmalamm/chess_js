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
