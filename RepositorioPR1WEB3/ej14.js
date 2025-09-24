function tareaConPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; 
      if (exito) {
        resolve("tarea completada");
      } else {
        reject("error");
      }
    }, 1000);
  });
}

function tareaConCallback(callback) {
  tareaConPromesa()
    .then(resultado => callback(null, resultado)) 
    .catch(error => callback(error, null));       
}





tareaConCallback((err, res) => {
  if (err) {
    console.error("error:", err);
  } else {
    console.log("resultado:", res);
  }
});

console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25");
console.log("Solucion al problema 14");

console.log("ejecutando");