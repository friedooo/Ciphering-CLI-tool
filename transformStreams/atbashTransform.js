const { Transform } = require("stream");

module.exports = class atbashTransform extends Transform {
  constructor(func) {
    super();
    this.func = func;
  }
  _transform(data, encoding, callback) {
    this.push(this.func(data.toString()));
    callback();
  }
};
