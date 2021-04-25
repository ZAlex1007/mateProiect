let ctx = document.getElementById('myChart').getContext('2d');



// Make label list


let labels=['2015', '2016', '2017', '2018', '2019', '2020'];
let values=[7.4,8.6,10.2,11.9,13.7,15.5];

Chart.defaults.color="#FFF";

let data={
    labels: labels,
    datasets: [{
        label: '% din comert realizat electronic',
        data: values,
        backgroundColor: [
            'rgba(255, 99, 132, 1)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)'
        ],
        color: '#FFF',
        scaleFontColor: "#FFFFFF",

        borderWidth: 1,
        pointRadius: 5,
        pointHitRadius: 7,
    
    }]
};

let chart=new Chart(ctx, {
    type: 'line',
    data: data,
    color: '#FFF',
    scaleFontColor: "#FFFFFF",

    options: {
        color: '#FFF',
        // responsive:true,
        scaleFontColor: "#FFFFFF",
        scales: {
            y: {
                ticks: {
                    min: 0,
                    max: 100,
                    callback: function(value) {
                        return value + "%"
                    }
                },
                beginAtZero: true,
            }
        }
    },
})