const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
                <head><title>Hello World!</title></head>
                <body>
                    <h1>Hello Everyone! Eman is working on backend development.</h1>
                </body>
                </html`);
    res.end();
});

server.listen(4200);