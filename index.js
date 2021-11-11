const { stdin, stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");

//require("./encodersTest");
const { getDataObj } = require("./inputCheck/getDataObj");
const { createTStreamsArr } = require("./inputCheck/configHandler");
const checkArgsLength = require("./inputCheck/lentghCheck");

const readableStream = fs.createReadStream("./files/input.txt", "utf8");
const writeableStream = fs.createWriteStream("./files/output.txt", {
  flags: "a",
});

console.log(getDataObj(process.argv));

checkArgsLength(process.argv);

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

// console.log(process.stderr.write("что-то пошло не так"));

// node index -c "C1-C1-R0-A" -i "./files/input.txt" -o "./files/output.txt"
