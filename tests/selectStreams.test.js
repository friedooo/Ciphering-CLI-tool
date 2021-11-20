const { stdin, stdout, stderr } = process;
const myWritable = require("../userStreams/myWritable");
const myReadable = require("../userStreams/myReadable");

const selectStreams = require("../selectStreams");

describe("select Streams test", () => {
  let rightArgs = ["./files/input.txt", "./files/output.txt"];

  test("should return custom readable and custom writable streams", () => {
    expect(selectStreams(...rightArgs)[0]).toBeInstanceOf(myReadable);
    expect(selectStreams(...rightArgs)[1]).toBeInstanceOf(myWritable);
  });
});
