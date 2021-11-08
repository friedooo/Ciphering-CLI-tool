const { stdin, stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");

require("./encodersTest");
const { rotCoder } = require("./cipherHandler");
const rotTransform = require("./transformStreams/rotTransform");

const readableStream = fs.createReadStream("./files/input.txt", "utf8");
const writeableStream = fs.createWriteStream("./files/output.txt");
const transformStream = new rotTransform(rotCoder, 1);

pipeline(readableStream, transformStream, writeableStream, (err) => {
  if (err) {
    process.stderr.write("pipeline failed", err);
  } else {
    process.stdout.write("pipeline success");
  }
});

// let args = process.argv;

// const checkArgsLength = (arr) => {
//   if (arr.length === 8) {
//     console.log("количество аргументов сходится");
//   }
// };

// const getDataObj = (arr) => {
//   let dataObj = {
//     algo: "",
//     inputFile: "",
//     outputFile: "",
//   };

//   arr.forEach((elem, i) => {
//     if (elem === "-c" || elem === "--config") {
//       dataObj.algo = arr[i + 1];
//     } else if (elem === "-i" || elem === "--input") {
//       dataObj.inputFile = arr[i + 1];
//     } else if (elem === "-o" || elem === "--output") {
//       dataObj.outputFile = arr[i + 1];
//     }
//   });

//   return dataObj;
// };

// checkArgsLength(args);
// console.log(getDataObj(args));

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
