// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function parImpar(numero) {
  if (numero % 2 === 0) {
    return console.log("El número es par");
  } else {
    return console.log("El número es impar");
  }
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function esMayor(a, b) {
  if (a > b) {
    return console.log("El número " + a + " es mayor que " + b);
  } else if (b > a) {
    return console.log("El número " + b + " es mayor que " + a);
  } else {
    return console.log("Los números ingresados son iguales");
  }
}
// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function esMultiploDe5(numero) {
  if (numero % 5 === 0) {
    return console.log("El número ingresado es múltiplo de 5");
  } else {
    return console.log("El número ingresado no es múltiplo de 5");
  }
}
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function cuentaNumeros(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
  return;
}
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(num, palabra) {
  for (let i = 0; i < num; i++) {
    console.log(palabra);
  }
}
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function cuentaArray(array) {
  for (let item of array) {
    console.log(item);
  }
}
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
// Ayuda: Recuerden que el primer índice de un array es "0".

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function todosMenosElQuinto(array) {
  for (let i = 0; i < 10; i++) {
    if (i != 4) {
      console.log(array[i]);
    }
  }
}
// todosMenosElQuinto(a);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function arrayMultipicado(array, num) {
  console.log(array);
  for (let item of array) {
    console.log(item * num);
  }
}

// a = [1, 2, 3, 4, 5, 6];
// arrayMultipicado(a, 8);
