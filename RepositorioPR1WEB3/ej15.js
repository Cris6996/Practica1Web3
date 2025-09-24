
function sumarAsync(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback("Los argumentos deben ser números", null);
    } else {
      callback(null, a + b);
    }
  }, 1000);
}

//uso normal
// sumarAsync(3, 5, (err, resultado) => {
//   if (err) console.error(err);
//   else console.log("Resultado con callback:", resultado);
// });

// la convertimos en promesa
function sumarPromesa(a, b) {
  return new Promise((resolve, reject) => {
    sumarAsync(a, b, (err, resultado) => {
      if (err) reject(err);     
      else resolve(resultado);   
    });
  });
}


console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25");
console.log("Solucion al problema 15");


//uso como promesa
sumarPromesa(3, 5)
  .then(resultado => console.log("Resultado con promesa:", resultado))
  .catch(err => console.error(err));
