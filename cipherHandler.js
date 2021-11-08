module.exports.rotCoder = (str, shift = 0) => {
  const arr = str.split("");
  const lettersAmount = 26;
  const realShift = Math.abs(shift % lettersAmount);
  const upperCaseBorder = [65, 90];
  const lowerCaseBorder = [97, 122];

  if (shift > -1) {
    return arr
      .map((elem) => {
        let elemCode = elem.charCodeAt();
        if (
          elemCode > upperCaseBorder[0] - 1 &&
          elemCode < upperCaseBorder[1] + 1
        ) {
          elemCode += realShift;

          if (elemCode > upperCaseBorder[1]) {
            elemCode = elemCode - lettersAmount;
          }
        } else if (
          elemCode > lowerCaseBorder[0] - 1 &&
          elemCode < lowerCaseBorder[1] + 1
        ) {
          elemCode += realShift;

          if (elemCode > lowerCaseBorder[1]) {
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
          elemCode > upperCaseBorder[0] - 1 &&
          elemCode < upperCaseBorder[1] + 1
        ) {
          elemCode -= realShift;

          if (elemCode < upperCaseBorder[0]) {
            elemCode = elemCode + lettersAmount;
          }
        } else if (
          elemCode > lowerCaseBorder[0] - 1 &&
          elemCode < lowerCaseBorder[1] + 1
        ) {
          elemCode -= realShift;

          if (elemCode < lowerCaseBorder[0]) {
            elemCode = elemCode + lettersAmount;
          }
        }
        return String.fromCharCode(elemCode);
      })
      .join("");
  }
};

module.exports.atbashEncoder = (str) => {
  const arr = str.split("");
  const lettersAmount = 26;
  const upperCaseBorder = [65, 90];
  const lowerCaseBorder = [97, 122];

  return arr
    .map((elem) => {
      let elemCode = elem.charCodeAt();

      if (
        elemCode > upperCaseBorder[0] - 1 &&
        elemCode < upperCaseBorder[1] + 1
      ) {
        let dif = Math.abs(
          Math.abs(elemCode - upperCaseBorder[0]) * 2 - lettersAmount + 1
        );

        if (elemCode - upperCaseBorder[0] < upperCaseBorder[1] - elemCode) {
          elemCode += dif;
        } else {
          elemCode -= dif;
        }
      } else if (
        elemCode > lowerCaseBorder[0] - 1 &&
        elemCode < lowerCaseBorder[1] + 1
      ) {
        let dif = Math.abs(
          Math.abs(elemCode - lowerCaseBorder[0]) * 2 - lettersAmount + 1
        );

        if (elemCode - lowerCaseBorder[0] < lowerCaseBorder[1] - elemCode) {
          elemCode += dif;
        } else {
          elemCode -= dif;
        }
      }

      return String.fromCharCode(elemCode);
    })
    .join("");
};
