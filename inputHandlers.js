module.exports.getDataObj = (arr) => {
  let dataObj = {
    algo: "",
    inputFile: "",
    outputFile: "",
  };

  arr.forEach((elem, i) => {
    if (elem === "-c" || elem === "--config") {
      dataObj.algo = arr[i + 1];
    } else if (elem === "-i" || elem === "--input") {
      dataObj.inputFile = arr[i + 1];
    } else if (elem === "-o" || elem === "--output") {
      dataObj.outputFile = arr[i + 1];
    }
  });

  return dataObj;
};
