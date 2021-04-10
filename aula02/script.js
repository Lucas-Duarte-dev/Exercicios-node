const http = require("http");

const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let q = url.parse(req.url, true).query;
    let text = "Olá" + q.nome;
    res.end(text);
  })
  .listen(3333);
