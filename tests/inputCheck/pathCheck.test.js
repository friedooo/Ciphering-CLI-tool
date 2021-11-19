const checkPath = require("../../inputCheck/pathCheck");

describe("checking existing path test", () => {
  test("should throw error when path to file is not exist", () => {
    try {
      const wrongPath = "../wrongPath.txt";
      checkPath(wrongPath);
    } catch (e) {
      expect(e.message).toBe("Wrong file path was written");
      expect(e).toBeInstanceOf(Error);
    }
  });
});
