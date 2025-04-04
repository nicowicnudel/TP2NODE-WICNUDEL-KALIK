import {getCountryByAbbreviation, getCurrencyAbbreviation} from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais); 

function obtenerMoneda(codigoPais) {
    return getCurrencyAbbreviation(getCountryByAbbreviation (codigoPais)); 
}
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);