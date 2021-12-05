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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absoluto = Math.abs(lineB - lineC);
  if (lineA < lineB + lineC && lineA > absoluto) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let numeroString = string.match(/\d+/g);
  let numeros = 0;
  for (let numbers of numeroString) {
    numeros += parseInt(numbers, 10);
  }
  if (numeros === 1) {
    return `${numeros} copo de água`;
  }
  return `${numeros} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
