
function promesaExito() {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve("Exito! 3 segundos despues"); 
    }, 3000);
  });
}


promesaExito().then(mensaje => {
  console.log(mensaje); 
});
console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25");
console.log("Solucion al problema 9");
console.log("esto se imprime inmediatamente antes de que la promesa se resuelva.");
