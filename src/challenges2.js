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
  let segundaParte = [];
  let terceiraParte = [];
  for (let index = 2; index < 7; index += 1) {
    segundaParte.push(array[index]);
  }
  for (let index = 7; index < 12; index += 1) {
    terceiraParte.push(array[index]);
  }
  return `(${array[0]}${array[1]}) ${segundaParte.join('')}-${terceiraParte.join('')}`;
}

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
