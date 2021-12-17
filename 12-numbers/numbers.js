// Math.trunc
const num = 123.45678;
console.log(Math.trunc(num))

// Diferencia de ceil que redondea hacia arriba
console.log(Math.ceil(num))

// Por que no se utiliza parseInt ?
// Porque parseInt primero convierte a String y luego a entero
const num2 = 123142334534346462.1;
console.log(num2.toString())
console.log(parseInt(num2))
// Despues de ES6 arreglaron éste tema, sin embargo para valores numericos usar trunc y Strings usar parseInt


// Number.isNaN
let value = undefined + 1;
console.log(Number.isNaN(value));

// Number.isInteger
let integer = 10;
console.log(Number.isInteger(integer));

integer = 10.0;
console.log(Number.isInteger(integer));

integer = 10.234;
console.log(Number.isInteger(integer));

// Number.isFinite()
let finite = 20;
console.log(Number.isFinite(finite));

// el metodo global convierte a entero
finite = "20";
console.log(Number.isFinite(finite)); // False
console.log(isFinite(finite)); // True
