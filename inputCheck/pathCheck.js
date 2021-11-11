const path = require("path");
const fs = require("fs");
const { stdin, stdout, stderr } = process;

module.exports = function checkPath(path, info) {
  if (!fs.existsSync(path)) {
    stderr.write(`некорректно указан путь до ${info} \n`);
    process.exitCode = 1;
    process.exit();
  }
};
