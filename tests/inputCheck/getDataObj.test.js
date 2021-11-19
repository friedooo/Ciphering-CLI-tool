const { getDataObj } = require("../../inputCheck/getDataObj");

describe("getDataObj test", () => {
  test("should throw missing config parametr Error", () => {
    const wrongArr = [
      'node index -c "C1-C1-R0-A" -i "./files/input.txt" -o "./files/output.txt"',
    ];
    try {
      getDataObj(wrongArr);
    } catch (e) {
      expect(e.message).toBe("Config parameter is missing");
      expect(e).toBeInstanceOf(Error);
    }
  });
});
