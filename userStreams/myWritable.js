const { Writable, pipeline, Transform } = require("stream");
const fs = require("fs");
const { stdin, stdout, stderr } = process;
const path = require("path");

class myError extends Error {
  constructor(message, option) {
    Error.stackTraceLimit = 0;
    super(`${message}`);
    this.stackTrace
    
  }
}

class myWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

// const ws = new myWritable(path.resolve("./files/output.txt"));


//   pipeline(stdin, ws, (err) => {
//     console.log(err);
//   });


module.exports = myWritable;
