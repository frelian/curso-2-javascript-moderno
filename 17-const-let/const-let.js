// var crea variables con ámbito global/funcional
var name = "Julian"; // variable Global

function greetings() {
    // var name = "Julian";
    return function () {
        // Ésta funcion puede acceder a ambitos superiores por eso puede acceder a "name"
        // Closure
        console.log(name)
    }
}

greetings()()

// let crea variables con ámbito de bloque

// seria un desperdicio de memoria usando var para un bloque for
//var i = 1;
//for (i; i <= 10; i++) {
//    console.log(i)
//}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// console.log(i) // Ya no tengo acceso

if (true) {
    var transform = name.toUpperCase();
}
// transform usando var existe y puedo imprimir
// transform usando let no existe porque está en otro ámbito
// console.log(transform)

// Antes para declarar una constante se usaba en mayusculas
// const crea constantes
const IVA = .21;
// IVA = .16; // No se puede cambiar

const Person = {}

// no hay problema ya que la referencia es el objeto Person
// pero si puedo cambiar propiedades del objeto
Person.name = name;
console.log(Person)
// Person = {} // Error, pierdo la referencia al objeto

const Person2 = Person;
Person2.city = "Paris";
console.log(Person)