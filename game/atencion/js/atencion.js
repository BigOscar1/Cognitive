//varaibles globales
const randonName = document.querySelector('#nombres');
const ocultar = document.querySelector('#ocultar');
const nameSelct = document.querySelector('#nombre');
let nombreSelec = '';
let control = [];
let nom = [];
let contador = 0;
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
let tiempoPro = 0;



//funciones

function init() {
    cronometro = setInterval(function () {
        timer()
    }, 1000);
    console.log(cronometro);
}

function timer() {
    tiempo++;
    console.log(tiempo);
}

function reset() {
    tiempo = 0;
}

function stop() {
    let datosAtencion = {
        Aciertos: aciertos,
        Fallidos: fallidos,
        Omitidos: omitidos,
        TiempoSesion: tiempo,
        TiempoMaximo: tiempoMax,
        TiempoMinimo: tiempoMin,
        TiempoPromedio: tiempoPro
    }

    clearInterval(cronometro);

    console.log('Aciertos:', aciertos, 'Fallidos', fallidos, 'Omitidos:', omitidos, 'time session:',
        tiempo, 'max:', tiempoMax, 'min:', tiempoMin, 'promedio:', ((tiempoMax + tiempoMin) / 2));
    // alert('Aciertos:',aciertos,'Fallidos',fallidos,'Omitidos:',omitidos,'time session:',
    // tiempo,'max:',tiempoMax,'min:',tiempoMin,'promedio:',((tiempoMax + tiempoMin)/2));

    sessionStorage.setItem('DatosAtencion', JSON.stringify(datosAtencion));

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



const nombres = async () => {
    const urlNombres = await fetch('https://uinames.com/api/?region=colombia&amount=10');
    const datos = await urlNombres.json();
    console.log(datos);
    return datos;
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
    var name = capFirst(nom[getRandomInt(0, nom.length)]);
    return name;
}

const llenarDatos = () => {

    let nombre = '';
    let div = '';
    let bool = true;
    for (let i = 0; i < 4; i++) {
        nombre = generateName();
        if (control.length > 0) {
            while (bool) {
                for (let i = 0; i < control.length; i++) {
                    if ((nombre === control[i]) || (nombre === '')) {
                        nombre = generateName();
                        bool = true;
                        break;
                    } else {
                        bool = false;
                    }
                };

            }
            if (bool === false) {
                control.push(nombre);
                div += `<div class="item">${nombre}</div>`;
                bool = true;
            };


        } else {
            if (nombre === '') {
                nombre = generateName();
                control.push(nombre);
                div += `<div class="item">${nombre}</div>`;

            } else {
                control.push(nombre);
                div += `<div class="item">${nombre}</div>`;
            }

        }
    }

    randonName.innerHTML = div;

}

const obtenerNombre = async () => {
    await nombres()
        .then(res => {
            res.forEach(x => {
                nom.push(x.name)
            });
        })
        .catch(err => console.log(err));

}

const datos = () => {

    let bool = true;

    while (bool) {

        if (nom.length === 0) {
            obtenerNombre()
                .then(() => {
                    llenarDatos()
                })
                .catch(err => {
                    console.log(err);
                    obtenerNombre()
                        .then(() => {
                            llenarDatos()
                        })
                })
            bool = true;
            break;
        } else {
            bool = false;
            break;
        }
    }
}

const confimar = () => {

    let bool = true;
    while (bool) {
        if (nombreSelec === '') {
            nombreSelec = generateName();

        } else {
            bool = false;
            break;
        }
    }
    return nombreSelec;
}



document.addEventListener('DOMContentLoaded', () => {
    datos();
    nivel();
    init();
});


function opcion(obj) {
    console.log(obj);
    const res = obj.id;
    console.log(res);
    let respuesta = true;
    if (res === 'confirmar') {
        for (let i = 0; i < control.length; i++) {
            if (nombreSelec === control[i]) {
                respuesta = true;
                break;
            } else {
                respuesta = false;
            }

        }
        console.log(respuesta);
        respuesta ? (contador++, aciertos++,
            Swal.fire({
                title: 'Correcto',
                type: 'success',
                html: 'Bien Hecho',
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Listo',
                showConfirmButton: false,
                timer: 1000
            })
        ) : (fallidos++, contador++,
            Swal.fire({
                title: 'Fallido',
                type: 'error',
                html: 'Fallaste',
                confirmButtonText: '<i class="fa fa-thumbs-down"></i> Siguiente',
                showConfirmButton: false,
                timer: 1000
            })
        );
        if (contador === 5) {
            Swal.fire({
                title: 'Terminado',
                imageUrl: './dist/gif/goku.gif',
                confirmButtonText: '<i class=""></i> Resultados',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(function () {
                location.href = "grafica.html"
            }, 2000);

            promedio();
            stop();
        } else {
            promedio();
            reiniciar();
        }


    } else if (res === 'omitir') {
        contador++;
        if (contador === 5) {
            omitidos++;
            Swal.fire({
                title: 'Terminado',
                imageUrl: './dist/gif/goku.gif',
                confirmButtonText: '<i class=""></i> Resultados',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(function () {
                location.href = "grafica.html"
            }, 2000);
            promedio();
            stop();
        } else {
            omitidos++;
            promedio();
            reiniciar();
        }

    } else {
        for (let i = 0; i < control.length; i++) {
            if (nombreSelec === control[i]) {
                respuesta = true;
                break;
            } else {
                respuesta = false;
            }

        }
        respuesta ? (fallidos++, contador++,
            Swal.fire({
                title: 'Fallido',
                type: 'error',
                html: 'Fallaste',
                confirmButtonText: '<i class="fa fa-thumbs-down"></i> Siguiente',
                showConfirmButton: false,
                timer: 1000
            })
        ) : (contador++, aciertos++,
            Swal.fire({
                title: 'Correcto',
                type: 'success',
                html: 'Bien Hecho',
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Listo',
                showConfirmButton: false,
                timer: 1000
            })
        );
        if (contador === 5) {
            Swal.fire({
                title: 'Terminado',
                imageUrl: './dist/gif/goku.gif',
                // imageWidth: 400,
                // imageHeight: 200,   
                confirmButtonText: '<i class=""></i> Resultados',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(function () {
                location.href = "grafica.html"
            }, 2000);
            promedio();
            stop();
        } else {
            promedio();
            reiniciar();
        }
    }
}

function nivel() {

    try {
        setTimeout(() => {
            // visibility: hidden
            ocultar.style.display = 'none';
            nameSelct.style.display = 'block';
            const nombre = confimar();
            nameSelct.innerHTML = `<div class="item1">${nombre}</div>
            <div class="item1" id="confirmar" onclick="opcion(this)">SI</div>
            <div class="item1" id="negar" onclick="opcion(this)">NO</div>
            <div class="item1" id="omitir" onclick="opcion(this)">OMITIR</div>`;
            initTime();
        }, 5000);

    } catch (error) {
        console.log(error);
        initTime();

    }

}

function reiniciar() {
    resetTime();
    nombreSelec = '';
    nom = [];
    control = [];
    datos();
    setTimeout(() => {
        nameSelct.style.display = 'none';
        ocultar.style.display = 'block';
        nivel();
    }, 1000);
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
        tiempoPro = (tiempoMax + tiempoMin) / 2;
        console.log('max:', tiempoMax, 'min:', tiempoMin);
        console.log('Tiempo Promedio: ' + tiempoPro);
    }
}