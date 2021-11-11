const path = require("path");
const fs = require("fs");
const { stdin, stdout, stderr } = process;

const rotTransform = require("../transformStreams/rotTransform");
const atbashTransform = require("../transformStreams/atbashTransform");
const caesarTransform = require("../transformStreams/caesarTransform");
const { rotCoder, atbashEncoder } = require("../cipherHandler");

module.exports = function createTStreamsArr(str) {
  const algoArr = str.split("-");
  let executeArr = [];

  algoArr.forEach((cipher) => {
    switch (cipher) {
      case "C1":
        executeArr.push(new caesarTransform(rotCoder, 1));
        break;
      case "C0":
        executeArr.push(new caesarTransform(rotCoder, -1));
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

  process.exitCode = 1;
  process.exit();
};
