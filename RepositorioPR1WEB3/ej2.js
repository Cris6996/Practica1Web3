function miFuncion(cadena) {

  return cadena.split('').reverse().join('');
}   
    // split convierte el string a un array con cada caracter
    // reverse invierte el array
    // join convierte el array a un string

console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 2")
let cad = miFuncion("abcd");
console.log(cad); 

console.log("Ejemplo Extra: ")
console.log(miFuncion("Cristian"));


