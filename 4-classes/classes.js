/* 
    function Animal() {
        ...
    }
    const cat = new Animal();
*/

// Class declaration
class Task {
    // Constructor
    constructor(title) {
        if (! title) throw new Error("We need a title");
        this.title = title;
        this.completed = false;
    }
}

// Crear una instancia de Task -> Oro 220.000 - 380.000 rentadiaria hosp
// 82.000 
// Plata - 194.000 
// Ejemplo de lanzar el error throw: const task = new Task();
const task = new Task("Aprendiendo Javascript");
console.log(task);

// Como se hace para comprobar si una instancia es hija de una clase:
console.log(task instanceof Task);

const TasksList = class {
    constructor() {
        this.tasks = [
            { title: 'Aprender Firebase', completed: false },
            { title: 'Aprender CSS', completed: true },
            { title: 'Aprender HTML', completed: false },
        ]
    }

    // Propiedad Getters, no son funciones por ende no llevan argumentos
    get uncompleted() {
        return [...this.tasks].filter(task => !task.completed);
    }

    get completed() {
        return [...this.tasks].filter(task => task.completed);
    }

    // Setters, llevan el parametro con el nuevo valor para setear el nuevo valor
    set addTask(task) {
        this.tasks.push(task);
    }

    // Metodos
    search(search){
        // Puedo retornar un valor en especifico: return this.tasks.find(task => task.title.includes(search)).title;
        // Pero retornare todo el objeto
        return this.tasks.find(task => task.title.includes(search));
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    // metodo static
    static normaliceTask(title) {
        title = title.trim();
        return title.charAt(0).toUpperCase() + title.substring(1);
    }
}

// En el inspector de elementos del navegador vere la clase con los Getters.
console.log(TasksList);

const tareas = new TasksList()
console.log("Tareas incompletas: ", tareas.uncompleted)
console.log("Tareas completas: ", tareas.completed)

const tarea2 = new Task("Aprender Vuex");
tareas.addTask = {...tarea2};
console.log(tareas.uncompleted);

// Acceder a un metodo estatico, opcion 1:
//console.log(TasksList.normaliceTask("   esto es una tarea   "))

// Acceder a un metodo estatico, opcion 2:
console.log(tareas.constructor.normaliceTask("   esto es una tarea   "))

// Hacer subclase o extender una clase
// Con eso hereda todos los metodos como al constructor
class Reminder extends Task {

    constructor(title, date) {
        super(title)
        this.date = date;
    }

    get duration() {
        return `${this.title} a mas tardar en ${this.date}`;
    }
}


const producir = new Reminder("Estudiar Next.Js", "28 de Febrero 2022");
// Pero como para enviar el titulo del 1er parametro (titulo) a Task y la fecha a Reminder ?
// Rta: con un constructor

console.log(producir.duration);