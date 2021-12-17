function randomNum() {
    return Math.floor(Math.random() * 2) + 1;
}

// 4) Tambien se puede asignar no un valor primitivo sino una funcion a num2
function add(num1 = 1, num2 = randomNum()) {
    // JS por debajo:
    // var num1 = 1;
    // var num2 = undefined

    // 1)
    // Antes lo que se hacia era comprobar
    // if (!num1 || !num2) return;

    // 2)
    // O tambien se asigna valor si lleva vacio
    // !num1 && (num1 = 0);
    // !num2 && (num2 = 0);

    // 3)
    // Lo mas sencillo es asignarle un valor en los parametros.

    return num1 + num2;
}

console.log(add(1))

// Ejemplo: Si quiero usar el valor por defecto de num1
console.log(add(undefined, 5))