function miFuncion(cadena) {

  return cadena.split('').reverse().join('');
}   
    // split convierte el string a un array con cada caracter
    // reverse invierte el array
    // join convierte el array a un string


let cad = miFuncion("abcd");
console.log(cad); 

console.log(miFuncion("Cristian"));


