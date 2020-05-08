import { getMaxLabelDimensions } from "./maxLabelDimensions";

fdescribe("[FUNCTION] getMaxLabelDimensions", () => {
  describe("", () => {
    it("should return greater width and height for text in bigger font-size", () => {
      expect(
        getMaxLabelDimensions(["aaa"], 0, "16px Arial").height
      ).toBeGreaterThan(getMaxLabelDimensions(["aaa"], 0, "12px Arial").height);
      expect(
        getMaxLabelDimensions(["aaa"], 0, "16px Arial").width
      ).toBeGreaterThan(getMaxLabelDimensions(["aaa"], 0, "12px Arial").width);
    });
    it('text width should be equal to summary width of it"s characters', () => {
      expect(getMaxLabelDimensions(["aaa"], 0, "16px Arial").width).toEqual(
        getMaxLabelDimensions(["a"], 0, "16px Arial").width * 3
      );
    });
    it("if monospace it should return same value for text of the same length", () => {
      expect(getMaxLabelDimensions(["iii"], 0, "16px Courier").width).toEqual(
        getMaxLabelDimensions(["wWw"], 0, "16px Courier").width
      );
    });
    it("should return greater width and height for longer text on the same angle", () => {
      expect(getMaxLabelDimensions(["www"], 45).height).toBeGreaterThan(
        getMaxLabelDimensions(["iii"], 45).height
      );
      expect(getMaxLabelDimensions(["www"], 45).width).toBeGreaterThan(
        getMaxLabelDimensions(["iii"], 45).width
      );
    });
    it("", () => {});
  });

  describe("examples", () => {
    it('if arguments are ["01.01", "salalalla", "03.01"], 45, "16px Arial" it should return {width: 54, height: 54}', () => {
      expect(
        getMaxLabelDimensions(["01.01", "salalalla", "03.01"], 45, "16px Arial")
      ).toEqual({ width: 54, height: 54 });
    });
    it('if arguments are ["morning", "night", "afternoon"], 67, "10px sans-serif" it should return {width: 28, height: 44}', () => {
      expect(
        getMaxLabelDimensions(
          ["morning", "night", "afternoon"],
          67,
          "10px sans-serif"
        )
      ).toEqual({ width: 28, height: 44 });
    });
    it('if arguments are ["morning", "night", "afternoon"], 0 it should return {width: 68, height: 18}', () => {
      expect(
        getMaxLabelDimensions(["morning", "night", "afternoon"], 0)
      ).toEqual({ width: 68, height: 18 });
    });
  });
});
