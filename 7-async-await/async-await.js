// Async keyword
async function myFunction() {
    // return "Hello World";
    return Promise.resolve("Hello World");
}

myFunction().then(data => console.log(data));

// Await keyword
function getWeather() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve("Mostly cloudy: 13C"), 2000);
        setTimeout(() => reject("Can't connect 😱"), 2000);
    })
}

function getTraffic() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Traffic fluid"), 2000);
    })
}

// Llamada sin usar Async y Await
function travelPlan() {
    getWeather()
        .then(data => {
            console.log(data);
            return getTraffic(); // ya que al retornar una nueva promesa, uso otro then a continuacion:
        })
        .then(data => console.log(data));
}

// LLamada usando Async y await
async function travelPlan() {

    /* Lanzado una promesa tras otra:

        const weather = await getWeather();
        const traffic = await getTraffic();
        return [weather, traffic];
    */

   // Lanzando las 2 promesas al mismo tiempo:
    try {
        const weather = getWeather();
        const traffic = getTraffic();
        const plan = await Promise.all([weather, traffic]);
        return plan;
    } catch (error) {
        // lanzo el error a quien este escuhando el error, en este caso es la llamada a la funcion travelPlan() linea 54
        throw error; 
    }
}

travelPlan()
    .then(data => console.log(data))
    .cath(error => console.error(error));