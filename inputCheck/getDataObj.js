const duplicationCheck = require("./duplicationCheck");

module.exports.getDataObj = (arr) => {
  let dataObj = {
    algo: "",
    inputFile: "",
    outputFile: "",
  };

  arr.forEach((elem, i) => {
    if (elem === "-c" || elem === "--config") {
      duplicationCheck(dataObj.algo, "сonfig");
      dataObj.algo = arr[i + 1];
    } else if (elem === "-i" || elem === "--input") {
      duplicationCheck(dataObj.inputFile, "input");
      dataObj.inputFile = arr[i + 1];
    } else if (elem === "-o" || elem === "--output") {
      duplicationCheck(dataObj.outputFile, "output");
      dataObj.outputFile = arr[i + 1];
    }
  });

  return dataObj;
};
