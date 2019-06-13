var evolucion = document.getElementById('evolucion').getContext('2d');



generarGrafica = (resultados) => {
    let valor = '';
    let chart = new Chart(evolucion, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Resultados',
                data: function(){
                    for(let v = 0; v < resultados.length; v++){
                    valor += resultados[v]+ ',' ;
                    return [valor.substring()]
                }},
                backgroundColor: [
                    'rgba(255, 162, 0, 1)',
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