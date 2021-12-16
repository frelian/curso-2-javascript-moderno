// for...of
const colors = ["Blue", "Green", "Red", "Yellow"];
for ( let color of colors ) {
    console.log(color)
}

const iterator = colors[Symbol.iterator]();

const person = {
    name: "Maria",
    city: "Paris",
    color: "Red",
}

// Iterar objetos
for (let [key, value] of Object.entries(person)) {
    console.log(key, value)
}

// Iterar objetos mas complejos
const learn = {
    vue: ["Vue3", "Nuxt", "Grindsome"],
    js:  ["ESNext", "Patterns", "Testing"],
    css: ["Tailwind", "BEM", "SubGRID"]
}

// tecnologias[indiceTecnologia][indiceHerramienta++]
learn[Symbol.iterator] = function () {
    let indiceTech = 0;
    let indiceTool = 0;
    const technologies = Object.values(this);
    return {
        next() {
            const technology = technologies[indiceTech];

            // Comprobar que haya mas herramientas
            if (! (indiceTool < technology.length)) {
                indiceTech++;
                indiceTool = 0;
            }

            // Comprobar que haya mas tegnologias
            if (! (indiceTech < technology.length)) {
                return {
                    value: undefined,
                    done: true,
                }
            }

            return {
                value: technologies[indiceTech][indiceTool++],
                done: false,
            }
        }
    }
}

// Iterando
for (let tool of learn) {
    console.log(tool)
}
