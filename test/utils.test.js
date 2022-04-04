import { describe, expect, it } from "vitest";
import { getAdjacentDiagCoords } from "../lib/utils/pawnFn";

describe("pawnFn", () => {
  it("gets adjacent diagonal coords (to check for enemy pieces)", () => {
    const inputCoords1 = [];
    const inputColor1 = "w";
    const expectedOutput1 = [];

    expect(getAdjacentDiagCoords(inputCoords1, inputColor1)).toEqual(
      expectedOutput1
    );

    const inputCoords2 = [];
    const inputColor2 = "b";
    const expectedOutput2 = [];

    expect(getAdjacentDiagCoords(inputCoords2, inputColor2)).toEqual(
      expectedOutput2
    );
  });
});
