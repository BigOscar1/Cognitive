let tipoPlanificacion = "";

$(".custom-control-input").on('change', function () {
    if ($(this).is(':checked')) {
        tipoPlanificacion = $(this).val();
    }
});

$('#guardar').click(function () {
    if (tipoPlanificacion == 'Doctor') {
        Swal.fire({
            title: 'Autentificacion',
            html: `<div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-success text-white" id="basic-addon1"><i><img class="icons" src="./dist/css/icons/brain/login.png" alt="" srcset=""></i></span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" required="">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-warning text-white" id="basic-addon2"><i><img  class="icons" src="./dist/css/icons/brain/password.png" alt="" srcset=""></i></span>
                </div>
                <input type="password" class="form-control form-control-lg" placeholder="Contraseña" aria-label="Password" aria-describedby="basic-addon1" required="">
            </div>`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ingresar',
            cancelButtonText: 'Salir'
        })
    }
});

$('#cancelar').click(function () {
    location.href = "./index.html";
});