const { stdin, stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");
const path = require("path");

const { getDataObj } = require("./inputCheck/getDataObj");
const { createTStreamsArr } = require("./inputCheck/configHandler");
const checkPath = require("./inputCheck/pathCheck");
const myWritable = require("./userStreams/myWritable");
const myReadable = require("./userStreams/myReadable");
Error.stackTraceLimit = 5;

try {
  console.log(getDataObj(process.argv));

  let dataObj = getDataObj(process.argv);

  if (dataObj.inputFile !== "") {
    checkPath(dataObj.inputFile, "input");
  }
  if (dataObj.outputFile !== "") {
    checkPath(dataObj.outputFile, "output");
  }

  let readableStream;
  let writeableStream;

  if (dataObj.inputFile === "" && dataObj.outputFile !== "") {
    stdout.write("введите текст в терминал \n");
    readableStream = stdin;
    writeableStream = new myWritable(dataObj.outputFile);
    doPipeline();
  } else if (dataObj.outputFile === "" && dataObj.inputFile !== "") {
    readableStream = new myReadable(dataObj.inputFile);
    writeableStream = stdout;
    doPipeline();
  } else if (dataObj.inputFile === "" && dataObj.outputFile === "") {
    stdout.write("введите текст в терминал \n");
    readableStream = stdin;
    writeableStream = stdout;
    doPipeline();
  } else {
    readableStream = new myReadable(dataObj.inputFile);
    readableStream.setEncoding("utf8");
    writeableStream = new myWritable(dataObj.outputFile);
    doPipeline();
  }

  function doPipeline() {
    pipeline(
      readableStream,
      ...createTStreamsArr(getDataObj(process.argv).algo),
      writeableStream,
      (err) => {
        if (err) {
          //stderr.write("pipeline failed \n", err);
        } else {
          //stdout.write("pipeline success \n");
        }
      }
    );
  }
} catch (error) {
  console.log(error.message);
  process.exitCode = 1;
  process.exit();
}

// node index -c "C1-C1-R0-A" -i "./files/input.txt" -o "./files/output.txt"
// node index  -i "./files/input.txt" -o "./files/output.txt" -c "C1-C1-R0-A"
