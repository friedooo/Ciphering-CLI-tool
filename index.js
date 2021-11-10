const { stdin, stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");

//require("./encodersTest");
const { getDataObj } = require("./inputHandlers");
const { rotCoder, atbashEncoder } = require("./cipherHandler");
const rotTransform = require("./transformStreams/rotTransform");
const atbashTransform = require("./transformStreams/atbashTransform");

const readableStream = fs.createReadStream("./files/input.txt", "utf8");
const writeableStream = fs.createWriteStream("./files/output.txt");
const transformStream = new rotTransform(rotCoder, 1);
let arr = [
  new rotTransform(rotCoder, 1),
  new rotTransform(rotCoder, 1),
  new rotTransform(rotCoder, -8),
  new atbashTransform(atbashEncoder),
];

let args = process.argv;

console.log(getDataObj(args));

const algoHandler = (str) => {
  const algoArr = str.split("-");
  let executeArr = [];

  algoArr.forEach((cipher) => {
    switch (cipher) {
      case "C1":
        executeArr.push(new rotTransform(rotCoder, 1));
        break;
      case "C0":
        executeArr.push(new rotTransform(rotCoder, -1));
        break;
      case "R1":
        executeArr.push(new rotTransform(rotCoder, 8));
        break;
      case "R0":
        executeArr.push(new rotTransform(rotCoder, -8));
        break;
      case "A":
        executeArr.push(new atbashTransform(atbashEncoder));
        break;
      default:
        console.log(cipher);
        stderr.write("неправильно задан алгоритм кодирования \n");
        break;
    }
  });
  return executeArr;
};

pipeline(
  readableStream,
  ...algoHandler(getDataObj(args).algo),
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

// node index -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

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
