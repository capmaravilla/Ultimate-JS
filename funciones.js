// * Construye usuarios con la funcion constructor

// function Usuario(name) {
//   this.id = Math.floor(Math.random() * 10);
//   this.name = name;
// }

// let user = new Usuario('Felipe');
// let user2 = new Usuario('Chanchito');

// console.log(user, user2);

// * Factory function

// function createUsuario(name) {
//   return {
//     id: Math.floor(Math.random() * 10),
//     name,
//   };
// }

// let user3 = new createUsuario('Felipe');
// let user4 = new createUsuario('Chanchito');

// console.log(user3, user4);

// * Objetos Similares

// function similares(obj1, obj2) {
//   return obj1.id === obj2.id && obj1.name === obj2.name;
// }

// let resultado = similares({id: 1, name: 'Nico'}, {id: 1, name: 'Lalo'});

// console.log(resultado);

// function similares2(obj1, obj2) {
//   let distintos = false;
//   for (let llave in obj1) {
//     if (obj1[llave] !== obj2[llave]) {
//       distintos = true;
//     }
//   }
//   return !distintos;
// }

// let resultado2 = similares2({id: 1, name: 'Nico'}, {id: 1, name: 'Lalo'});

// console.log(resultado2);

// * Cuales son métodos

// let objeto = {
//   id: 1,
//   name: 'Chanchito',
//   login: function () {},
//   logout: function () {},
// };

// function cualesMetodos(obj) {
//   for (let llave in obj) {
//     if (typeof obj[llave] === 'function') {
//       console.log(llave);
//     }
//   }
// }

// cualesMetodos(objeto);

// * Propiedad existente

// let objeto2 = {
//   id: 1,
//   name: 'chanchito',
//   login: function () {},
//   logout: function () {},
// };

// let propiedad = 'name';

// function tieneProp(obj, propiedad) {
//   let props = Object.keys(obj);

//   for (let prop of props) {
//     if (propiedad == prop) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(tieneProp(objeto2, propiedad));

// * Crea copias

// let obj1 = {
//   id: 1,
//   name: 'chanchito',
// };
// function crearCopia(obj) {
//   let copia = {};
//   for (let llave in obj) {
//     copia[llave] = obj[llave];
//   }
//   return copia;
// }

// let obj2 = crearCopia(obj1);
// console.log(obj1, obj2);

// * Agregar ID

let objeto = {name: 'Nicolas'};

function agregarId(obj) {
  if (typeof obj === 'object') {
    obj.id = Math.random();
  }
  return obj;
}

agregarId(objeto);
console.log(objeto);
