// Función declarada
function sayHi1(name){
    console.log(`Hi ${name}`);
}

// Expresión funcional
const sayHi2 = function(name){
    console.log(`Hi ${name}`);
}

// Funciones flecha (arrow funtions)
const sayHi3 = (name) => console.log(`Hi ${name}`);

// Return implícito
const double = num => num * 2;
console.log(double(2))

// Return explícito
const quadruple = num => {
    let value = double(num);

    return value * 2;
}

const num = quadruple(2);
console.log(num)

// No tienen this
const cat = {
	name: "Guizmo",
	tags: ["fucking", "amazing", "black", "cat", "😼"],
	showTags() {
		this.tags.forEach(tag => console.log(tag))
//		this.tags.forEach(function(tag) {
//			console.log(this === cat)
//		})
	}
};

cat.showTags();
