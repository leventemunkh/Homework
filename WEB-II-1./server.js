const http = require("http");
const path = require("path");
const fs = require("fs");

class Server {
  constructor(port = 3333, staticDir = "static") {
    this.server = http.createServer((request, response) => {
      // Process an incoming HTTP request
      const filePath = path.join(staticDir, "index.html");

      // Check if the file exists and send its content
      fs.readFile(filePath, "utf-8", (err, content) => {
        if (err) {
          // Send a 404 response if the file is not found
          response.writeHead(404, { "Content-Type": "text/plain" });
          response.end("404 Not Found");
        } else {
          // Send the HTML content if the file is found
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(content);
        }
      });
    });

    // Start the server and listen on the specified port
    this.server.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  }
}

// Create three servers on different ports
const server1 = new Server();
const server2 = new Server(3334);
const server3 = new Server(3335);
