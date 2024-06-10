/*
  8. Haz un pequeño código ofuscado en javascript que saque por consola el
   mensaje “¡Hola mundo!” (sin las comillas
   */
(function (s) {
    var a = [33, 72, 111, 108, 97, 32, 109, 117, 110, 100, 111, 33];
    var b = a.map(function (c) { return String.fromCharCode(c); });
    var c = b.join('');
    console.log(c);
})();

///////////////////////////////////////////////////////////////////////////////////////////7
/* 
1. Elaborar una pequeña función en javascript que recibiendo un array con
nombres devuelva otro array con otro array de la misma longitud y cuyos
elementos sean la longitud de cada nombre en el mismo orden. Ejemplo
*/
function longitudCadenasArray(array) {

    item = array.map(el => el.length);
    return console.log(item);

}

longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda']);

///////////////////////////////////////////////////////////////////////////////////////////7
/*
3.  ¿En qué ruta de windows 10 podemos encontrar la resolución de nombre
   de dominios local? ¿Y en windows 11?

   C:\Windows\System32\drivers\etc\hosts

*/
///////////////////////////////////////////////////////////////////////////////////////////7
/*
4. ¿Cúal o cuáles de las siguientes urls provoca una encriptación de datos
punto a punto entre el navegador del cliente y el servidor final?

a) http://google.com/
b) ftp://secure.google.com/
c) https://www.google.es/ -> Esta es la correcta
d) secure://google.com/
e) Ninguna de los anteriores

*/

///////////////////////////////////////////////////////////////////////////////////////////7
/*
5. Dar la fecha y hora exactas un timestamp igual a 1000 en la zona horaria de
Moscú
*/
function getTimestamp(timezone) {
    let date = new Date();
    let date1 = new Date(date.toLocaleString("es-ES", { timeZone: "Europe/Moscow" }));
    let timestamp = Math.floor(date1.getTime() / timezone);

    console.log('Time Moscú, Rusia', date1);
    console.log('timestamp actual en segundos en la zona horaria de Moscú', timestamp);
}
getTimestamp(1000);
///////////////////////////////////////////////////////////////////////////////////////////7

/*
6. El código de estado de una petición http es 418 ¿Cuál es el problema de
esta petición?

a) Este código no es válido
b) El navegador nos indica una redirección a otra url
c) El código es válido pero es imposible que lo devuelva una conexión
a un servidor web
d) Esto no es posible implementarlo en un servidor web
e) Ninguna de las anteriores es válida -> Esta es la correcta //TODO
f) No hay ningún problema es un código válido

*/


///////////////////////////////////////////////////////////////////////////////////////////7

/*
9. Encuentra el password de 2 caracteres cuyo hash md5 sea
49f68a5c8493ec2c0bf489821c21fc3b
*/
// Hash a descrifrar
const hash = "49f68a5c8493ec2c0bf489821c21fc3b";

// Funcion de CryptoJS que servira para calcular el hash MD5
// Esta es posible utilizar debido al cdn de cryptojs
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
function md5Hash(s) {
    return CryptoJS.MD5(s).toString();
}

// Se debe colocar todos caracteres en minuscula esto debido a que la contraseña desencriptada es "hi"
const caracteres = 'abcdefghijklmnopqrstuvwxyz';

// Iterar sobre todas las combinaciones de 2 caracteres.
let password = '';
for (let i = 0; i < caracteres.length; i++) {
    for (let j = 0; j < caracteres.length; j++) {
        let combo = caracteres[i] + caracteres[j]; // Este iterara sobre todas las combinaciones posibles, hasta encontrar "hi"
        // console.log(combo) // Impresion de convinaciones
        if (md5Hash(combo) === hash) { // Se validara cada condicion mediante la funcion antes mecionada md5Hash
            password = combo;
            break; // Rompera el ciclo si es true
        }
    }
    if (password) break; // Si password no esta vacio entonces se rompe el primer for
}

console.log("Password encontrado:", password);

///////////////////////////////////////////////////////////////////////////////////////////7
/*
10. ¿Una misma dirección IP en un mismo día y hora puede proceder de más
de una persona?

La respuesta es si, uno de los ejemplos practicos es que:
Hotspots Públicos: En lugares como cafeterías, aeropuertos, bibliotecas, 
y otros espacios públicos, múltiples usuarios pueden estar conectados al 
mismo punto de acceso a Internet, compartiendo la misma dirección IP pública.

Existen mas ejemplos practicos, sin embargo este es uno de ellos
*/






