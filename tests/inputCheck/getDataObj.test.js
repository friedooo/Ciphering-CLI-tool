const { getDataObj } = require("../../inputCheck/getDataObj");

describe("getDataObj test", () => {
  test("should throw missing config parametr Error", () => {
    const wrongArr = [
      "node",
      "index",
      "C1-C1-R0-A",
      "-i",
      "./files/input.txt",
      "-o",
      "./files/output.txt",
    ];
    try {
      getDataObj(wrongArr);
    } catch (e) {
      expect(e.message).toBe("Config parameter is missing");
      expect(e).toBeInstanceOf(Error);
    }
  });

  test("should return array of input objects", () => {
    const arr = [
      "node",
      "index",
      "-c",
      "C1-C1-R0-A",
      "-i",
      "./files/input.txt",
      "-o",
      "./files/output.txt",
    ];
    const expectedObj = {
      algo: "C1-C1-R0-A",
      inputFile: "./files/input.txt",
      outputFile: "./files/output.txt",
    };

    expect(getDataObj(arr)).toEqual(expectedObj);
  });
});
