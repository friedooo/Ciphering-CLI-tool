const { Writable, pipeline, Transform } = require("stream");
const fs = require("fs");
const { stdin, stdout, stderr } = process;

class myWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    fs.open(this.filename, "a", (err, fd) => {
      if (err) {
        // callback(err);
      } else {
        console.log(fd);
        this.fd = fd;
        // callback();
      }
    });
  }

  // _construct(callback) {
  //   fs.open(this.filename, "a", (err, fd) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       console.log(fd);
  //       this.fd = fd;
  //       callback();
  //     }
  //   });
  // }

  _write(chunk, enc, cb) {
    fs.write(this.fd, chunk, cb);
  }
}

// const ws = new myWritable("./files/output.txt");

// pipeline(stdin, ws, (err) => {
//   console.log(err);
// });

module.exports = myWritable;
