const { stdin, stdout, stderr } = process;

const myWritable = require("./userStreams/myWritable");
const myReadable = require("./userStreams/myReadable");

module.exports = function selectStreams(inputFile, outputFile) {
  let readableStream;
  let writeableStream;

  if (inputFile === "" && outputFile !== "") {
    stdout.write("введите текст в терминал \n");
    readableStream = stdin;
    writeableStream = new myWritable(outputFile);
  } else if (outputFile === "" && inputFile !== "") {
    readableStream = new myReadable(inputFile);
    writeableStream = stdout;
  } else if (inputFile === "" && outputFile === "") {
    stdout.write("введите текст в терминал \n");
    readableStream = stdin;
    writeableStream = stdout;
  } else {
    readableStream = new myReadable(inputFile);
    readableStream.setEncoding("utf8");
    writeableStream = new myWritable(outputFile);
  }

  return [readableStream, writeableStream];
};
