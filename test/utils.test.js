import { describe, it, expect } from "vitest";
import { getAdjacentDiagCoords } from "../lib/utils/pawnFn";

describe("pawnFn", () => {
  describe("getAdjacentDiagCoords", () => {
    it("tests white spot", () => {
      const inputCoords1 = [6, 4];
      const inputColor1 = "w";
      const expectedOutput1 = [
        [5, 3],
        [5, 5],
      ];

      expect(getAdjacentDiagCoords(inputCoords1, inputColor1)).toEqual(
        expectedOutput1
      );
    });

    it("tests black spot", () => {
      const inputCoords2 = [1, 3];
      const inputColor2 = "b";
      const expectedOutput2 = [
        [2, 2],
        [2, 4],
      ];

      expect(getAdjacentDiagCoords(inputCoords2, inputColor2)).toEqual(
        expectedOutput2
      );
    });

    it("tests black left edge spot", () => {
      const inputCoords3 = [1, 0];
      const inputColor3 = "b";
      const expectedOutput3 = [[2, 1]];

      expect(getAdjacentDiagCoords(inputCoords3, inputColor3)).toEqual(
        expectedOutput3
      );
    });

    it("tests white left edge spot", () => {
      const inputCoords3 = [6, 0];
      const inputColor3 = "w";
      const expectedOutput3 = [[5, 1]];

      expect(getAdjacentDiagCoords(inputCoords3, inputColor3)).toEqual(
        expectedOutput3
      );
    });

    it("tests black right edge spot", () => {
      const inputCoords3 = [1, 7];
      const inputColor3 = "b";
      const expectedOutput3 = [[2, 6]];

      expect(getAdjacentDiagCoords(inputCoords3, inputColor3)).toEqual(
        expectedOutput3
      );
    });

    it("tests white right edge spot", () => {
      const inputCoords3 = [6, 7];
      const inputColor3 = "w";
      const expectedOutput3 = [[5, 6]];

      expect(getAdjacentDiagCoords(inputCoords3, inputColor3)).toEqual(
        expectedOutput3
      );
    });
  });

  // describe("", () => {

  // })
});
