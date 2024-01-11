// * EJERCICIO 1

// function paraAbsoluto(arr) {
//   return arr.map(el => Math.abs(el));
// }

// const ns = [-2, 3, 5, -15];

// const absolutos = paraAbsoluto(ns);

// console.log(absolutos);

// * EJERCICIO 2

// const miArray = ['hola', 12, 'Mundo', {}, {id: 15}, ['lala']];

// function dividePorTipo(arr) {
//   return {
//     numeros: arr.filter(el => typeof el === 'number'),
//     string: arr.filter(el => typeof el === 'string'),
//     objetos: arr.filter(el => typeof el === 'object'),
//   };
// }

// const nuevoArray = dividePorTipo(miArray);
// console.log(nuevoArray);

// * EJERCICIO 3

// const usuarios = [
//   {edad: 17, nombre: 'Nico', plan: 'premium'},
//   {edad: 134, nombre: 'Pepe', plan: 'free'},
//   {edad: 32, nombre: 'Paco', plan: 'free'},
//   {edad: 25, nombre: 'Ana', plan: 'gold'},
// ];

// function getPaidUsers(usrs) {
//   return usrs.filter(u => u.plan !== 'free');
// }

// console.log(getPaidUsers(usuarios));

// * EJERCICIO 4

// const usuarios = [
//   {edad: 17, nombre: 'Nico', plan: 'premium'},
//   {edad: 13, nombre: 'Pepe', plan: 'premium'},
//   {edad: 32, nombre: 'Paco', plan: 'free'},
//   {edad: 25, nombre: 'Ana', plan: 'gold'},
// ];

// function cuantosPremium(usrs) {
//   let total = 0;
//   usrs.filter(u => u.plan === 'premium').map(u => total++);
//   return total;
// } //! Esta es la que se me ocurrio pero esta mal aunque funciona

// function cuantosPremium(usrs) {
//   return usrs.reduce((acc, el) => (el.plan !== 'free' ? acc + 1 : acc), 0);
// }
// // function cuantosMayores(usrs) {
// //   return usrs.reduce((acc, el) => (el.edad > 17 ? acc + 1 : acc), 0);
// // }

// const cuantosMayores = usrs => {
//   return usrs.reduce((acc, el) => (el.edad > 17 ? acc + 1 : acc), 0);
// };

// // function cuantosMayores(usrs) {
// //   return usrs.reduce((acc, el) => {
// //     if (el.edad > 17) {
// //       return acc + 1;
// //     }
// //     return acc;
// //   }, 0);
// //  } // ? sin el condicionador ternario

// console.log(cuantosPremium(usuarios));
// console.log(cuantosMayores(usuarios));

// * EJERCICIO 5

// const usuarios = [
//   {edad: 17, nombre: 'Nico', plan: 'premium'},
//   {edad: 13, nombre: 'Pepe', plan: 'free'},
//   {edad: 32, nombre: 'Paco', plan: 'free'},
//   {edad: 25, nombre: 'Ana', plan: 'gold'},
// ];

// // function obtenerMayor(arr) {
// //   arr.sort((a, b) => a.edad - b.edad);
// //   return arr.pop();
// // } //? se ve que esta no vale

// function obtenerMayor(arr) {
//   let mayor = arr[0];
//   for (let usuario of arr) {
//     if (mayor.edad < usuario.edad) {
//       mayor = usuario;
//     }
//   }
//   return mayor;
// }

// const mayor = obtenerMayor(usuarios);
// console.log(mayor);

// * EJERCICIO 6

// function dividePorTipo(arr) {
//   return arr.reduce((acc, el) => {
//     let llave = typeof el;
//     acc[llave] = acc[llave] ? acc[llave] : [];
//     acc[llave].push(el);
//     return acc;
//   }, {});
// }

// const miArray = ['hola', 12, true, 'Mundo', {}, {id: 15}, ['lala']];

// let arr = dividePorTipo(miArray);
// console.log(arr);

// * EJERCICIO 7

// const usuarios = [
//   {edad: 17, nombre: 'Nico', plan: 'premium'},
//   {edad: 13, nombre: 'Pepe', plan: 'free'},
//   {edad: 32, nombre: 'Paco', plan: 'free'},
//   {edad: 25, nombre: 'Ana', plan: 'gold'},
// ];

// function groupBy(arr, prop) {
//   return arr.reduce((acc, el) => {
//     let valor = el[prop];
//     acc[valor] = acc[valor] ? acc[valor] : [];
//     acc[valor].push(el);
//     return acc;
//   }, {});
// }

// const grouped = groupBy(usuarios, 'plan');
// console.log({grouped});

// * EJERCICIO 8

// const usuarios = [
//   {edad: 17, nombre: 'Nico', plan: 'premium'},
//   {edad: 13, nombre: 'Pepe', plan: 'free'},
//   {edad: 32, nombre: 'Paco', plan: 'free'},
//   {edad: 25, nombre: 'Ana', plan: 'gold'},
// ];

// // Obtener los usuarios pago
// // Ordenar de mayor a menor edad
// // Devolver el nombre del usuario
// // Crear una plantilla HTML

// const pagos = usuarios.filter(u => u.plan != 'free');

// pagos.sort((a, b) => {
//   if (a.edad > b.edad) return -1;
//   if (a.edad < b.edad) return 1;
//   return 0;
// });

// const lista = pagos.map(u => `<li>${u.nombre}</li>`);
// const html = `<ul>
//     ${lista.join(`
//     `)}
// </ul>`;

// console.log(html);

// * EJERCICIO 9

const usuarios = [
  {edad: 17, nombre: 'Nico', plan: 'premium'},
  {edad: 13, nombre: 'Pepe', plan: 'free'},
  {edad: 32, nombre: 'Paco', plan: 'free'},
];

const users = [
  {age: 22, name: 'Kevin', membership: 'premium'},
  {age: 27, name: 'Jon', membership: 'free'},
  {age: 29, name: 'Michael', membership: 'free'},
];

// users.map(u => {
//   u.edad = u.age;
//   delete u.age;
// });
// users.map(u => {
//   u.nombre = u.name;
//   delete u.name;
// });
// users.map(u => {
//   u.plan = u.membership;
//   delete u.membership;
// }); // ! Cambiar los nombres mejor el siguiente

const usersEspanol = users.map(u => ({
  edad: u.age,
  nombre: u.name,
  plan: u.membership,
}));

// const combinados = usuarios.concat(usersEspanol);

const combinados = [...usuarios, ...usersEspanol];

combinados.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  return 0;
});

const lista = combinados.map(
  u => `<li>Nombre:${u.nombre}, Edad:${u.edad}</li>`
);

const html = `<ul>
    ${lista.join(`
    `)}
</ul>`;

console.log(html);
