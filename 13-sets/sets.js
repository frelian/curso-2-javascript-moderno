const myColors = ['pink', 'cyan'];
const colors = new Set(myColors); // le paso la referencia a Set

// Añadir al set
colors.add('blue');
colors.add('yellow');
colors.add('green');

// No permite duplicados
colors.add('white');
colors.add('white');
colors.add('white');
colors.add('white');

// Iterar sobre el set
console.log(colors.values())

for (let color of colors) {
    console.log(color)
}

// Eliminar elementos del set
console.log(colors.delete('black'))
// Imprime: false ya que no existe el elemento en el set 
// Si existiera 'black' en el set retornaria true, que significa que lo elimino

colors.delete('green');
console.log(colors);

// Saber el tamaño 
console.log(colors.size);

const text = "Welcome to the jungle!";
console.log(text.length);
console.log(new Set(text).size)
console.log(new Set(text).values())

// Acceder/comprobar elementos del set
console.log(colors.has('golden')) // flase
console.log(colors.has('blue')) // true

// Limpiar el set
colors.clear()

/************************************/
// Ejercicio, crear un set de visitas de usuarios
const users = ["Maria", "Jose", "Karla", "Kamil", "Elen", "Matias"];
const userVisits = new Set();

function visit() {
    // Busco el indice del array users, de los 6 elementos iniciando en 0
    const userIndex = Math.floor(Math.random() * users.length);

    // Obtengo el usuario con el indice aleatorio obtenido previamente
    const user = users[userIndex];

    // Consulto si ya existe y si es asi(&&) imprimo un warning en pantalla usando template strings
    userVisits.has(user) && console.warn(`User ${user} already visited the page`);

    // Añado el usuario, teniendo en cuenta que si ya existe SET lo ignorará
    userVisits.add(user);
    console.log(userVisits);

    // Condicion para validar si todos los usuarios ya visitaron la pagina
    if (userVisits.size === users.length) {
        console.info("All users have visited the page");

        // Limpio el intervalo
        clearInterval(interval);
        // Limpio el SET
        userVisits.clear();
    }
}

const interval = setInterval(visit, 300);
