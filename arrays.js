// const letras = ['a', 'b'];

// * Agregar elementos a un array

// letras.push('c');
// letras.unshift('z');
// letras.splice(2, 0, 3);

// console.log(letras);

// * Borrar elementos de un array

// const final = letras.pop();

// console.log(final, letras);

// const inicio = letras.shift();
// console.log(inicio, letras);

// letras.splice(1, 1);
// console.log(letras);

// * Buscar primitivos

// const array = ['a', 'b', 1, 'c', 'd', 1];

// const hola6 = mensaje => mensaje + ' ' + esta + 'es su nombre'
// console.log(array.indexOf('c'));
// console.log(array.indexOf(2));
// console.log(array.indexOf(1));
// console.log(array.lastIndexOf(1));
// console.log(array.indexOf(1, 3));

// console.log(array.indexOf('d') !== -1);
// console.log(array.includes('d'));

// * Fat arrow functions

// function hola() {
//   return 'Hola mundo';
// }

// const hola1 = () => {}; // Funcion anonima, para referenciarla en el futuro tenemos que asignarsela a una constante o variable

// const hola2 = () => {
//   return 'Hola mundo';
// };
// const hola3 = () => 'Hola mundo'; // Ademas tiene el return implicito, quitando las llaves y el return, si es solamente de una linea

// const hola4 = mensaje => mensaje + 'Hola mundo'; // y lo mismo si solo tiene un parametro, podemos quitar los parentesis

// const resultado = hola4('chanchito feliz');
// console.log(resultado);

// * Buscar referencia

// const usuarios = [
//   {id: 1, name: 'Chanchito'},
//   {id: 2, name: 'Feliz'},
// ];

// const resultado = usuarios.indexOf({id: 1, name: 'Chanchito'}); //Esta no funcionaria porque es un objeto
// const resultado = usuarios.find(function (usuario) {
//   return usuario.id === 1;
// });
// Esta funcion retorna true o false. Se llaman Predicate
// console.log(resultado);

// const resultado2 = usuarios.find(usuario => usuario.id === 1);
// const resultado3 = usuarios.findIndex(usuario => usuario.id === 1);
// console.log(resultado2);
// console.log(resultado3);

// * Vaciando arrays

// let arr = [1, 2];
// let arrPrima = arr;
// arr = [];

// console.log(arr, arrPrima);

// let arr2 = [1, 2];
// let arrPrima2 = arr2;
// arr2.length = 0;
// console.log(arr2, arrPrima2);

// let arr3 = [1, 2];
// let arrPrima3 = arr3;
// arr3.splice(0, arr3.length);
// console.log(arr3, arrPrima3);

// let arr4 = [1, 2];
// let arrPrima4 = arr4;
// while (arr4.length > 0) { //! Este no usar. + lenta + consumo de recursos
//   arr4.pop();
// }
// console.log(arr4, arrPrima4);

// * Combinando y dividiendo

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// let combinados = arr1.concat(arr2);

// let divididos = combinados.slice(2);
// let divididos2 = combinados.slice(2, 4);
// let divididos3 = combinados.slice(); // Esto hace una copia por referencia del array

// console.log(divididos, divididos2, divididos3);

// * Spread operator

// let arr1 = [1, 2];
// let arr2 = [5, 6];

// let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8];
// let arr4 = [...arr3]; // este es mejor que el siguiente, mas claro
// let arr4Prima = arr3.slice();
// arr3.pop();

// console.log(arr4Prima, arr4);

// * Join

// let arr1 = ['Nicolas', 'Chachito', 'Felipe'];
// let mensaje = arr1.join(', ');

// console.log(mensaje);

// let saludo = 'Hola mundo! desde NZ';
// let dividido = saludo.split(' ');

// console.log(dividido);
// console.log(dividido.join('-'));

// * Ordenando arrays

// let numeros = [15, 10, -3];

// numeros.sort();
// numeros.reverse();

// console.log(numeros);

// let letras = ['Z', 'g', 'd', 'a', 'B'];
// letras.sort();

// console.log(letras);

// letras.sort((a, b) => {
//   /**
//    * a antes b => -1
//    * b antes a => 1
//    * si son iguales => 0
//    */
//   let alower = a.toLowerCase();
//   let blower = b.toLowerCase();

//   if (alower < blower) {
//     return -1;
//   }
//   if (blower < alower) {
//     return 1;
//   }
//   return 0;
// });

// console.log(letras);

// let usuarios = [
//   {edad: 15, nombre: 'Juanes'},
//   {edad: 10, nombre: 'Andres'},
//   {edad: 20, nombre: 'Rodri'},
// ];

// usuarios.sort((a, b) => {
//   if (a.edad < b.edad) return -1;
//   if (a.edad > b.edad) return 1;
//   return 0;
// });

// console.log(usuarios);

// * Every y some

// let usuarios = [
//   {id: 1, activo: true},
//   {id: 2, activo: false},
//   {id: 3, activo: false},
// ];

// let = todosActivos = usuarios.every(u => {
//   console.log('todos activos', u.id);
//   return u.activo;
// });

// console.log(todosActivos);

// let = algunoActivo = usuarios.some(u => {
//   console.log(u.id);
//   return u.activo;
// });

// console.log(algunoActivo);

// * Filter

// const usuarios = [
//   {edad: 17, nombre: 'Nico'},
//   {edad: 13, nombre: 'Ana'},
//   {edad: 25, nombre: 'Pau'},
//   {edad: 32, nombre: 'Chancho'},
// ];

// const mayores = usuarios.filter(u => u.edad > 17);

// console.log(mayores);

// * Map

// const usuarios = [
//   {edad: 17, nombre: 'Nico'},
//   {edad: 13, nombre: 'Ana'},
//   {edad: 25, nombre: 'Pau'},
//   {edad: 32, nombre: 'Chancho'},
// ];

// const lista = usuarios.map(usuario => usuario.nombre);

// const lista2 = usuarios.map(usuario => `<li>${usuario.nombre}</li>`);
// const html = `<ol>${lista2}</ol>`;

// console.log(lista);
// console.log(lista2);

// const mapped = usuarios.map(u => ({
//   ...u,
//   mayor: u.edad > 17,
// }));

// console.log(mapped);

// const lista = usuarios
//   .filter(u => u.edad > 17)
//   .map(u => `<li>${u.nombre}</li>`);

// const html = `<ol>${lista}</ol>`;

// console.log(html);

// * reduce

// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(suma);

// const anidado = [[1, 2], 3, [4, 5]];
// const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// console.log(plano);

// const usuarios = [
//   {edad: 17, nombre: 'Nico'},
//   {edad: 13, nombre: 'Ana'},
//   {edad: 25, nombre: 'Pau'},
//   {edad: 32, nombre: 'Chancho'},
// ];

// const indexado = usuarios.reduce( // para inedxar cuando tenemos muchos elementos
//   (acc, el) => ({
//     ...acc,
//     [el.nombre]: el,
//   }),
//   {}
// );
// console.log(indexado);
