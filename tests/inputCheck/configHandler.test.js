const { createTStreamsArr } = require("../../inputCheck/configHandler");
const { Transform } = require("stream");

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

  test("should return array of streams", () => {
    const str = "C1-R0-A";
    try {
      expect(createTStreamsArr(str)).toHaveLength(3);
      expect(createTStreamsArr(str)).toBeInstanceOf(Array);
      createTStreamsArr(str).forEach((elem) => {
        expect(elem).toBeInstanceOf(Transform);
      });
    } catch (e) {
      expect(e.message).toBe("The encoding algorithm is set incorrectly");
      expect(e).toBeInstanceOf(Error);
    }
  });
});
