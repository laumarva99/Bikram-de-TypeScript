// Ejercicio 1

let nombre: string = "Laura";
let edad: number = 27;
let activo: boolean = true;

console.log(nombre, edad, activo);

// Laura 27 true
/* edad = "treinta";
index.ts:10:1 - error TS2322: Type 'string' is not assignable to type 'number'. */


// Ejercicio 2

const precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(lista: number[]): number {
    return lista.reduce((total, precio) => total + precio, 0);
}

console.log(sumarPrecios(precios));

// Ejercicio 3

function presentar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}`;
    }
    return `Hola, ${nombre}`;
}

console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));

// Ejercicio 4

function calcularDescuento(precio: number, porcentaje: number): number {
    return precio - (precio * porcentaje) / 100;
}

console.log(calcularDescuento(100, 20));

// Ejercicio 5

function mostrarId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

mostrarId("usr-25");
mostrarId(25);  

// Ejercicio 6

// Ejercicio 7

// Ejercicio 8

// Ejercicio 9

// Ejercicio 10

// Ejercicio 11

// Ejercicio 12

// Ejercicio 13

// Ejercicio 14

// Ejercicio 15

// Ejercicio 16

// Ejercicio 17

// Ejercicio 18

// Ejercicio 19

// Ejercicio 20