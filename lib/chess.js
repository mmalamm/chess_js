import {
  createDiv,
  getPieceCharacter,
  isEqual,
  getAllowedMovesList,
  dd,
  createInitState,
} from "./helpers.js";

const _gameState = createInitState();
const getGameState = () => Object.freeze({ ..._gameState });
const _selectPiece = (coords) => (_gameState.selected = coords);
const _playTurn = (toCoords) => {
  const { board, selected } = getGameState();
  const newBoard = dd(board);
  const selectedCellPiece = newBoard[selected[0]][selected[1]];
  newBoard[selected[0]][selected[1]] = null;
  newBoard[toCoords[0]][toCoords[1]] = selectedCellPiece;

  _gameState.board = newBoard;
  _gameState.current = _gameState.current === "w" ? "b" : "w";
  _gameState.selected = null;
};
const _copyState = () => {
  const s = JSON.stringify(getGameState());
  navigator.clipboard.writeText(s);
};

const chess = (rootDiv) => {
  const renderBoard = () => {
    const gameState = getGameState();
    const { board } = gameState;
    const allowedMoves = getAllowedMovesList(gameState);

    const boardElement = createDiv("board");
    const rows = board.map((r, rIdx) => {
      const rowNode = createDiv("row");
      const cellNodes = r.map((c, cIdx) => {
        const cellElement = createDiv("cell");
        if (!c) return cellElement;
        cellElement.innerHTML += getPieceCharacter(c);

        const isCurrentCellSelected = isEqual(gameState.selected, [rIdx, cIdx]);

        if (isCurrentCellSelected) {
          cellElement.style.backgroundColor = "green";
        }

        const isPieceOfCurrentPlayer = gameState.current === c[0];

        if (isPieceOfCurrentPlayer) {
          cellElement.classList.add("clickable");
          cellElement.addEventListener("click", () => {
            _selectPiece([rIdx, cIdx]);
            renderBoard();
          });
        }

        return cellElement;
      });
      cellNodes.forEach((n) => rowNode.appendChild(n));
      return rowNode;
    });
    rows.forEach((r) => boardElement.appendChild(r));

    allowedMoves.forEach((c) => {
      const allowedMoveCell = rows[c[0]].childNodes[c[1]];
      allowedMoveCell.style.border = "5px inset yellow";
      allowedMoveCell.classList.add("clickable");
      allowedMoveCell.addEventListener("click", () => {
        _playTurn(c);
        renderBoard();
      });
    });

    rootDiv.innerHTML = "";
    rootDiv.appendChild(boardElement);

    // copystate button
    const btn = document.createElement("button");
    btn.innerHTML = "copy state";
    btn.addEventListener("click", _copyState);
    rootDiv.appendChild(btn);
  };

  renderBoard();
};

export default chess;
