module.exports = {
  calc(operation, first, last) {
    if (operation === "soma") {
      return first + last;
    } else if (operation === "subtracao") {
      return first - last;
    } else if (operation === "multiplicacao") {
      return first * last;
    } else if (operation === "divisao") {
      return first / last;
    } else {
      return "Operação invalida";
    }
  },
};
