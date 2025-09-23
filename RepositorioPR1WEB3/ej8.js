
function ejecutarDespues2Segundos(callback) {
  
  setTimeout(() => {
    callback(); 
  }, 2000);
}

function saludo() {
  console.log("hola, dos segundos depues de ejecutar");
}


console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 8")
console.log("Antes de ejecutar el callback...");
ejecutarDespues2Segundos(saludo);

