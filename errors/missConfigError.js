module.exports = class missConfig extends Error {
  constructor() {
    super();
    this.message = "Config parameter is missing";
    this.name = "Ciss config parameter";
  }
};
