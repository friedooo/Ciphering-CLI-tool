const { Readable, pipeline } = require("stream");
const fs = require("fs");

class myReadable extends Readable {
  constructor(filename) {
    super();

    this.filename = filename;
    this.fd = null;
  }

  _construct(cb) {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        cb(err);
      } else {
        this.fd = fd;
        cb();
      }
    });
  }

  _read(n) {
    const buf = Buffer.alloc(n);
    fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
      }
    });
  }
}

const rs = new myReadable("../files/input.txt");
rs.setEncoding("utf-8");

rs.on("data", (chunk) => {
  const chunkStringified = chunk.toString();
  console.log(chunkStringified);
});
