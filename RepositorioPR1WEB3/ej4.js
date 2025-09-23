function miFuncion(arr) {

  if (arr.length === 0) {
    return { mayor: null, menor: null };
  }

  
  let mayor = arr[0];
  let menor = arr[0];

  
  for (let num of arr) {
    if (num > mayor) {
      mayor = num;
    }
    if (num < menor) {
      menor = num;
    }
  }


  return { mayor: mayor, menor: menor };
}


let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj); 
