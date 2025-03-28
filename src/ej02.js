
import {PI, sumar, multiplicar, dividir, restar, array} from './modules/metematica.js';
let totalS, totalM, totalR, totalD, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
totalS = sumar(numero1, numero2); 
totalM = multiplicar(numero1, numero2); 
totalR = restar(numero1, numero2); 
totalD = dividir(numero1, numero2); 
console.log(`sumar(${numero1}, ${numero2}) = ${totalS}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${totalM}`);
console.log(`restar(${numero1}, ${numero2}) = ${totalR}`);
console.log(`dividir(${numero1}, ${numero2}) = ${totalD}`);
array.forEach(element => {
    console.log(element);
});