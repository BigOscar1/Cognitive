    let datosAciertos = [0,0];
    let datosError = [0,0];
    let datosOmision = [0,0];
    let iteraciones;
    let PuntuacionTotal = 0;
    let valor = 0;

  let datos = JSON.parse(sessionStorage.getItem("DatosAtencion"));
    console.log(datos);
    datosAciertos[1] = datos.Aciertos; 
    datosError[1] = datos.Fallidos;
    datosOmision[1] = datos.Omitidos;
    
puntuacion = (bien,mal,omision) => {
    iteraciones = 0;
    if(bien != null || mal != null || omision != null){
 
        iteracionesTotaltes = bien + mal + omision;
        iteracionesAciertos = iteracionesTotaltes - bien;
        iteracionesFallos =  iteracionesTotaltes - mal;
        iteracionesOmision = iteracionesTotaltes - omision
 
        datosAciertos[0] = bien;
        datosAciertos[1] = iteracionesAciertos
        datosError[0] = mal;
        datosError[1] = iteracionesFallos;
        datosOmision[0] = omision;
        datosOmision[1] = iteracionesOmision

        PuntuacionTotal = (iteracionesTotaltes * 20)  / (iteracionesTotaltes/datosAciertos[0]) + 0 //tiempo
       
    }
}

tiempo = (total,promedio,maximo,minimo) => {
    document.getElementById('tiempoTotal').textContent = total;
    document.getElementById('tiempoReaccionMedia').textContent = promedio;
    document.getElementById('tiempoMaximo').textContent = maximo;
    document.getElementById('tiempoMinomo').textContent = minimo;
}



puntuacion(datosAciertos[1],datosError[1],datosOmision[1]);
tiempo(datos.TiempoSesion,datos.TiempoPromedio,datos.TiempoMaximo,datos.TiempoMinimo);


animacion = () => {
    var $progressBar = $('.progress');

    var progress = 0;      // initial value of your progress bar
    var timeout = 10;      // number of milliseconds between each frame
    var increment = .5;    // increment for each frame
    var maxprogress = 110; // when to leave stop running the animation
    
    
        var timerId, percent;
    
      // reset progress bar
      percent = 0;
      $('#btn').attr('disabled', true);
      $('#progress').css('width', '0px').addClass('progress-bar-animated active');
      $('#progress').html('<span class="spinner-border spinner-border-sm ml-auto"></span>');
    
      timerId = setInterval(function() {
    
        // increment progress bar
        percent += 10;
        $('#progress').css('width', percent + '%');
    
        if (percent >= PuntuacionTotal) {
          clearInterval(timerId);
          $('#btn').attr('disabled', false);
          $('#progress').removeClass('progress-bar-animated active').html(`Puntuacion ${PuntuacionTotal}%`);
        }
      }, 10);
}


animacion()



    var omision = document.getElementById('omision').getContext('2d');
    var omisionChart = new Chart(omision, {
        type: 'doughnut',
        data: {
            labels: ['omision', 'No'],
            datasets: [{
                data: [datosOmision[0],datosOmision[1]],
                backgroundColor: [
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 162, 0, 0.2)',
                    'rgba(255, 162, 0, 0.2)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutouPercentage: 50,
            animation: {
                animateScale: true
            },
            legend: {
                display: false,
            },
        },
    });

    var aciertos = document.getElementById('aciertos').getContext('2d');
    var aciertosChart = new Chart(aciertos, {
        type: 'doughnut',
        data: {
            labels: ['Aciertos', 'No'],
            datasets: [{
                label: '# of Votes',
                data: [datosAciertos[0], datosAciertos[1]],
                backgroundColor: [
                    'rgba(0, 152, 0, 1)',
                    'rgba(0, 152, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 152, 0, 1)',
                    'rgba(0, 152, 0, 0.2)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                animateScale: true
            },
            legend: {
                display: false,
            },
        }
    });
    var fallos = document.getElementById('fallos').getContext('2d');
    var fallosChart = new Chart(fallos, {
        type: 'doughnut',
        data: {
            labels: ['Fallo', 'No'],
            datasets: [{
                label: '# of Votes',
                data: [datosError[0], datosError[1]],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                animateScale: true
            },
            legend: {
                display: false,
            },
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

