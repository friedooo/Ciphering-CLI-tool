const path = require("path");
const fs = require("fs");

module.exports.checkPath = (path) => {
  return fs.existsSync(path);
};
