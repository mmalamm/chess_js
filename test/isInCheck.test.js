import { describe, expect, it } from "vitest";
import { isInCheck } from "../lib/utils/isInCheck.js";
import { whiteIsInCheck } from "./checkFixtures.js";

describe("isInCheck tests", () => {
  it("tests if white is in check", () => {
    const output = isInCheck({
      whosTurn: whiteIsInCheck.whosTurn,
      board: whiteIsInCheck.board,
    });
    expect(output).toBe(true);
  });
});
