const { stdin, stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");

//require("./encodersTest");
const { getDataObj } = require("./inputCheck/getDataObj");
const { createTStreamsArr } = require("./inputCheck/configHandler");
const checkPath = require("./inputCheck/pathCheck");
const checkArgsLength = require("./inputCheck/lentghCheck");

const readableStream = fs.createReadStream("./files/input.txt", "utf8");
const writeableStream = fs.createWriteStream("./files/output.txt", {
  flags: "a",
});

console.log(getDataObj(process.argv));

checkArgsLength(process.argv);
checkPath(getDataObj(process.argv).inputFile, "input");
checkPath(getDataObj(process.argv).outputFile, "output");

pipeline(
  readableStream,
  ...createTStreamsArr(getDataObj(process.argv).algo),
  writeableStream,
  (err) => {
    if (err) {
      stderr.write("pipeline failed", err);
    } else {
      stdout.write("pipeline success");
    }
  }
);

// console.log(process.stderr.write("что-то пошло не так"));

// node index -c "C1-C1-R0-A" -i "./files/input.txt" -o "./files/output.txt"

// stdout.write("Как тебя зовут?\n");
// stdin.on("data", (data) => {
//   stdout.write("Привет, ");
//   stdout.write(data);
//   process.exit();
// });
// process.on("SIGINT", () => {
//   console.log("exit");

//   process.exit();
// });
