// white's turn: moving white horse would put white king in check:
// white horse at [5,2] can't move (show error? or filter moves?)
export const whiteUnmovablePieceDueToCheck = {
  current: "w",
  selected: [5, 2],
  board: [
    ["br", "bh", "bb", "bq", "bk", null, "bh", "br"],
    ["bp", "bp", "bp", "bp", null, "bp", "bp", "bp"],
    [null, null, null, null, "bp", null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, "bb", null, "wp", null, null, null, null],
    [null, null, "wh", null, null, null, null, null],
    ["wp", "wp", "wp", null, "wp", "wp", "wp", "wp"],
    ["wr", null, "wb", "wq", "wk", "wb", "wh", "wr"],
  ],
};

// black bishop put white king in check:
// use this fixture to test isInCheck
export const whiteIsInCheck = {
  current: "w",
  selected: null,
  board: [
    ["br", "bh", "bb", "bq", "bk", null, "bh", "br"],
    ["bp", "bp", "bp", "bp", null, "bp", "bp", "bp"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, "bp", null, null, null],
    [null, "bb", null, null, "wp", null, null, null],
    [null, null, null, "wp", null, null, null, null],
    ["wp", "wp", "wp", null, null, "wp", "wp", "wp"],
    ["wr", "wh", "wb", "wq", "wk", "wb", "wh", "wr"],
  ],
};
