module.exports = class wrongAlgoError extends Error {
  constructor() {
    super();
    this.message = "The encoding algorithm is set incorrectly";
    this.name = "Wrong algorithm";
  }
};
