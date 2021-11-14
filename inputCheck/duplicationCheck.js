const path = require("path");
const fs = require("fs");
const { stdin, stdout, stderr } = process;

module.exports = function checkDuplicate(option, argName) {
  if (option !== "") {
    stderr.write(`дублирование аргумента ${argName}`);
    process.exitCode = 1;
    process.exit();
  }
};
