
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var arv = 0;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-headers', 'origin,x-request-with,content-type,accept');
  res.end('Laetud Node serverist \n' + arv + "Kordi");
  arv++;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});