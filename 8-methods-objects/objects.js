const name = "Mary";
const color = "Blue";
const city = "Paris";
const language = "JavaScript";

const person = {
    /*
    // Property: variable
    name: name,
    color: color,
    city: city,
    language: language,
    */

    // Pero ahora ya no es necesario poner el identificado
    name,
    color,
    city,
    language,
}

console.log(person)

// Definiciones abreviadas de métodos
const person2 = {
    name,
    color,
    city,
    language,
    greet () {
        console.log(`Hola me llamo ${this.name}`);
    }
}

// Propiedades computadas
const person3 = {
    name,
    color,
    city,
    language,
    [city + "CP"]: 32352,
}

console.log(person3)

// Object.values()
console.log("Object.values:", Object.values(person3));

const [name2, color2, city2, language2] = Object.values(person3);
console.log(name2, color2)

// Object.entries()
console.log(Object.entries(person3));

// Recorrer facilmente key-value
Object.entries(person3).forEach(([key, value]) => {
    console.log(`${key} : ${value}`)
})


