const url = "https://jsonplaceholder.typicode.com/posts";

// Syntax
// fetch(url, [options])

// GET request
fetch(url)
    // Examinando Response object
    .then(response => {
        console.log(response.headers.get("Content-type"))
        for (const [key, val] of response.headers) {
            console.log("Headers de la respuesta:", key, val)
        }
        return response.json()
    })

    // como el anterior response.json() tambien retorna una respuesta:
    .then(response => console.log(response))
    .catch(error => console.error(error.message))


// POST request
const payload = {
    id: 132354523,
    name: "Juanita Perez",
    color: "blue",
}

const options = {
    method: "POST",
    headers: {
        // Enviamos JSON en el cuerpo
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(payload)
}

// Request en sí
fetch(url, options)
    .then(response => console.log(response))
    .catch(error => console.error(error));
