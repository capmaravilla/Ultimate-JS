// * FUNCIONES

// function Usuario(nombre) {
//   this.nombre = nombre;
// }

// console.log(Usuario.name);
// console.log(Usuario.length);

// const U = Usuario;
// let user = new U('Nicolas');
// user = new U('David');

// console.log(user);

// function of(Fn, arg) {
//   return new Fn(arg);
// }

// let user1 = of(Usuario, 'David2');
// console.log(user1);

// function returned() {
//   return function () {
//     console.log('Hola Mundo');
//   };
// }

//* FUNCTIONS

// const Point = new Function(
//   'x',
//   'y',
//   `this.x = x;
//   this.y = y;
//   this.dibujar = function ()
//   {console.log('Dibujando...');
//   };`
// );

// const p = new Point(1, 2);
// console.log(p);

// * REFERENCIA

// let a = 1;
// let b = a;

// b++;
// console.log(a, b);

// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a, b);

// let a = 1;
// function suma(n) {
//   n++;
// }

// suma(a);
// console.log(a);

// let a = {prop: 1};
// function suma(n) {
//   n.prop++;
// }

// suma(a);
// console.log(a);

//  ! LOS VALORES PRIMITIVOS SE COPIAN
//  ! LAS REFERENCIAS SE REFERENCIAN
// ? REFENCIAS SON  Objetos, Arrays y Funciones

// * LISTAR PROPIEDADES

// const punto = {
//   x: 10,
//   y: 15,
//   dibujar() {
//     console.log('Dibujando...');
//   },
// };

// delete punto.dibujar;
// if ('dibujar' in punto) {
//   punto.dibujar();
// }

// let keys = Object.keys(punto)
// console.log(keys);

// console.log(Object.keys(punto));

// for (let llave of Object.keys(punto)) {
//   console.log(llave, punto[llave]);
// }

// for (let entrada of Object.entries(punto)) {
//   console.log(entrada);
// }

// for (let llave in punto) {
//   console.log(llave, punto[llave]);
// }

// * CLONANDO OBJETOS

let punto = {
  x: 10,
  y: 15,
};

let clonePunto = Object.assign({}, punto, {x: 1, z: 20});
console.log(punto, clonePunto);

let clonePunto = Object.assign({}, punto);
let clonePunto2 = {...punto};
console.log(clonePunto, punto, clonePunto2);

let copiaObsoleta = {};
for (let llave in punto) {
  copiaObsoleta[llave] = punto[llave];
}

// * PRIVADO VS PUBLICO
