"use strict";

// var crea variables con ámbito global/funcional
var name = "Julian"; // variable Global

function greetings() {
  // var name = "Julian";
  return function () {
    // Ésta funcion puede acceder a ambitos superiores por eso puede acceder a "name"
    // Closure
    console.log(name);
  };
}

greetings()(); // let crea variables con ámbito de bloque
// seria un desperdicio de memoria usando var para un bloque for
//var i = 1;
//for (i; i <= 10; i++) {
//    console.log(i)
//}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}