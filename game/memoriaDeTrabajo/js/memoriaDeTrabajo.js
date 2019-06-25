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

let intentos = false;
let jugada1 = "";
let jugada2 = "";
let identificadorJ1 = "";
let identificadorJ2 = "";

let aciertos = 0;
let fallidos = 0;
let omitidos = 0;

let cronometro = 0;
let tiempo = 0;

let cronometroT = 0;
let tiempoT = 0;
let tiempoMax = 0;
let tiempoMin = 0;
let promedioT = 0;

let reinicio = document.querySelector('#reset');
let inicio = document.querySelector('#init');

//funciones

function init() {
    cronometro = setInterval(function () {
        timer()
    }, 1000);
    console.log(cronometro);
}

function timer() {
    tiempo++;
    console.log('cronometro:', tiempo);
}

function reset() {
    tiempo = 0;
}

function stop() {
    clearInterval(cronometro);
    console.log('tiempo:', tiempo);

    console.log('Aciertos:',aciertos,'Fallidos',fallidos,'Omitidos:',omitidos,'time session:',
                tiempo,'max:',tiempoMax,'min:',tiempoMin,'promedio:',((tiempoMax + tiempoMin)/2));
    // alert('Aciertos:' + aciertos + '' +'Fallidos:' + fallidos + '' + 'Omitidos:' + omitidos +
    //  'time session:' + '' + tiempo + '' + 'max:' + '' +tiempoMax +''+ 'min:' + ''+ tiempoMin+ ''
    //  +'promedio:' +((tiempoMax + tiempoMin)/2));
}


function initTime() {
    cronometroT = setInterval(function () {
        timerTime()
    }, 1000);
}

function timerTime() {
    tiempoT++;
    console.log('Time:', tiempoT);
}

function resetTime() {
    tiempoT = 0;
}

function stopTime() {
    clearInterval(cronometroT)
}



function iniciarJuego() {

    vaciar();

    let dato = document.getElementById("juego");
    dato.style.opacity = 1;
    reinicio.disabled = false;
    inicio.disabled = true;
    cartas.sort(function () {
        return Math.random() - 0.5
    });
    for (let i = 0; i < 16; i++) {
        let carta = cartas[i].nombre;
        let dato = document.getElementById(i.toString());
        dato.style.pointerEvents = "auto";
        dato.dataset.valor = carta;
    }

    mostar();
    setTimeout(() => {
        ocultar();
        init();
    }, 5000);

};

function resetearJuego() {
    ++omitidos;
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
    vaciar();
    mostar();
    stop();
    reset();
    setTimeout(() => {
        ocultar();
        init();
    }, 5000);
}

function girarCarta() {
    let evento = window.event;

    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;

    // debugger
    if (jugada1 !== "") {
        promedio();
        if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {
            aciertos++;
            console.log('aciertos:', aciertos);
            cartas[parseInt(identificadorJ1)].seleccion = true;
            cartas[parseInt(identificadorJ2)].seleccion = true;
            document.getElementById(identificadorJ1).style.pointerEvents = "none";
            document.getElementById(identificadorJ2).style.pointerEvents = "none";
            colorCambio(identificadorJ2, "blue", jugada2);
            vaciar();
            comprobar();
            resetTime();
        } else if (identificadorJ1 !== identificadorJ2) {
            fallidos++;
            console.log('fallidos:', fallidos);
            document.getElementById(identificadorJ1).style.pointerEvents = "auto";
            setTimeout(function () {
                colorCambio(identificadorJ1, "black", "?")
                colorCambio(identificadorJ2, "black", "?")
                vaciar();
                resetTime();
            }, 200);

            colorCambio(identificadorJ2, "blue", jugada2);
        }
    } else if (jugada2 !== "valor") {
        initTime();
        colorCambio(identificadorJ2, "blue", jugada2);
        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
        document.getElementById(identificadorJ2).style.pointerEvents = "none";

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
        stop();
        intentos = true;
        Swal.fire({
            title: 'Terminado',
            imageUrl: './dist/gif/goku.gif',
            // imageWidth: 400,
            // imageHeight: 200,   
            confirmButtonText:'<i class=""></i> Resultados',
            showConfirmButton: false,
            timer: 2000
        })
        setTimeout(function(){ 
            location.href = "grafica.html"
        }, 2000);
        omitidos = -1;
        for (let i = 0; i < 16; i++) {
            cartas[parseInt(i)].seleccion = false;
        }
    }
}

function mostar() {
    setTimeout(function () {
        for (let i = 0; i < 16; i++) {
            const elemento = document.getElementById(`${i}`);
            const id = elemento.id;
            const valor = elemento.dataset.valor
            colorCambio(id, "blue", valor);
        }
    }, 200);
}

function ocultar() {
    // setTimeout(function () {
    for (let i = 0; i < 16; i++) {
        const elemento = document.getElementById(`${i}`);
        const id = elemento.id;
        colorCambio(id, "black", '?');
    }
    // }, 1000);
}

function promedio() {
    stopTime();
    if (tiempoT !== 0) {
        if ((tiempoMax !== 0) && (tiempoMin !== 0)) {
            if (tiempoT > tiempoMax) {
                tiempoMax = tiempoT;
            } else if (tiempoT < tiempoMin) {
                tiempoMin = tiempoT;
            }

        } else {
            tiempoMax = tiempoT;
            tiempoMin = tiempoT;
        }

        console.log('max:', tiempoMax, 'min:', tiempoMin);
    }

}