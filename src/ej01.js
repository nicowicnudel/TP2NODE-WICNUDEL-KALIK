let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);
function concatInvert (textoEntrada01, textoEntrada02){
let returnValue = '';
let concatenado = textoEntrada01.concat(textoEntrada02)
let array = concatenado.split('')
let reverse = array.reverse()
returnValue = reverse.join('');
return returnValue;
}