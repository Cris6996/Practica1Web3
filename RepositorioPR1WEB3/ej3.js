
function miFuncion(arr) {
  
  const resultado = {
    pares: [],
    impares: []
  };


  for (let num of arr) {
    if (num % 2 === 0) {
      resultado.pares.push(num);    
    } else {
      resultado.impares.push(num);   
    }
  }


  return resultado;
}

console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 3")
let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj); 

console.log("Ejemplo Extra: ")
console.log(miFuncion([10,21,30,41,50,61,70,81,90,101])); 

