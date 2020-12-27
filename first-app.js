const http = require('http');
const fs = require("fs");


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write(`<html>
                    <head><title>Hello World!</title></head>
                    <body>
                        <form action="/message-sent" method="POST">
                            <input type="text" name="message" />
                            <button type="submit">Submit</button>
                        </form>
                    </body>
                </html`);
        return res.end();
    }
    if (method === "POST" && url === "/message-sent") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

    }
    res.write(`<html>
                    <head><title>Hello World!</title></head>
                    <body>
                        <h1>Hello Everyone! Eman is working on backend development.</h1>
                    </body>
                </html`);
    res.end();
});

server.listen(4200);