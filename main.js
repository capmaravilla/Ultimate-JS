let global = 'fuera';

console.log(global);

const saludo = () => {
  console.log(global);
  let dentro = 'dentro';
  console.log(dentro);
  console.log(masDentro);
  const anidada = () => {
    console.log(dentro, global);
    var masDentro = 'Mas dentro aun';
    console.log(masDentro);
  };
  anidada();
};

saludo();
console.log(dentro);
