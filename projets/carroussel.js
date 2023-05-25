

let data;

logJSONData();

async function logJSONData() {
    const response = await fetch("../Assets/Data/data.json");
    const jsonData = await response.json();
    data = jsonData;
    dataLog(jsonData);
}

function dataLog(jsonData) {
    console.log(data[0].name)
    
}
