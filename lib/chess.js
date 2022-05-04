import {
  createDiv,
  getPieceCharacter,
  isEqual,
  getAllowedMovesList,
  dd,
  createInitState,
} from "./helpers.js";
import { isCheckMate } from "./utils/isCheckMate.js";
import { isInCheck } from "./utils/isInCheck.js";

const _gameState = createInitState();
const getGameState = () => Object.freeze({ ..._gameState });
const _selectPiece = (coords) => (_gameState.selected = coords);
const _playTurn = (toCoords) => {
  const { board, selected, current } = getGameState();
  const newBoard = createNewBoard({ board, selected, toCoords });

  if (isInCheck({ current, board: newBoard })) {
    return alert("cant move this because you will be in check");
  }

  _gameState.board = newBoard;
  _gameState.current = _gameState.current === "w" ? "b" : "w";
  _gameState.selected = null;

  const { board: updatedBoard, current: updatedCurrent } = getGameState();

  if (isCheckMate({ board: updatedBoard, current: updatedCurrent })) {
    _gameState.isOver = true;
  }
};

export const createNewBoard = ({ board, selected, toCoords }) => {
  const newBoard = dd(board);
  const selectedCellPiece = newBoard[selected[0]][selected[1]];
  newBoard[selected[0]][selected[1]] = null;
  newBoard[toCoords[0]][toCoords[1]] = selectedCellPiece;
  return newBoard;
};

const createCell =
  ({ gameState, rIdx, renderBoard }) =>
  (c, cIdx) => {
    const cellElement = createDiv("cell");
    if (!c) return cellElement;
    cellElement.innerHTML += getPieceCharacter(c);

    if (gameState.isOver) return cellElement;

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
  };

const chess = (rootDiv) => {
  const renderBoard = () => {
    const gameState = getGameState();
    const { board, isOver } = gameState;
    const allowedMoves = getAllowedMovesList(gameState);

    const boardElement = createDiv("board");
    const rows = board.map((r, rIdx) => {
      const rowNode = createDiv("row");
      const cellNodes = r.map(createCell({ gameState, rIdx, renderBoard }));
      cellNodes.forEach((n) => rowNode.appendChild(n));
      return rowNode;
    });
    rows.forEach((r) => boardElement.appendChild(r));

    if (!isOver) {
      allowedMoves.forEach((c) => {
        const allowedMoveCell = rows[c[0]].childNodes[c[1]];
        allowedMoveCell.style.border = "5px inset yellow";
        allowedMoveCell.classList.add("clickable");
        allowedMoveCell.addEventListener("click", () => {
          _playTurn(c);

          const { current, isOver } = getGameState();

          if (isOver) {
            alert(`${current} is checkmated`);
          }
          renderBoard();
        });
      });
    }

    rootDiv.innerHTML = "";
    rootDiv.appendChild(boardElement);
  };

  renderBoard();
};

export default chess;
