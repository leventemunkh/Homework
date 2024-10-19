const fileHandler = require("./modules/file-handler");
const db = require("./modules/db");

(async () => {
  try {
    const users = await db.readAll();
    console.log(users);
  } catch (e) {
    console.error("Error reading users from the database:", e);
  }
})();

console.log("before read");

(async () => {
  try {
    const content = await fileHandler.read("./public/index.html");
    console.log(content);

    await fileHandler.write(
      "./public/users.json",
      JSON.stringify([
        {
          id: 1,
          name: "Phil Collins",
          email: "phil@gmail.com",
          job: "musician",
        },
      ])
    );

    console.log("File written successfully");
  } catch (e) {
    console.error("Error during file handling:", e);
  }
})();

console.log("after read");
