const fsp = require("fs").promises;
const fs = require("fs");

const write = async (filePath = "", content = "") => {
  await fsp.writeFile(filePath, content, "utf-8");
};

const read = async (filePath = "") => {
  return await fsp.readFile(filePath, "utf-8");

  /* return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return reject({
          message: "File read error: ",
          path: filePath,
          err,
        });
      }

      resolve(data);
    });
  }); */

  /* fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return console.log("File read error: ", filePath, err);
    }

    console.log(data);
  }); */
};

module.exports = {
  read,
  write,
};
