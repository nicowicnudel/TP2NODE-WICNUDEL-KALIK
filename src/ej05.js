let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);
function parsearUrl(laURL) {
  let urlObjeto = new URL(laURL);
  return {
      host: urlObjeto.origin,
      pathname: urlObjeto.pathname,
      parametros: Object.fromEntries(urlObjeto.searchParams.entries())
  };
}
console.log(miObjeto);


