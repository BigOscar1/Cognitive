//instancias
const cnxR = new Conexion();
const ioR = new InterfaceR();
//variables globales
const formulario = document.querySelector('#registro');

const nombres = document.querySelector('#hue-demo');
const apellidos = document.querySelector('#position-bottom-left');
const ci = document.querySelector('#position-top-right');
const fechaNac = document.querySelector('#datepicker-autoclose');
const correo = document.querySelector('#position-top');
const telefono = document.querySelector('#telefono');

//funciones

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    ioR.insertUser();
    
});