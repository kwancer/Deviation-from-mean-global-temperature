

async function chartIt() {
  const data = await getData()
  const ctx = document.getElementById('chart').getContext('2d');
  
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [{
        fill: false,
        label: 'Deviation from mean global temperature',
        data: data.ys,
        backgoundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(32,99,132,1)",
          
        
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function(value,index,values){
              return value + "°"
            }
          }
        }]
      }
    }
  });

}




async function getData() {
  const xs = []
  const ys =[]
  const response = await fetch("test.csv");
  const data = await response.text();


  const table = data.split("\n").slice(1)
  table.forEach(elt => {
    const row = elt.split(",")
    const year = row[0]
    xs.push(year)
    const temp = row[1]
    ys.push(temp)
    console.log(year, temp);
  })
  return {xs ,ys }
}


chartIt()