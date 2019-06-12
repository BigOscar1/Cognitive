var ctx = document.getElementById('omision').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [20, 6],
            backgroundColor: [
                'rgba(255, 162, 0, 1)',
                'rgba(255, 162, 0, 0.2)',
            ],
            borderColor: [
                'rgba(255, 162, 0, 1)',
                'rgba(255, 162, 0, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [10, 6],
            backgroundColor: [
                'rgba(0, 152, 0, 1)',
                'rgba(0, 152, 0, 0.2)',
            ],
            borderColor: [
                'rgba(0, 152, 0, 1)',
                'rgba(0, 152, 0, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
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
                'rgba(255, 99, 132, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         }
        //     }]
        // }
    }
});