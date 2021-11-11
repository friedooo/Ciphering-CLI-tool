const { stdin, stdout, stderr } = process;

module.exports = function insteadInput() {
  let algo = "";
  stdout.write("введите текст в терминал \n");
  stdin.on("data", () => {
    console.log(stdin.read());
  });

  return 0;
};
