module.exports = class DuplicationError extends Error {
  constructor() {
    super();
    this.message = "Duplication arguments";
    this.name = "Duplication error";
  }
};
