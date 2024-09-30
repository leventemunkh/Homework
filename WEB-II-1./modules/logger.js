const fs = require("fs");
const fsp = require("fs").promises;

module.exports = class Logger {
  constructor(logFile = "") {
    this.logFile = logFile;
    if (!this.logFile) {
      const now = new Date();
      this.logFile = `./log/${now.getFullYear()}-${
        now.getMonth() + 1
      }-${now.getDate()}.log`;
    }
  }
  async log(message = "") {
    console.log(message);
    await fsp.writeFile(this.logFile, message + "\n", {
      encoding: "utf-8",
      flag: "a",
    });

    /* fs.writeFileSync(this.logFile, message + "\n", {
      encoding: "utf-8",
      flag: "a",
    }); */
  }

  error(message = "") {
    console.error(message);
  }
};
