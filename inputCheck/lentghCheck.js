const { stdin, stdout, stderr } = process;

module.exports = checkArgsLength = (args) => {
  if (args.length > 5 && args.length < 9) {
  } else {
    stderr.write("неверное количество аргументов");
    process.exitCode = 1;
    process.exit();
  }
};
