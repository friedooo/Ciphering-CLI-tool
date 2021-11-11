// const { stdin, stdout, stderr } = process;
// const fs = require("fs");
// const { pipeline } = require("stream");

// //require("./encodersTest");
// const { getDataObj } = require("./inputHandlers");
// const { rotCoder, atbashEncoder } = require("./cipherHandler");

// const rotTransform = require("./transformStreams/rotTransform");
// const atbashTransform = require("./transformStreams/atbashTransform");
// const caesarTransform = require("./transformStreams/caesarTransform");

// let checkPath = require("./inputCheck/pathCheck");
// const readableStream = fs.createReadStream("./files/input.txt", "utf8");
// const writeableStream = fs.createWriteStream("./files/output.txt");

// console.log(getDataObj(process.argv));

// checkPath(getDataObj(process.argv).inputFile, "input");
// checkPath(getDataObj(process.argv).outputFile, "output");

// const algoHandler = (str) => {
//   const algoArr = str.split("-");
//   let executeArr = [];

//   algoArr.forEach((cipher) => {
//     switch (cipher) {
//       case "C1":
//         executeArr.push(new caesarTransform(rotCoder, 1));
//         break;
//       case "C0":
//         executeArr.push(new caesarTransform(rotCoder, -1));
//         break;
//       case "R1":
//         executeArr.push(new rotTransform(rotCoder, 8));
//         break;
//       case "R0":
//         executeArr.push(new rotTransform(rotCoder, -8));
//         break;
//       case "A":
//         executeArr.push(new atbashTransform(atbashEncoder));
//         break;
//       default:
//         console.log(cipher);
//         stderr.write("неправильно задан алгоритм кодирования \n");
//         break;
//     }
//   });
//   return executeArr;
// };

// pipeline(
//   readableStream,
//   ...algoHandler(getDataObj(process.argv).algo),
//   writeableStream,
//   (err) => {
//     if (err) {
//       stderr.write("pipeline failed", err);
//     } else {
//       stdout.write("pipeline success");
//     }
//   }
// );

// // console.log(process.stderr.write("что-то пошло не так"));

// // node index -c "C1-C1-R0-A" -i "./files/input.txt" -o "./files/output.txt"

// // stdout.write("Как тебя зовут?\n");
// // stdin.on("data", (data) => {
// //   stdout.write("Привет, ");
// //   stdout.write(data);
// //   process.exit();
// // });
// // process.on("SIGINT", () => {
// //   console.log("exit");

// //   process.exit();
// // });

let json = `{ "name": "John", "age": 30 }`;
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// Применение
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

// Рабочий пример с try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
    console.log(err.name); // PropertyRequiredError
    console.log(err.property); // name
  } else if (err instanceof SyntaxError) {
    console.log("Ошибка синтаксиса JSON: " + err.message);
  } else {
    throw err; // неизвестная ошибка, повторно выбросит исключение
  }
}
