/* 
    Creacion de promesa
    Se le pasa al constructor 2 parametros:
        - Resolve
        - Reject
*/
// Ejercicio 1
const buyFood = new Promise((resolve, reject) => {

    // Funcion ejecutora "resolve"
    resolve("Aquí tienes tu comida 😀")

    //reject(Error("Error procesando el pago 😱"))
});

buyFood
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.info("Proceso finalizado"));


// Ejercicio 2    
// Manejo de varias promesas
const payFood = new Promise((resolve, reject) => {

    // Son acciones asincronas
    // Uso settimeout para simular la espera del servidor
    setTimeout(() => {
        Promise.race([paypal, amex]).then(payProvider => {
            resolve( {done: true, payProvider, customerID: 45345} )
        });
        //resolve({ done: true, customerID: 2332345345 })
        //reject("Problema con el pago");
    }, 500)
})

// Proveedores de pago (Promise.race)
const paypal = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Paypal")
    }, 20000)
})

const amex = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("American Express (AMEX)")
    }, 1000)
})

const getTransport = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve( { bikerID: 423454, distance: 30000 })
        // reject("Problema con el repartidor");
    }, 5000);
})

function deliverFood() {
    /* Then flow
    // Lanzo promesas
    payFood
        .then(paymentInfo => {
            console.log(paymentInfo);
            return getTransport; // Retorna otra promesa, se puede encadenar "then"
        })
        .then(riderInfo => {
            let { bikerID, distance } = riderInfo;
            console.log(`El biker ${bikerID} se encuentra a ${distance} metros`);
        })
        .catch(error => { console.error(error) }) // Recoge los errores
        .finally(() => console.log("Proceso de compra de comida finalizado."))
    */

    // Promise all
    Promise.all([payFood, getTransport])
        .then(order => console.log(order))
        .catch(error => console.error(error))
}

deliverFood()