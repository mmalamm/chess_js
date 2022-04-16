import { describe, expect, it } from "vitest";
import { isInCheck } from "../lib/utils/isInCheck";
import { whiteIsInCheck } from "./checkFixtures";

describe("isInCheck tests", () => {
  it("tests if white is in check", () => {
    const output = isInCheck({
      current: whiteIsInCheck.current,
      board: whiteIsInCheck.board,
    });
    expect(output).toBe(true);
  });
});
