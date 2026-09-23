"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
const p = new Persona("Ana", 25);
console.log(p.saludar());
class Empleado extends Persona {
    cargo;
    constructor(nombre, edad, cargo) {
        super(nombre, edad);
        this.cargo = cargo;
    }
    presentarse() {
        return `${this.saludar()}, trabajo como ${this.cargo}`;
    }
}
const e = new Empleado("Luis", 30, "Desarrollador");
console.log(e.presentarse());
//# sourceMappingURL=index.js.map