
function tarea1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Tarea 1 completada");
      resolve(1);
    }, 1000);
  });
}

function tarea2(valor) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Tarea 2 completada");
      resolve(valor + 2);
    }, 1000);
  });
}

function tarea3(valor) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Tarea 3 completada");
      resolve(valor * 3);
    }, 1000);
  });
}


// function tarea1(callback) {
//   setTimeout(() => {
//     console.log("Tarea 1 completada");
//     callback(1); // pasamos el resultado al siguiente callback
//   }, 1000);
// }

// function tarea2(valor, callback) {
//   setTimeout(() => {
//     console.log("Tarea 2 completada");
//     callback(valor + 2);
//   }, 1000);
// }

// function tarea3(valor, callback) {
//   setTimeout(() => {
//     console.log("Tarea 3 completada");
//     callback(valor * 3);
//   }, 1000);
// }

// tarea1(res1 => {
//   tarea2(res1, res2 => {
//     tarea3(res2, res3 => {
//       console.log("Resultado final:", res3); // 9
//     });
//   });
// });



async function ejecutarTareas() {
  try {
    const res1 = await tarea1();
    const res2 = await tarea2(res1);
    const res3 = await tarea3(res2);
    console.log("Resultado final:", res3); // 9
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}


console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25");
console.log("Solucion al problema 12");

ejecutarTareas();
