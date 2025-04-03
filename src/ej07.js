import countryCurrencyMap from 'country-currency-map';

function obtenerMoneda(codigoPais) {
    const pais = countryCurrencyMap[codigoPais];
    return pais?.currency || 'Código inválido';
}

console.log(`La moneda del país AR es: ${obtenerMoneda('AR')}`);
console.log(`La moneda del país UZA es: ${obtenerMoneda('UZA')}`);
