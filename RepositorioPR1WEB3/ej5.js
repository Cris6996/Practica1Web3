function miFuncion(cadena) {
  
  const texto = cadena.toLowerCase().replace(/\s+/g, "");


  const invertida = texto.split("").reverse().join("");

  
  return texto === invertida;
}


let band = miFuncion("oruro");
console.log(band); 

band = miFuncion("hola");
console.log(band); 

console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 5")

console.log("Ejemplo Extra: ")
console.log(miFuncion("neuquen"));
