const path = require("path");
const fs = require("fs");
const { stdin, stdout, stderr } = process;

module.exports = function checkPath(path, info) {
  return !fs.existsSync(path)
    ? stderr.write(`некорректно указан путь до ${info} \n`)
    : true;
};
