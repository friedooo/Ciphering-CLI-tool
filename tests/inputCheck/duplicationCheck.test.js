const { getDataObj } = require("../../inputCheck/getDataObj");

describe("duplication check tests", () => {
  test("should throw error when parameters is duplicated", () => {
    const arr = ["-c", "test", "--config", "test2"];

    try {
      getDataObj(arr);
    } catch (e) {
      expect(e.message).toBe("Duplication arguments");
      expect(e).toBeInstanceOf(Error);
    }
  });
});
