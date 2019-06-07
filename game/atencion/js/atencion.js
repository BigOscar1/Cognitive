//varaibles globales
const randonName = document.querySelector('#nombres');
const ocultar = document.querySelector('#ocultar');
const nameSelct = document.querySelector('#nombre');
let nombreSelec = '';
let control = [];
let nom = [];
let contador = 0;
let aciertos = 0;


//funciones
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
        respuesta ? (contador++,aciertos++,alert('Correcto')) : (contador++,alert('Fallido'));
        if(contador === 4){
            alert('juego terminado')
        }else{
            reiniciar()
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
        respuesta ? (contador++,alert('Fallido')) : (contador++,aciertos++,alert('Correcto'));
        if(contador === 4){
            alert('juego terminado')
        }else{
            reiniciar()
        }
    }

   

}

function nivel(){
    setTimeout(() => {
        // visibility: hidden
        ocultar.style.display = 'none';
        nameSelct.style.display = 'block';
        const nombre = confimar();
        nameSelct.innerHTML = `<div class="item1">${nombre}</div>
        <div class="item1" id="confirmar" onclick="opcion(this)">SI</div>
        <div class="item1" id="negar" onclick="opcion(this)">NO</div>`
    }, 5000);
}

function reiniciar(){
    
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