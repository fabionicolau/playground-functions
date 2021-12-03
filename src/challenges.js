// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  console.log(ultimoItem);
  let primeiroItem = array[0];
  console.log(primeiroItem);
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let numeroDePontos = (wins * 3) + ties;
  return numeroDePontos;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maior = array.reduce(function (a, b) {
    return Math.max(a, b);
  });
  for (let numeros of array) {
    if (numeros === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciacat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciacat2) {
    return 'cat1';
  }
  if (distanciacat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let numeros of array) {
    if (numeros % 3 === 0 && numeros % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numeros % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (numeros % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4')
      .replace('u', '5');
  }
  return string;
}

function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o')
      .replace('5', 'u');
  }
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
