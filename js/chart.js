let ctx = document.getElementById('myChart').getContext('2d');



// Make label list


let labels=['2015', '2016', '2017', '2018', '2019', '2020'];
let values=[7.4,8.6,10.2,11.9,13.7,15.5];

Chart.defaults.color="#FFF";
Chart.defaults.borderColor	= "#a18868"
let borderWidth=2;
if(window.innerWidth>1600){
     Chart.defaults.font.size=22;
     borderWidth=5;
}
else Chart.defaults.font.size=14; 

let data={
    labels: labels,
    datasets: [{
        label: '% din comert realizat electronic',
        data: values,
        backgroundColor: [
            '#ff5517'
        ],
        borderColor: [
            '#ff5517'
        ],
        color: '#FFF',
        scaleFontColor: "#FFFFFF",

        borderWidth: borderWidth,
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
        responsive:true,
        scaleFontColor: "#FFFFFF",
        scales: {
            y: {
                display: true,

                gridLines: {
                    display: true,
                    color: "#FFFFFF"
                },
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