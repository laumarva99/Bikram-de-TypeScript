"use strict";
// Ejercicio 1
let nombre = "Laura";
let edad = 27;
let activo = true;
console.log(nombre, edad, activo);
// Laura 27 true
/* edad = "treinta";
index.ts:10:1 - error TS2322: Type 'string' is not assignable to type 'number'. */
// Ejercicio 2
const precios = [12.5, 30, 8.99, 45];
function sumarPrecios(lista) {
    return lista.reduce((total, precio) => total + precio, 0);
}
console.log(sumarPrecios(precios));
// Ejercicio 3
function presentar(nombre, apellido) {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}`;
    }
    return `Hola, ${nombre}`;
}
console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));
// Ejercicio 4
function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje) / 100;
}
console.log(calcularDescuento(100, 20));
// Ejercicio 5
function mostrarId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
mostrarId("usr-25");
mostrarId(25);
const teclado = {
    nombre: "Bastidor",
    precio: 25,
    descripcion: "Bastidor de pino"
};
const raton = {
    nombre: "Brocha",
    precio: 5
};
// Ejercicio 7
function mostrarProducto(producto) {
    return `${producto.nombre}: ${producto.precio} €`;
}
console.log(mostrarProducto(teclado));
console.log(mostrarProducto(raton));
let estado = "pendiente";
estado = "completada";
const persona1 = {
    nombre: "Alba",
    edad: 28,
    ciudad: "Albacete"
};
const persona2 = {
    nombre: "Sara",
    edad: 43
};
function mostrarPersona(persona) {
    if (persona.ciudad) {
        console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);
    }
    else {
        console.log(`${persona.nombre} tiene ${persona.edad} años`);
    }
}
mostrarPersona(persona1);
mostrarPersona(persona2);
const libros = [{
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
function estaDisponible(libro) {
    return libro.disponible;
}
const disponibles = libros.filter(estaDisponible);
disponibles.forEach((libro) => console.log(libro.titulo));
// Ejercicio 11
function buscarUsuario(id) {
    if (id === 1) {
        return "Alba";
    }
    return undefined;
}
const usuario = buscarUsuario(1);
if (usuario) {
    console.log(usuario.toUpperCase());
}
else {
    console.log("Usuario no encontrado");
}
// Ejercicio 12
let dato = "hola";
if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}
dato = 42;
if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}
else {
    console.log("No es un texto:", dato);
}
const cambios = { email: "nuevo@correo.com" };
const resumen = { id: 1, nombre: "Alba" };
console.log(cambios, resumen);
const publico = { id: 2, nombre: "Sara", edad: 43 };
const configuracionCompleta = { tema: "oscuro", idioma: "es" };
const usuarioFijo = {
    id: 3,
    nombre: "Marta",
    email: "marta@correo.com",
    edad: 19
};
console.log(configuracionCompleta, usuarioFijo);
// usuarioFijo.nombre = "Otra";
// Ejercicio 16
class CuentaBancaria {
    saldo;
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo = this.saldo + cantidad;
        }
        else {
            console.log("La cantidad debe ser positiva");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20);
console.log(cuenta.consultarSaldo());
class Cancion {
    reproducir() {
        console.log("Sonando la canción...");
    }
}
class Video {
    reproducir() {
        console.log("Reproduciendo el vídeo...");
    }
}
const lista = [new Cancion(), new Video()];
lista.forEach((elemento) => elemento.reproducir());
// Ejercicio 18
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido[EstadoPedido["Pendiente"] = 0] = "Pendiente";
    EstadoPedido[EstadoPedido["Enviado"] = 1] = "Enviado";
    EstadoPedido[EstadoPedido["Entregado"] = 2] = "Entregado";
})(EstadoPedido || (EstadoPedido = {}));
function mensajePedido(estado) {
    if (estado === EstadoPedido.Pendiente) {
        return "Tu pedido está pendiente";
    }
    else if (estado === EstadoPedido.Enviado) {
        return "Tu pedido está en camino";
    }
    else {
        return "Tu pedido ha sido entregado";
    }
}
console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));
// Ejercicio 19
function primero(array) {
    if (array.length === 0) {
        return undefined;
    }
    return array[0];
}
console.log(primero([10, 20, 30]));
console.log(primero(["hola", "adiós"]));
console.log(primero([]));
const puntuaciones = { Ana: 8, Luis: 9.5, Marta: 7 };
async function obtenerMensaje() {
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
