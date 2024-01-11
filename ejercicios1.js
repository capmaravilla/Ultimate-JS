// * EJERCICIO 1
// function cualEsMayor(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let mayor = cualEsMayor(10, 15);
// function cualEsMayor2(a, b) {
//   return (a > b) ? a : b;
// }
// let mayor2 = cualEsMayor2(10, 5);
// console.log(mayor2);

// * EJERCICIO 2

// let todosAnchos = [1280, 1920, 2560, 3840, 7680];
// let todosAltos = [720, 1080, 1440, 2160, 4320];

// function nombreResolucion(ancho, alto) {
//   for (let i = 0; i < todosAnchos.length; i++) {
//     if (ancho >= todosAnchos[i] && alto >= todosAltos[i]) {
//     } else if (ancho < todosAnchos[i] || alto < todosAltos[i]) {
//       i = i - 1;
//       if (i == 0) {
//         return 'HD';
//       } else if (i == 1) {
//         return 'FHD';
//       } else if (i == 2) {
//         return 'WQHD';
//       } else if (i == 3) {
//         return '4K';
//       } else if (i == 4) {
//         return '8K';
//       } else {
//         return false;
//       }
//     }
//   }
// }

// let nombre = nombreResolucion(2560, 1600);
// console.log(nombre);

// function nombreResolucion2(ancho, alto) {
//   if (ancho >= 7680 && alto >= 4320) {
//     return '8K';
//   } else if (ancho >= 3840 && alto >= 2160) {
//     return '4K';
//   } else if (ancho >= 2560 && alto >= 1440) {
//     return 'WQHD';
//   } else if (ancho >= 1920 && alto >= 1080) {
//     return 'FHD';
//   } else if (ancho >= 1280 && alto >= 720) {
//     return 'HD';
//   } else {
//     return false;
//   }
// }

// let nombre2 = nombreResolucion2(3840, 2160);
// console.log(nombre2);

// * EJERCICIO 3

// function getbyIdx(arr, idx) {
//   if (idx < arr.length && idx >= 0) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= 0 && i == arr.length - 1) {
//         return arr[idx];
//       } else if (arr[i] >= 0 && i < arr.length) {
//         continue;
//       } else {
//         return 'numero incorrecto en el array';
//       }
//     }
//   } else {
//     return 'indice no valido';
//   }
// }

// let resultado = getbyIdx([1, 2, 3, 4, 5, 6], -1);
// console.log(resultado);

// function getbyIdx(array, indice) {
//   if (indice >= array.length || indice < 0) {
//     return 'numero erroneo';
//   }
//   return array[indice];
// }

// let resultado = getbyIdx([1, 2], 3);
// console.log(resultado);

// * EJERCICIO 4

// function imparNum(num) {
//   for (let i = 0; i < num; i++) {
//     if (i % 2 != 0) {
//       console.log('impar', i);
//     }
//   }
// }

// imparNum(10);

// let i = 0;
// while (i <= 10) {
//   if (i % 2 != 0) {
//     console.log('impar', i);
//   }
//   i++;
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log('impar', i);
//   }
// }

// * EJERCICIO 5

// let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor(arr) {
//   let resultado;
//   let numeroMenor = arr[0];
//   let numeroMayor = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (numeroMenor > arr[i]) {
//       numeroMenor = arr[i];
//     }
//   }
//   for (let i = 1; i < arr.length; i++) {
//     if (numeroMayor < arr[i]) {
//       numeroMayor = arr[i];
//     }
//   }
//   resultado = [numeroMenor, numeroMayor];
//   return resultado;
// }

// let numeros = getMenorMayor(array);
// console.log(numeros);

// function getMenorMayor(arr) {
//   let resultado;
//   let numeroMenor = arr[0];
//   let numeroMayor = arr[0];
//   for (let numero of arr) {
//     numeroMenor = numeroMenor < numero ? numeroMenor : numero;
//     numeroMayor = numeroMayor > numero ? numeroMayor : numero;
//   }

//   resultado = [numeroMenor, numeroMayor];
//   return resultado;
// }

// let numeros = getMenorMayor(array);
// console.log(numeros);

// * EJERCICIO 6

// let array = [2, 5, 7, 15, -5, -100, 55];

// function cuantosPositivos(arr) {
//   let numPositivos = 0;
//   for (let numero of arr) {
//     numero > 0 ? numPositivos++ : numero;
//   }
//   return numPositivos;
// }

// let resultado = cuantosPositivos(array);
// console.log(resultado);

// * EJERCICIO 7

// function precioCompleto(precio, impuesto) {
//   return precio * impuesto + precio;
// }

// let resultado = precioCompleto(19.9, 0.15);
// console.log(resultado);

// * EJERCICIO 8

// let array = [
//   {
//     id: 1,
//     name: 'Nicolas',
//   },
//   {
//     id: 2,
//     name: 'Felipe',
//   },
//   {
//     id: 3,
//     name: 'Pepe',
//   },
// ];

// // ? console.log(array[0].id);

// function toPairs(arr) {
//   let pairs = [];
//   for (let idx in arr) {
//     elemento = arr[idx];
//     pairs[idx] = [elemento.id, elemento];
//   }
//   return pairs;
// }

// let resultado = toPairs(array);
// console.log(resultado);

// function toPairs2(arr) {
//   let pairs = [];
//   for (let idx in arr) {
//     pairs[idx] = [arr[idx].id, arr[idx]];
//   }
//   return pairs;
// }

// let resultado2 = toPairs2(array);
// console.log(resultado2);

// * EJERCICIO 9

// let pairs = [
//   [1, {name: 'nicolas'}],
//   [2, {name: 'carlos'}],
//   [3, {name: 'miguel'}],
// ];

// function toCollections(arr) {
//   let collection = [];
//   for (let idx in arr) {
//     let elemento = arr[idx];
//     collection[idx] = elemento[1];
//     collection[idx].id = elemento[0];
//   }
//   return collection;
// }

// let resultado = toCollections(pairs);
// console.log(resultado);

// * EJERCICIO 10

// function crearArray(n) {
//   let cuenta = [];
//   if (n < 0) {
//     return 'La longitud es menor que 0';
//   }
//   for (let i = 0; i < n; i++) {
//     cuenta[i] = i + 1;
//   }
//   return cuenta;
// }

// let resultado = crearArray(-1);
// console.log(resultado);
