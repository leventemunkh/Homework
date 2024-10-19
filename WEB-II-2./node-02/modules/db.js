const fileHandler = require("./file-handler");
const path = require("path");

const readAll = async () => {
  const content = await fileHandler.read(
    path.join(__dirname, "../public/users.json")
  );
  return JSON.parse(content);
};

module.exports = {
  readAll,
};
