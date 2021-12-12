// SPREAD
// Aplicacion 1
const numeros = [1, 2, 3, 4, 5];
console.log(...numeros);

// Aplicacion 2
const oracion = "Hola mundo";
console.log(...oracion);

// Aplicacion 3, pasar matrices como parametros
function sumar(a, b, c, d, e) {
    return a + b + c + d + e;
}

// Sin usar Spread
// Uso el metodo "apply" para asignar y forzar un valor de this
// Agrego null porque no necesito pasarle el contexto "this"
console.log(sumar.apply(null, numeros));
// Usando spread
// Saca cada numero del array y se lo pasa a la funcion
console.log(sumar(...numeros));

// Aplicacion 4, Clonar matrices y objetos
const numerosCopia = [...numeros];
console.log(numerosCopia);
// NO es una referencia, es una copia, demostracion añadiendo:
numeros.push(6);
console.log(numeros, numerosCopia)

// Objetos
const datos = { nombre:'Maria', ciudad: 'Florida' };
const datosCopia = { ...datos }
console.log(datosCopia);

// Aplicacion 5, Fusionar matrices y objetos
const preferencias = { cerveza: 'Sol', color: 'Amarillo' }
const persona = { ...datos, ...preferencias }
console.log(persona);

// REST
// Representa un numero infinito de argumentos como matriz
function sumar2(...argumentos) {
    // return argumentos;

    // Si quiero sumar todos los argumentos ?
    return argumentos.reduce((actual, total) => actual + total);
}

// Se puede usar spread varias veces
const numeros2 = [34,23,7];
console.log(sumar2(...numeros2, ...[24],...numeros2, 10, 56, 95))

// Ejemplo final como se usaria en Vue y Vuex
const mapState = {
    loggedIn() { // 
        return true;
    },
    isMember() {
        return false;
    }
}

const computed = {
    ...mapState,
    computedProp() { // <-- propiedad computada local
        return null;
    }
}

console.log(computed)