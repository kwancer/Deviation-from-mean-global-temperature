async function getData(){
  const response = await fetch("test.csv");
  const data = await response.text();
  

  const table = data.split("\n").slice(1)
  table.forEach(elt => {
    const row = elt.split(",")
    const year = row[0]
    const temp = row[1]
    console.log(year, temp); 
  })
  
}

getData()