const path = require("path");
const fs = require("fs");
const { stdin, stdout, stderr } = process;
const incorrectPathError = require("../errors/incorrectPathError");

module.exports = function checkPath(path) {
  if (path !== "") {
    if (!fs.existsSync(path)) {
      //stderr.write(`некорректно указан путь до ${info} \n`);
      throw new incorrectPathError();
    }
  }
};
