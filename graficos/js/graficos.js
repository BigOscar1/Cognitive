$(document).ready(function(){
    var omision = document.getElementById('omision').getContext('2d');
    var omisionChart = new Chart(omision, {
        type: 'doughnut',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label  : ['oscar','sdasd'],
                data: [20, 6],
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
            }
        },
    });

    var aciertos = document.getElementById('aciertos').getContext('2d');
    var aciertosChart = new Chart(aciertos, {
        type: 'doughnut',
        data: {
            //  labels: ['Red', 'Blue'],
            datasets: [{
                label: '# of Votes',
                data: [10, 6],
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
            }
        }
    });
    var fallos = document.getElementById('fallos').getContext('2d');
    var fallosChart = new Chart(fallos, {
        type: 'doughnut',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [7, 6],
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
            }
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });
})
