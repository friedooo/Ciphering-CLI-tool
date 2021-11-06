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

const { RotEncoder } = require("./cipherHandler");
console.log("encoding rot test");
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, 1) ===
    'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, 4) ===
    'Xlmw mw wigvix. Qiwweki efsyx "_" wcqfsp!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, 7) ===
    'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, 8) ===
    'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, 13) ===
    'Guvf vf frperg. Zrffntr nobhg "_" flzoby!'
);

console.log("decoding rot test");

console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, -1) ===
    'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, -4) ===
    'Pdeo eo oaynap. Iaoowca wxkqp "_" ouixkh!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, -7) ===
    'Mabl bl lxvkxm. Fxlltzx tuhnm "_" lrfuhe!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, -8) ===
    'Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!'
);
console.log(
  RotEncoder(`This is secret. Message about "_" symbol!`, -13) ===
    'Guvf vf frperg. Zrffntr nobhg "_" flzoby!'
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
