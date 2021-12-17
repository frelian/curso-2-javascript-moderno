// Comillas, dobles, simples y backticks
const hi = "Hello world";
const hi2 = 'Hello world';
const hi3 = `Hello world`;

const from = 'from Spain';
const final = hi + from;
console.log(final)

const final2 = `${hi} ${from}`;
console.log(final2)

function day() {
    return "friday";
}


const final3 = `${hi} ${from} on ${day()}`;
console.log(final3)

const multiline = `Hello
World`;

// Ejemplo de includes()
const email = "hola@gmaila.co";
if (email.includes("@"))  console.log("Valid email");

// StartsWith / EndsWith
if (email.endsWith("gmaila.co")) console.log("Valid email (EndsWith)")

// Mejorando el codigo usando includes, endsWith y arrow functions:
const validEmail = (email) => email.includes("@") && email.endsWith("gmaila.co")
if (validEmail(email)) console.log("Valid email ...")

// Tagged templates
const cat = {
    name: "Julian",
    color: "green",
    image: "https://i.pravatar.cc/200",
    city: "Moscu",
}

function makeTemplate(strings, ...keys) {
    console.log(strings, keys)

    return function(data){
        console.log(data);
        
        // porque tengo que user slice ? porque nose puede utilizar la primera directamente
        let slices = strings.slice();
        console.log(strings, slices);

        keys.forEach(function(key, index){
            slices[index] += data[key];
        })
        return slices.join("");
    }
}

const catTemplate = makeTemplate`
	<div class="cat">
		<h1>${"name"}</h1>
		<h3>${"color"} from ${"city"}</h3>
		<img src="${"image"}">
	</div>
`(cat);

const catElement = document.createElement("div");
catElement.innerHTML = catTemplate;
document.body.appendChild(catElement);