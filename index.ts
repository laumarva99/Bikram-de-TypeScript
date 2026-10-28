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

type Producto = {
    nombre: string;
    precio: number;
    descripcion?: string;
};

const teclado: Producto = {
    nombre: "Bastidor",
    precio: 25,
    descripcion: "Bastidor de pino"
};
const raton: Producto = {
    nombre: "Brocha",
    precio: 5
};

// Ejercicio 7

function mostrarProducto(producto: Producto): string {
    return `${producto.nombre}: ${producto.precio} €`;
}

console.log(mostrarProducto(teclado));
console.log(mostrarProducto(raton));

// Ejercicio 8

type EstadoTarea = "pendiente" | "en-proceso" | "completada";

let estado: EstadoTarea = "pendiente";
estado = "completada";

// estado = "cancelada";

// Ejercicio 9

interface Persona {
    nombre: string;
    edad: number;
    ciudad?: string;
}

const persona1: Persona = {
    nombre: "Alba",
    edad: 28,
    ciudad: "Albacete"
};

const persona2: Persona = {
    nombre: "Sara",
    edad: 43
};



function mostrarPersona(persona: Persona): void {
    if (persona.ciudad) {
        console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);
    } else {
        console.log(`${persona.nombre} tiene ${persona.edad} años`);
    }
}


mostrarPersona(persona1);
mostrarPersona(persona2);

// Ejercicio 10

interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
    disponible: boolean;
}

const libros: Libro[] = [{
    titulo: "Danza de Dragones",
    autor: "George R. R. Martin",
    paginas: 1152,
    disponible: true
}, {
    titulo: "El señor de los anillos: La Comunidad del Anillo",
    autor: "J. R. R. Tolkien",
    paginas: 576,
    disponible: false
}, {
    titulo: "El Principito",
    autor: "Saint-Exupéry",
    paginas: 96,
    disponible: true
}];



function estaDisponible(libro: Libro): boolean {
    return libro.disponible;
}

const disponibles = libros.filter(estaDisponible);
disponibles.forEach((libro) => console.log(libro.titulo));


// Ejercicio 11

function buscarUsuario(id: number): string | undefined {
    if (id === 1) {
        return "Alba";
    }
    return undefined;
}

const usuario = buscarUsuario(1);


if (usuario) {
    console.log(usuario.toUpperCase());
} else {
    console.log("Usuario no encontrado");
}

// Ejercicio 12

let dato: unknown = "hola";

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}

dato = 42;

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
} else {
    console.log("No es un texto:", dato);
}

// Ejercicio 13

type Usuario = {
    id: number;
    nombre: string;
    email: string;
    edad: number;
};

const cambios: Partial<Usuario> = { email: "nuevo@correo.com" };
const resumen: Pick<Usuario, "id" | "nombre"> = { id: 1, nombre: "Alba" };

console.log(cambios, resumen);

// Ejercicio 14

type UsuarioPublico = Omit<Usuario, "email">;

const publico: UsuarioPublico = { id: 2, nombre: "Sara", edad: 43 };

// Ejercicio 15

interface Configuracion {
    tema?: string;
    idioma?: string;
}

const configuracionCompleta: Required<Configuracion> = { tema: "oscuro", idioma: "es" };

const usuarioFijo: Readonly<Usuario> = {
    id: 3,
    nombre: "Marta",
    email: "marta@correo.com",
    edad: 19
};

console.log(configuracionCompleta, usuarioFijo);

// usuarioFijo.nombre = "Otra";



// Ejercicio 16

class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    ingresar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo = this.saldo + cantidad;
        } else {
            console.log("La cantidad debe ser positiva");
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20);


console.log(cuenta.consultarSaldo());


// Ejercicio 17

interface Reproducible {
    reproducir(): void;
}


class Cancion implements Reproducible {
    reproducir(): void {
        console.log("Sonando la canción...");
    }
}

class Video implements Reproducible {
    reproducir(): void {
        console.log("Reproduciendo el vídeo...");
    }
}

const lista: Reproducible[] = [new Cancion(), new Video()];
lista.forEach((elemento) => elemento.reproducir());

// Ejercicio 18

enum EstadoPedido {
    Pendiente,
    Enviado,
    Entregado
}

function mensajePedido(estado: EstadoPedido): string {
    if (estado === EstadoPedido.Pendiente) {
        return "Tu pedido está pendiente";
    } else if (estado === EstadoPedido.Enviado) {
        return "Tu pedido está en camino";
    } else {
        return "Tu pedido ha sido entregado";
    }
}


console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));

// Ejercicio 19

function primero<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }
    return array[0];
}

console.log(primero([10, 20, 30]));
console.log(primero(["hola", "adiós"]));
console.log(primero([]));

// Ejercicio 20

type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = { Ana: 8, Luis: 9.5, Marta: 7 };

async function obtenerMensaje(): Promise<string> {
    let mejorAlumno = "";
    let mejorNota = -1;

    for (const alumno in puntuaciones) {
        if (puntuaciones[alumno] > mejorNota) {
            mejorNota = puntuaciones[alumno];
            mejorAlumno = alumno;
        }
    }

    return `La mejor puntuación es de ${mejorAlumno} con un ${mejorNota}`;
}

obtenerMensaje().then((mensaje) => console.log(mensaje));