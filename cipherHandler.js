module.exports.RotEncoder = (str, shift = 0) => {
  const arr = str.split("");
  const lettersAmount = 26;
  const realShift = Math.abs(shift % lettersAmount);
  const lowercaseBorder = [65, 90];
  const uppercaseBorder = [97, 122];

  if (shift > -1) {
    return arr
      .map((elem) => {
        let elemCode = elem.charCodeAt();
        if (
          elemCode > lowercaseBorder[0] - 1 &&
          elemCode < lowercaseBorder[1] + 1
        ) {
          elemCode += realShift;

          if (elemCode > lowercaseBorder[1]) {
            elemCode = elemCode - lettersAmount;
          }
        } else if (
          elemCode > uppercaseBorder[0] - 1 &&
          elemCode < uppercaseBorder[1] + 1
        ) {
          elemCode += realShift;

          if (elemCode > uppercaseBorder[1]) {
            elemCode = elemCode - lettersAmount;
          }
        }
        return String.fromCharCode(elemCode);
      })
      .join("");
  }

  if (shift < 0) {
    return arr
      .map((elem) => {
        let elemCode = elem.charCodeAt();
        if (
          elemCode > lowercaseBorder[0] - 1 &&
          elemCode < lowercaseBorder[1] + 1
        ) {
          elemCode -= realShift;

          if (elemCode < lowercaseBorder[0]) {
            elemCode = elemCode + lettersAmount;
          }
        } else if (
          elemCode > uppercaseBorder[0] - 1 &&
          elemCode < uppercaseBorder[1] + 1
        ) {
          elemCode -= realShift;

          if (elemCode < uppercaseBorder[0]) {
            elemCode = elemCode + lettersAmount;
          }
        }
        return String.fromCharCode(elemCode);
      })
      .join("");
  }
};
