class Persona {
    public nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
}

const p = new Persona("Ana", 25);

console.log(p.saludar());

class Empleado extends Persona {
    cargo: string;

    constructor(nombre: string, edad: number, cargo: string) {
        super(nombre, edad);
        this.cargo = cargo;
    }

    presentarse(): string {
        return `${this.saludar()}, trabajo como ${this.cargo}`;
    }
}

const e = new Empleado("Luis", 30, "Desarrollador");
console.log(e.presentarse());