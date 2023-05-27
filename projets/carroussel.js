let data;
const content = document.querySelector(".content");

logJSONData();

async function logJSONData() {
    const response = await fetch("../Assets/Data/data.json");
    const jsonData = await response.json();
    data = jsonData;
    dataLog(jsonData);
}

function dataLog(jsonData) {
    console.log(jsonData[3]);

    for (let i = 0; i < jsonData.length; i++) {
        content.innerHTML += `
        <section class="museum-element" style="background-image: url('../Assets/Projets/${jsonData[i].imageLink}');">
            <section class="museum-title">${jsonData[i].title}</section>
        </section>
        `
    }

}
