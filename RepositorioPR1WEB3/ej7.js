
function tomarResto(arr = []) {
 
  const [ , , ...resto] = arr;
  return resto;
}


let resto;


resto = tomarResto([10, 20, 30, 40, 50]);

console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 7")
console.log("resto:", resto);
