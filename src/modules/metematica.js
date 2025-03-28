/* Este es el módulo "matematicas" */
const PI = 3.14;
let array = ["dos", "cuatro", "ocho", "diez"];
function sumar(x, y) {
  return x + y;
}
const multiplicar = (a, b) => a * b;
function restar(x, y) {
  return x - y;
}
const dividir = (a, b) => a / b;
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export { PI, sumar, multiplicar, dividir, restar, array };
