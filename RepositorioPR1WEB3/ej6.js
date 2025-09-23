
function tomarDos(arr = []) {
  const [primero = null, segundo = null] = arr;
  return [primero, segundo]; 
}

let a, b;

[a, b] = tomarDos([10, 20, 30, 40]);
console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 6")
console.log([a, b]); 

