class InterfaceR {

    constructor(){

    }

 
    insertUser(){
        let radio = document.querySelector('input[name="radio-stacked"]:checked').value;
        let json = {
           first_name:nombres.value,
           last_name:apellidos.value,
           gender:radio,
           ci:ci.value,
           birth_day:fechaNac.value,
           phone:telefono.value,
           email:correo.value,
           photo:''
        }
        let url = cnxR.getUrl();
        url += '/ProEmp/user'
        cnxR.post(json,url)
        .then(res =>{
            console.log(res);
            formulario.reset();
            location.href = 'login.html';
        })
        .catch(err => {
            console.log(err);
            alert('No se pudo insertar')
        });
        
    }
}