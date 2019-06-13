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
  });
  let result = 0;
  
  
  
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
        if(result === suma){
            alert('correcto');
            setTimeout(() => {
                generarNumeros();
                numerosDinamicos(); 
                onDeviceReady();
            }, 1000);
    
        }else{
            alert('incorrecto el resultado es:' + suma);
            setTimeout(() => {
                generarNumeros();
                numerosDinamicos();
                onDeviceReady();
   
            }, 1000);
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
        sessionStorage.setItem('id',id);
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