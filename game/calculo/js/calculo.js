// variables globalse 
const op = document.querySelector('#operaciones');
const num = document.querySelector('#numeros');

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
        alert('correcto');
        setTimeout(() => {
            generarNumeros();
            numerosDinamicos(); 
        }, 1000);

    }else{
        alert('incorrecto el resultado es:' + suma);
        setTimeout(() => {
            generarNumeros();
            numerosDinamicos(); 
        }, 1000);
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
            op.innerHTML = `<img  src="./game/calculo/${numero1}.jpg"  width="20" height="20">
            <br>
            <label for="suma"><h4>+</h4></label>
            <img  src="./game/calculo/${numero2}.jpg" width="20" height="20">
            <br>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`;
            bool = false;
        }
       
    }
  
};

const numerosDinamicos = ()=>{
    let numeros = '';
    for (let i = 0; i < 10; i++) {
    numeros+=` <img id="${i}" src="./game/calculo/${i}.jpg" draggable="true" ondragstart="drag(event)" width="20" height="20">`
    }
    num.innerHTML= numeros;
}

document.addEventListener('DOMContentLoaded',()=>{
    generarNumeros();
    numerosDinamicos();
});

