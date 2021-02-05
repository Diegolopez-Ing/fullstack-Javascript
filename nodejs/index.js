const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hola Diego en el server http');
});

server.listen(5000);