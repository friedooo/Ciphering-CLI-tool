const fs = require("fs");
const { pipeline } = require("stream");
const path = require("path");

const { getDataObj } = require("./inputCheck/getDataObj");
const { createTStreamsArr } = require("./inputCheck/configHandler");
const checkPath = require("./inputCheck/pathCheck");
const selectStreams = require("./selectStreams");
Error.stackTraceLimit = 5;

try {
  //console.log(process.argv);

  let dataObj = getDataObj(process.argv);

  if (dataObj.inputFile !== "") {
    checkPath(dataObj.inputFile);
  }
  if (dataObj.outputFile !== "") {
    checkPath(dataObj.outputFile);
  }

  let [rStream, wStream] = selectStreams(dataObj.inputFile, dataObj.outputFile);

  doPipeline();

  function doPipeline() {
    pipeline(
      rStream,
      ...createTStreamsArr(getDataObj(process.argv).algo),
      wStream,
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
