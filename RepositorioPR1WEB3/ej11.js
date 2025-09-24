
function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 1 completada");
      resolve(1);
    }, 1000);
  });
}

function tarea2(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 2 completada");
      resolve(valor + 2);
    }, 1000);
  });
}

function tarea3(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 3 completada");
      resolve(valor * 3);
    }, 1000);
  });
}


console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25");
console.log("Solucion al problema 11");

tarea1()
  .then(resultado1 => tarea2(resultado1))   
  .then(resultado2 => tarea3(resultado2))   
  .then(resultadoFinal => {
    console.log("Resultado final:", resultadoFinal); 
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });