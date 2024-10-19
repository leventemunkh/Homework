const http = require('http');
const path = require('path');
const fs = require('fs');

const Logger = require('./modules/logger');
const loggerService = new Logger();

class Server {

    constructor(port = 3333, staticDir = './static') {
        this.server = http.createServer( (request, response) => {
            // Érkezik egy http kérés
            loggerService.log(`Request: ${request.url} ${request.method} ${ new Date() }`);
            // console.log( request );

            // Beolvassuk az index.html fájl tartalmát
            const filePath = path.join(staticDir, 'index.html');
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    response.statusCode = 404;
                    response.end('File Not Found');
                    return;
                }

                // Visszaküldjük a fájl tartalmát a böngészőnek
                response.end(data);                
            });
            
        });
        
        this.server.listen(port, () => {
            console.log( `Server is running on port: ${port}`);
        });
    }
}

const server1 = new Server();
