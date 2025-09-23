
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


let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj); 
console.log(miFuncion([10,21,30,41,50,61,70,81,90,101])); 

