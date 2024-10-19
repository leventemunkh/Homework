const http = require('http');
const path = require('path');
const fs = require('fs');

class Server {

    constructor(port = 3333, staticDir = './static') {
        this.server = http.createServer( (request, respons) => {
            // Érkezik egy http kérés

            // Beolvassuk az index.html fájl tartalmát
            const filePath = path.join(staticDir, 'index.html');
            const content = fs.readFileSync(filePath, 'utf-8');

            // Visszaküldjük a fájl tartalmát a böngészőnek
            respons.end(content);
        });

        this.server.listen(port, () => {
            console.log( `Server is running on port: ${port}`);
        });
    }
}

const server1 = new Server();
const server2 = new Server(3334);
const server3 = new Server(3335);