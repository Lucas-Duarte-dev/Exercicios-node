const paridade = require("./paridade");
const matematica = require("./matematica");
const carro = require("./carro");

const som = matematica.soma(2, 5);

console.log(som);

paridade.par(som);

const Carro = new carro("Toyota", 2019, "Yaris");

Carro.verificaAno();
