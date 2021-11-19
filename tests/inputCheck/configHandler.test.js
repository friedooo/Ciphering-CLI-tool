const { createTStreamsArr } = require("../../inputCheck/configHandler");

describe("create Streams Array test", () => {
  test("should throw wrong algorithm error", () => {
    const wrongStr = "wrongStr";
    try {
      createTStreamsArr(wrongStr);
    } catch (e) {
      expect(e.message).toBe("The encoding algorithm is set incorrectly");
      expect(e).toBeInstanceOf(Error);
    }
  });
});
