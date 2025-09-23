function miFuncion(text) {
  // convertir la entrada a un string
  if (typeof text !== 'string') text = String(text);

 // contador de vocales
  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// convertir los caracteres a minusculas simples
  const normalized = text
    .toLowerCase()
    .normalize('NFD')            // descompone letras acentuadas en base + marcas
    .replace(/[\u0300-\u036f]/g, ''); // elimina los diacríticos combinantes

  // por cada vocal el contador incrementa
  for (const ch of normalized) {
    if (ch === 'a') counts.a++;
    else if (ch === 'e') counts.e++;
    else if (ch === 'i') counts.i++;
    else if (ch === 'o') counts.o++;
    else if (ch === 'u') counts.u++;
  }

  return counts;
}
console.log("Nombre: Orellana Quispe Cristian Andres, CI: 10954812, Carrera: Informatica, Materia: Programacion Web 3, Fecha: 23/9/25")
console.log("Solucion al problema 1")
let obj = miFuncion("euforia");
console.log(obj); 

console.log("Ejemplos Extra:")
console.log(miFuncion("Cristian"));
console.log(miFuncion("Paralelepipedo"));
console.log(miFuncion("Barcelona"));

