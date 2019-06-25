//variables globales
let result = 0;

let cronometro = 0;
let tiempo = 0;


let cronometroT = 0;
let tiempoT = 0;
let tiempoMax = 0;
let tiempoMin = 0;
let promedioT = 0;
let tiempoPro = 0;

let aciertos = 0;
let fallidos = 0;
let omitidos = 0;
let intentos = 0;




function initGame() {
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
  // let datosAtencion = {
  //     Aciertos: aciertos,
  //     Fallidos: fallidos,
  //     Omitidos: omitidos,
  //     TiempoSesion: tiempo,
  //     TiempoMaximo: tiempoMax,
  //     TiempoMinimo: tiempoMin,
  //     TiempoPromedio: tiempoPro
  // }

  clearInterval(cronometro);

  // console.log('Aciertos:', aciertos, 'Fallidos', fallidos, 'Omitidos:', omitidos, 'time session:',
  //     tiempo, 'max:', tiempoMax, 'min:', tiempoMin, 'promedio:', ((tiempoMax + tiempoMin) / 2));
  // alert('Aciertos:' + aciertos + 'Fallidos' + fallidos +  'Omitidos:' + omitidos + 'time session:' +
  //   tiempo + 'max:' + tiempoMax + 'min:' + tiempoMin + 'promedio:' + ((tiempoMax + tiempoMin) / 2));

  // sessionStorage.setItem('DatosAtencion', JSON.stringify(datosAtencion));

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



$(document).ready(function () {
  // are we running in native app or in a browser?

  window.isphone = false;
  if (document.URL.indexOf("http://") === -1 &&
    document.URL.indexOf("https://") === -1) {
    window.isphone = true;
  }

  if (window.isphone) {
    document.addEventListener("deviceready", onDeviceReady, false);
  } else {
    onDeviceReady();
  }
  initGame();
  initTime();
});




function onDeviceReady() {

  init();
  $("#0").draggable();
  $("#1").draggable();
  $("#2").draggable();
  $("#3").draggable();
  $("#4").draggable();
  $("#5").draggable();
  $("#6").draggable();
  $("#7").draggable();
  $("#8").draggable();
  $("#9").draggable();
  $("#div1").droppable({
    drop: function (ev) {

      ev.preventDefault();
      // var data = (ev.dataTransfer.getData("text").split('/')[3]).split('.')[0];
      let data = sessionStorage.getItem('id');
      // document.querySelector('#div1').appendChild(document.getElementById(data))
      // ev.target.appendChild(document.getElementById(data));
      document.getElementById(data).style.display = 'none';
      let suma = numero1 + numero2;
      if (result === suma) {
        ++intentos;
        if (intentos === 5) {
          stopTime();
          stop();
          // alert('Juego Terminado ' + 'session:' + tiempo);
          Swal.fire({
            title: 'Terminado',
            imageUrl: './dist/gif/goku.gif',
            confirmButtonText: '<i class=""></i> Resultados',
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(function(){ 
          location.href = "grafica.html"
      }, 2000);
        } else {
          promedio();
          Swal.fire({
            title: 'Correcto',
            type: 'success',
            html: 'Bien Hecho',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Listo',
            showConfirmButton: false,
            timer: 1000
        })
          aciertos++;
          setTimeout(() => {
            generarNumeros();
            numerosDinamicos();
            onDeviceReady();
            initTime();
          }, 1000);
        }


      } else {
        ++intentos;
        Swal.fire({
          title: 'Fallaste',
          type: 'error',
          html: `incorrecto el resultado es: ${suma}`,
          confirmButtonText: '<i class="fa fa-thumbs-down"></i> Siguiente',
          showConfirmButton: false,
          timer: 1000
      })
        fallidos++;
        if (intentos === 5) {
          stop();
          stopTime();
          // alert('Juego Terminado ' + 'session:' + tiempo);
          Swal.fire({
            title: 'Terminado',
            imageUrl: './dist/gif/goku.gif',
            confirmButtonText: '<i class=""></i> Resultados',
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(function(){ 
          location.href = "grafica.html"
      }, 2000);
        } else {
          promedio();
          setTimeout(() => {
            generarNumeros();
            numerosDinamicos();
            onDeviceReady();
            initTime();
          }, 1000);
        }

      }
    }

  });
}

function init() {
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
}



function touchHandler(event) {

  var touches = event.changedTouches,
    first = touches[0],
    type = "";
  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      let id = event.target.id;
      sessionStorage.setItem('id', id);
      result = Number(event.target.id);
      break;
    case "touchmove":
      type = "mousemove";
      break;
    case "touchend":
      type = "mouseup";

      break;
    default:
      return;
  }
  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(type, true, true, window, 1,
    first.screenX, first.screenY,
    first.clientX, first.clientY, false,
    false, false, false, 0 /*left*/ , null);
  first.target.dispatchEvent(simulatedEvent);

  event.preventDefault();

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
    resetTime();

  }
}