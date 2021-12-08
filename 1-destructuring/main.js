// Destructuring matrices
const learn = ["Vue", "JavaScript", "Laravel", "CSS"];

/*
// Traditional way
var vue = learn[0];
var js = learn[1];
var laravel = learn[2];
var css = learn[3];
*/


// 1- Destructuring matriz
var [vue, javascript, laravel, css] = learn;

// 2- Destructuring strings
var address = "Calle la famosa, 40, #3 puerta 9, 35235, Colombia";
var [calle, numero, piso, postal, ciudad] = address.split(',');

// 3- Destructuring objects
const cat = {
    nameCat: "Guizmo",
    race: "Europea",
    color: "Black",
    age: 2,
    brother: {
        nameCat: "Rouco",
        race: "Europea",
        color: "White and black",
    },
};

// Tradicional
// var name = cat.name;
// var color = cat.color;

var {nameCat, age, color} = cat;
console.log(nameCat, age, color);

// How to know subObject ?
var {nameCat:brotherName, age:brotherAge = "Unknown", color:brotherColor} = cat.brother;
console.log(brotherName, brotherAge, brotherColor);

/*
// Replacement of default parameters
function greet(salute, name = "Camil", moment) {
    alert(`${salute} ${name}, happy ${moment}`);
}

greet("Hey", undefined, "afternoon");
*/

// Turning destructuring function
function greet({salute, name = "Camil", moment = "day"}) {
    alert(`${salute} ${name}, happy ${moment}`);
}

greet({salute: "Hello"})

