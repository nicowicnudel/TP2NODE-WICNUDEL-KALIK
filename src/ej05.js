let miUrl    = null;
let miObjeto = null;
miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
  console.log(new URL (laURL))
  URL.host= URL.host;
  URL.pathname =URL.pathname;
  URL.parametros= URLSearchParams
 return host, pathname, parametros;
}

