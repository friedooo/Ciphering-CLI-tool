const { stdin, stdout, stderr } = process;

module.exports = function insteadInput() {
  let algo = "";
  stdout.write("введите текст в терминал \n");
  stdin.on("data", (data) => {
    stdout.write(data);
    algo += data;
  });
  process.on("SIGINT", () => {
    return algo;
  });
};
