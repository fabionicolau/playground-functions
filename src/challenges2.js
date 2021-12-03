// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let listaTech = [];
  let objeto = {};
  for (let tecnologias of array.sort()) {
    objeto = {
      tech: tecnologias,
      name,
    };
    listaTech.push(objeto);
  }

  return listaTech;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let contador = 0;
  for (let numeros of array) {
    if (numeros < 0 || numeros > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let numbers of array) {
      if (numeros === numbers) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    contador = 0;
  }

  return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
}

console.log((generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
