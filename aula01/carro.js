module.exports = function (marca, ano, modelo) {
  this.marca = marca;
  this.ano = ano;
  this.modelo = modelo;

  this.verificaAno = () => {
    if (this.ano > 2000) {
      console.log({ marca });
    } else {
      console.log({ modelo });
    }
  };
};
