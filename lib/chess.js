import { createDiv, getPieceCharacter, isEqual } from "./helpers.js";

const chess = () => {
  const renderBoard = (gameState, rootDiv) => {
    rootDiv.innerHTML = "";
    const { board } = gameState;
    const boardElement = createDiv("board");
    const rows = board.map((r, rIdx) => {
      const rowNode = createDiv("row");
      const cellNodes = r.map((c, cIdx) => {
        const cellElement = createDiv("cell");
        if (!c) return cellElement;
        cellElement.innerHTML = getPieceCharacter(c);

        const isCurrentCellSelected = isEqual(gameState.selected, [rIdx, cIdx]);

        if (isCurrentCellSelected) {
          cellElement.style.backgroundColor = "green";
        }

        const isPieceOfCurrentPlayer = gameState.current === c[0];

        if (isPieceOfCurrentPlayer) {
          cellElement.addEventListener("click", () => {
            console.log("hey");
            gameState.selected = [rIdx, cIdx];
            console.log(gameState);
            renderBoard(gameState, rootDiv);
          });
        }

        return cellElement;
      });
      cellNodes.forEach((n) => rowNode.appendChild(n));
      return rowNode;
    });
    rows.forEach((r) => boardElement.appendChild(r));

    rootDiv.appendChild(boardElement);
  };

  return renderBoard;
};

export default chess;
