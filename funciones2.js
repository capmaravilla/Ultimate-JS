// * DECLARACION VS EXPRESION

// console.log(funcionNombrada); // Hoisting -> Izar o levantar

// Declaración de funciones -> Function Declaration

// Función nombrada -> Named function
function funcionNombrada() {
  console.log('Función nombrada -> Named function');
}

// Función anonima -> Anonymus function
// function () {
//   console.log('Función anonima -> Anonymus function');
// }

// Expresión de funciones -> Function expression

//anonymus function expresion
let expresionFuncionAnonima = function () {
  console.log('anonymus function expresion');
};

//named function expression
let expresionFuncionNombrada = function multi() {
  console.log('named function expression');
};

// Expresión de funcion con una Fat arrow function
// siempre va a ser anonima
const expresionFuncionFAF = () => {
  console.log('Expresión de funcion con una Fat arrow function');
};

// * let var const function

function suma(a, b) {
  return a + b;
}

console.log(suma(1, 2, 4, 5));
