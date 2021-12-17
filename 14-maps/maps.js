// Ejercicio 1
const map = new Map();
console.log(map.size)

// Añadir nuevos elementos .set(key, value)
map.set(1, "Number");
map.set("1", "String");
map.set(true, "Boolean");

// Obtener elemento a traves de la key
// key puede ser en este caso 1 o "1" o true
console.log(map)
console.log(map.get("1"))

console.log(typeof(map))
console.log(map instanceof Map)

// Recorriendo las keys
for (let key of map.keys()) {
    console.log(key)
}

// Recorriendo los values
for (let val of map.values()) {
    console.log(val)
}

// Recorriendo las keys y values
for (let data of map.entries()) {
    console.log(data)

    // Desestructuro 
    let [key, value] = data;

    console.log(key, value)
}

// Ejercicio 2
// Creando un Map a partir de un objeto:
const person = {
    name: "Lian",
    city: "Marsella",
    color: "blue",
}

// A map se le pasa un iterable, pero un objeto no es iterable
const personMap = new Map(Object.entries(person));
console.log(personMap)
console.log(personMap.get("city"))

// Object.fromEntries(iterable)
const personClone = Object.fromEntries(personMap);
console.log("Objeto reconstruido: ", personMap)
console.log("Objeto original: ", personMap)

// Ejercicio 3
let juan = {name: 'Juan'}, nino = {name: 'Nino'}, mary = {name: 'Mary'};
const admins = new Map();

// Referencio al objeto con un string
admins
    .set(juan, 'superadmin')
    .set(nino, 'admin')
    .set(mary, 'editor')

    console.log(admins)


function doAdmin(user) {
    if (admins.has(user)){
        console.info(`User ${user.name} is doing ${admins.get(user)} stuff!`)
    } else {
        console.error("User not found on admin list!")
    }
}

// Como hay una referencia al objeto si elimino el objeto o si seteo en null
juan = null;
doAdmin(juan);