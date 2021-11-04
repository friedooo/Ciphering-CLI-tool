module.exports.caesarEncoder = (str) => {
  const arr = str.split("");
  const shift = 1;

  return arr
    .map((elem) => {
      let elemCode = elem.charCodeAt();
      if (elemCode > 64 && elemCode < 91) {
        elemCode += shift;

        if (elemCode === 91) {
          elemCode = 65;
        }
      } else if (elemCode > 96 && elemCode < 123) {
        elemCode += shift;

        if (elemCode === 123) {
          elemCode = 97;
        }
      }
      return String.fromCharCode(elemCode);
    })
    .join("");
};
