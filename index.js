import chess from "./lib/chess.js";
import { createInitState } from "./lib/helpers.js";

const chessDiv = document.getElementById("chess");

const r = chess(chessDiv);

const gameState = createInitState();

r(gameState);
