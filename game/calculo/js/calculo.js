// variables globalse 
const op = document.querySelector('#operaciones');
const num = document.querySelector('#numeros');
const num2 = document.querySelector('#numeros2');


let numero1 = 0;
let numero2 = 0;
let resultado = 0;


//funciones 

function allowDrop(ev) {
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
    resultado = Number(ev.target.id);
    
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    let suma = numero1 + numero2;
    if(resultado === suma){
        // alert('correcto');
        // setTimeout(() => {
        //     generarNumeros();
        //     numerosDinamicos(); 
        // }, 1000);
        Swal.fire({
            title: 'Correcto',
            type: 'success',
            html: 'Bien Hecho',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Listo',
            showConfirmButton: false,
            timer: 1000
        })
        generarNumeros();
        numerosDinamicos(); 

    }else{
        // alert('incorrecto el resultado es:' + suma);
        // setTimeout(() => {
        //     generarNumeros();
        //     numerosDinamicos(); 
        // }, 1000);
        Swal.fire({
            title: 'Fallaste',
            type: 'error',
            html: `incorrecto el resultado es: ${suma}`,
            confirmButtonText: '<i class="fa fa-thumbs-down"></i> Siguiente',
            showConfirmButton: false,
            timer: 1000
        })
        generarNumeros();
        numerosDinamicos(); 
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const generarNumeros = () => {
    let bool = true;
    numero1 = getRandomInt(1, 9);
    numero2 = getRandomInt(1, 9);
    let suma = numero1 + numero2;
    while(bool){
        if(suma >= 10){
            numero1 = getRandomInt(1, 9);
            numero2 = getRandomInt(1, 9);
            suma = numero1 + numero2; 
            console.log(suma);
        }else{
            op.innerHTML = `<img class="numpregunta" src="./game/calculo/${numero1}.jpg" >
            <label class="simbolo" for="suma">+</label>
            <img class="numpregunta" src="./game/calculo/${numero2}.jpg">
            <div id="div1"></div>`;
            bool = false;
        }
       
    }
  
};

const numerosDinamicos = ()=>{
    let numeros = '';
    let numeros2 = '';

    for (let i = 0; i < 10; i++) {
        if(i < 5){
            numeros+=` <img  class="imgSelect-" id="${i}" src="./game/calculo/${i}.jpg">`
        }else{
            numeros2+=` <img  class="imgSelect-" id="${i}" src="./game/calculo/${i}.jpg">`
        }
    }
    num.innerHTML= numeros;
    num2.innerHTML= numeros2;    
}

document.addEventListener('DOMContentLoaded',()=>{
    generarNumeros();
    numerosDinamicos();
});

