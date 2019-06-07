let cartas = new Array({
    nombre: '1',
    seleccion: false
}, {
    nombre: '2',
    seleccion: false
}, {
    nombre: '3',
    seleccion: false
}, {
    nombre: '4',
    seleccion: false
}, {
    nombre: '5',
    seleccion: false
}, {
    nombre: '6',
    seleccion: false
}, {
    nombre: '7',
    seleccion: false
}, {
    nombre: '8',
    seleccion: false
}, {
    nombre: '1',
    seleccion: false
}, {
    nombre: '2',
    seleccion: false
}, {
    nombre: '3',
    seleccion: false
}, {
    nombre: '4',
    seleccion: false
}, {
    nombre: '5',
    seleccion: false
}, {
    nombre: '6',
    seleccion: false
}, {
    nombre: '7',
    seleccion: false
}, {
    nombre: '8',
    seleccion: false
});

let intentos = 0;
let jugada1 = "";
let jugada2 = "";
let identificadorJ1 = "";
let identificadorJ2 = "";

function iniciarJuego() {
    let dato = document.getElementById("juego");
    dato.style.opacity = 1;

    cartas.sort(function () {
        return Math.random() - 0.5
    });
    for (let i = 0; i < 16; i++) {
        let carta = cartas[i].nombre;
        let dato = document.getElementById(i.toString());
        dato.style.pointerEvents = "auto";
        dato.dataset.valor = carta;
    }
};

function resetearJuego() {
    cartas.sort(function () {
        return Math.random() - 0.5
    });
    for (let i = 0; i < 16; i++) {
        let carta = cartas[i].nombre;
        let dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        dato.style.pointerEvents = "auto";
        colorCambio(i, 'black', '?');
    }
}

function girarCarta() {
    let evento = window.event;

    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;

    // debugger
    if (jugada1 !== "") {

        if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {

            cartas[parseInt(identificadorJ1)].seleccion = true;
            cartas[parseInt(identificadorJ2)].seleccion = true;
            document.getElementById(identificadorJ1).style.pointerEvents = "none";
            document.getElementById(identificadorJ2).style.pointerEvents = "none";
            colorCambio(identificadorJ2, "blue", jugada2);
            vaciar();
            comprobar();
        } else if (identificadorJ1 !== identificadorJ2) {
            let self = this;
            setTimeout(function () {
                colorCambio(identificadorJ1, "black", "?")
                colorCambio(identificadorJ2, "black", "?")
                vaciar()
            }, 200);

            colorCambio(identificadorJ2, "blue", jugada2);
        }
    } else if (jugada2 !== "valor") {

        colorCambio(identificadorJ2, "blue", jugada2);

        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
    }
};

function vaciar() {
    jugada1 = "";
    jugada2 = "";

    identificadorJ1 = "";
    identificadorJ2 = "";
}

function colorCambio(posicion, color, contenido) {
    document.getElementById(posicion).style.backgroundColor = color;
    document.getElementById(posicion).innerHTML = contenido;
}

function comprobar() {
    let aciertos = 0;
    for (let i = 0; i < 16; i++) {
        if (cartas[i].seleccion == true) {
            aciertos++;
        }

    }

    if (aciertos == 16) {
        // document.getElementById("juego").innerHTML = "GANASTE";(
        alert('GANASTE')
    }
}

function resetearJuego() {
    cartas.sort(function () {
        return Math.random() - 0.5
    });
    for (let i = 0; i < 16; i++) {
        let carta = cartas[i].nombre;
        let dato = document.getElementById(i.toString());
        dato.style.pointerEvents = "auto";
        dato.dataset.valor = carta;
        colorCambio(i, 'black', '?');
    }
};