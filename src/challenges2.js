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
function generatePhoneNumber() {
  // seu código aqui
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
