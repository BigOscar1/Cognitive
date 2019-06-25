//instancias
const cnxL = new Conexion();
const ioL =  new InterfaceL();

//variables globales

const login = document.querySelector('#login');
const pass = document.querySelector('#pass');
const form = document.querySelector('#loginform');

//funciones

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    ioL.login(login.value,pass.value)
});

