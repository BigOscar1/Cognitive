var evolucion = document.getElementById('evolucion').getContext('2d');

let resultado  = [];
let puntuacion = [];
let numero = [];

puntuacion.push(0);


let session = sessionStorage.getItem('Datos');
let json = JSON.parse(session)
      json.forEach((x,index)=> {
        resultado.push(x);
        puntuacion.push(x.Aciertos * 20);    //para que muestre en el grafico
        numero.push(index);
      });

numero.push(numero.length);

generarGrafica = (resultados) => {
    let valor = '';
    let chart = new Chart(evolucion, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Resultados',
                data: puntuacion,
                backgroundColor: [
                    'rgba(255, 162, 0, 0)',
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 1)',                    
                ],
            }],
            labels: numero
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 80,
                        suggestedMax: 100
                    }
                }]
            },
            legend: {
                display: false,
            },
        }
    });
}
datos = [1,5,3,8];
datos.map(function(x){
    
})

generarGrafica([50,10,60,80,20])