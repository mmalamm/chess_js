import chess from "./lib/chess.js";
import { createInitState } from "./lib/helpers.js";

const r = chess();

const gameState = createInitState();

const chessDiv = document.getElementById("chess");

r(gameState, chessDiv);
