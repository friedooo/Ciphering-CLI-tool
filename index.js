const { stdin, stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");

//require("./encodersTest");
const { getDataObj } = require("./inputCheck/getDataObj");
const { createTStreamsArr } = require("./inputCheck/configHandler");
const checkArgsLength = require("./inputCheck/lentghCheck");
const checkPath = require("./inputCheck/pathCheck");

checkArgsLength(process.argv);
console.log(getDataObj(process.argv));

let dataObj = getDataObj(process.argv);

if (dataObj.inputFile !== "") {
  checkPath(dataObj.inputFile, "input");
}
if (dataObj.outputFile !== "") {
  checkPath(dataObj.outputFile, "output");
}

let readableStream;
let writeableStream = fs.createWriteStream("./files/output.txt", {
  flags: "a",
});

if (dataObj.inputFile === "") {
  insteadInput();
} else {
  readableStream = fs.createReadStream("./files/input.txt", "utf8");
  doPipeline();
}

function insteadInput() {
  stdout.write("введите текст в терминал \n");
  stdin.on("data", async (data) => {
    fs.open("./temp.txt", "w", (err) => {
      console.log(err);
    });
    await fs.writeFile("./temp.txt", data, "utf-8", (err) => {
      console.log(err);
    });
    readableStream = await fs.createReadStream("./temp.txt", "utf8");
    await readableStream.on("open", () => {
      console.log("stream opens");
    });
    await doPipeline();
  });
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

// console.log(process.stderr.write("что-то пошло не так"));

// node index -c "C1-C1-R0-A" -i "./files/input.txt" -o "./files/output.txt"
