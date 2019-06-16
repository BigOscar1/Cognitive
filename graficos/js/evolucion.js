var evolucion = document.getElementById('evolucion').getContext('2d');



generarGrafica = (resultados) => {
    let valor = '';
    let chart = new Chart(evolucion, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Resultados',
                data: [25,40,43,56,50],
                backgroundColor: [
                    'rgba(255, 162, 0, 0)',
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 1)',
                    'rgba(255, 162, 0, 1)',                    
                ],
            }],
            labels: ['January', 'February', 'March', 'April','mayo']
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