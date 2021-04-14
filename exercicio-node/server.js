const http = require("http");
const url = require("url");
const count = require("./calc");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const { option, first, last } = url.parse(request.url, true).query;

    const value = count.calc(option, Number(first), Number(last));
    const text = `O resultado da ${option} é ${value}`;

    response.end(text);
  })
  .listen(3333);
