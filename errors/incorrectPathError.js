module.exports = class incorrectPathError extends Error {
  constructor() {
    super();
    this.message = "Wrong file path was written";
    this.name = "incorrect path";
  }
};
