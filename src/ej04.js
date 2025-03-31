import fs from "fs";
import { callbackify } from "util";
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino) {
  fs.copyFile(origen, destino, ()=> console.log ("aguante stolar"));

}
