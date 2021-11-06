// const { stdin, stdout, stderr } = process;

// let args = process.argv;

// const checkArgsLength = (arr) => {
//   if (arr.length === 8) {
//     console.log("количество аргументов сходится");
//   }
// };

// const getDataObj = (arr) => {
//   let dataObj = {
//     algo: "",
//     inputFile: "",
//     outputFile: "",
//   };

//   arr.forEach((elem, i) => {
//     if (elem === "-c" || elem === "--config") {
//       dataObj.algo = arr[i + 1];
//     } else if (elem === "-i" || elem === "--input") {
//       dataObj.inputFile = arr[i + 1];
//     } else if (elem === "-o" || elem === "--output") {
//       dataObj.outputFile = arr[i + 1];
//     }
//   });

//   return dataObj;
// };

// checkArgsLength(args);
// console.log(getDataObj(args));

const { rotEncoder, atbashEncoder } = require("./cipherHandler");

console.log("encoding rot test");
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, 1) ===
    'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, 4) ===
    'Xlmw mw wigvix. Qiwweki efsyx "_" wcqfsp!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, 7) ===
    'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, 8) ===
    'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, 13) ===
    'Guvf vf frperg. Zrffntr nobhg "_" flzoby!'
);

console.log("decoding rot test");

console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, -1) ===
    'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, -4) ===
    'Pdeo eo oaynap. Iaoowca wxkqp "_" ouixkh!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, -7) ===
    'Mabl bl lxvkxm. Fxlltzx tuhnm "_" lrfuhe!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, -8) ===
    'Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!'
);
console.log(
  rotEncoder(`This is secret. Message about "_" symbol!`, -13) ===
    'Guvf vf frperg. Zrffntr nobhg "_" flzoby!'
);

console.log("Atbash test");

console.log(
  atbashEncoder(`This is secret. Message about "_" symbol!`) ===
    `Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!`
);
console.log(
  atbashEncoder(`is a monoalphabetic substitution cipher `) ===
    `rh z nlmlzokszyvgrx hfyhgrgfgrlm xrksvi `
);
console.log(
  atbashEncoder(`Articles that describe this calculator`) ===
    `Zigrxovh gszg wvhxiryv gsrh xzoxfozgli`
);
console.log(
  atbashEncoder(`by setting both "a" and "b" to 25. я уеду жить в Лондон`) ===
    `yb hvggrmt ylgs "z" zmw "y" gl 25. я уеду жить в Лондон`
);

// console.log(process.stderr.write("что-то пошло не так"));

// node index -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

// stdout.write("Как тебя зовут?\n");
// stdin.on("data", (data) => {
//   stdout.write("Привет, ");
//   stdout.write(data);
//   process.exit();
// });
// process.on("exit", () => stdout.write("Удачи!"));
