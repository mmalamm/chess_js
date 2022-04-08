import {
  createDiv,
  getPieceCharacter,
  isEqual,
  getAllowedMovesList,
  getSelectedPiece,
  dd,
} from "./helpers.js";

const chess = () => {
  const renderBoard = (gameState, rootDiv) => {
    const { board, selected } = gameState;
    const allowedMoves = getAllowedMovesList(gameState);
    console.log({ allowedMoves });

    const boardElement = createDiv("board");
    const rows = board.map((r, rIdx) => {
      const rowNode = createDiv("row");
      const cellNodes = r.map((c, cIdx) => {
        const cellElement = createDiv("cell");
        const label = createDiv("labelNum");
        label.innerHTML = `[${rIdx},${cIdx}]`;
        cellElement.appendChild(label);
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
            gameState.selected = [rIdx, cIdx];
            renderBoard(gameState, rootDiv);
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
        console.log(
          `you are trying to move your ${
            getSelectedPiece(gameState).pieceName
          } to ${c}`
        );

        const newBoard = dd(board);
        const selectedCellPiece = newBoard[selected[0]][selected[1]];
        newBoard[selected[0]][selected[1]] = null;
        newBoard[c[0]][c[1]] = selectedCellPiece;

        gameState.board = newBoard;
        gameState.current = gameState.current === "w" ? "b" : "w";
        gameState.selected = null;

        renderBoard(gameState, rootDiv);
      });
    });

    rootDiv.innerHTML = "";
    rootDiv.appendChild(boardElement);
  };

  return renderBoard;
};

export default chess;
