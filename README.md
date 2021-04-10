# Exercícios de Node

Neste repositório irei colocar os exercícios do semestre referente a matéria de Técnicas de programação

## Exercícios

---

- 1 - No serviço será configurado em um arquivo script.js para receber três valores: `numA, numB, opcao` . Sendo que `numA` e `numB` são os valores numéricos e `opcao` é a opção de operação aritmética.
  Você terá que realizar o tratamento, apresentando apenas o resultado da operação solicitada pelo usuário (ou seja, não é para mostrar todas as operações aritméticas, apenas a escolhida pelo usuário).
  Para que tenhamos o conceito de encapsulamento, as operações não devem ser escritas diretamente no arquivo script.js. Deste modo, crie um módulo que contenha as 4 operações aritméticas e importe este módulo no arquivo script.js.

### Server

```
const http = require("http");
const url = require("url");
const count = require("./calc");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const { option, first, last } = url.parse(request.url, true).query;

    const value = count.calc(option, first, last);
    const text = `O resultado da ${option} é ${value}`;

    response.end(text);
  })
  .listen(3333);

```

---
