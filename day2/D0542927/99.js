const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            if (i * j < 10)
                res.write(' ');
            res.write(i * j + ' ');
            
        }
        res.write("\n");
    }
    res.end("\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
