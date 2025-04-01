let miUrlValida = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miUrlInvalida = 'http//malformada-url';

function parsearUrl(laURL) {
    try {
        let urlObjeto = new URL(laURL);

        return {
            host: urlObjeto.origin,  
            pathname: urlObjeto.pathname,  
            parametros: Object.fromEntries(urlObjeto.searchParams.entries()) 
        };
    } catch (error) {
        console.error("Error al analizar la URL:", error.message);

        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}

console.log(parsearUrl(miUrlValida));
console.log(parsearUrl(miUrlInvalida));
