var ctx = document.getElementById("doughnut1").getContext("2d");



new Chart(ctx, {
  type: "doughnut",
  data: {
    // labels: [
    //   'Red',
    //   'Blue',
    //   'Yellow'
    // ],
    datasets: [{
      label: 'My First Dataset',
      data: [46, 54],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 4,
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    }],
    
  }
  
});

