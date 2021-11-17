const path = require("path");
const fs = require("fs");
const { stdin, stdout, stderr } = process;
const DuplicationError = require("../errors/duplicationError");

module.exports = function checkDuplicate(option, argName) {
  if (option !== "") {
    //stderr.write(`дублирование аргумента ${argName}`);
    throw new DuplicationError("Duplication arguments error");
  }
};
