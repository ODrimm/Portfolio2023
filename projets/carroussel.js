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

    for (let i = 0; i < jsonData.length; i++) {
        if (i == 0) {
            content.innerHTML += `
            <a href="${jsonData[i].link}" target="_blank" class="museum-element id${i} showMuseum" style="background-image: url('../Assets/Projets/${jsonData[i].imageLink}');">
                <section class="museum-title">${jsonData[i].description}</section>
                <section class="museum-description">${jsonData[i].title}</section>
            </a>
            `

        } else {
            content.innerHTML += `
            <a href="${jsonData[i].link}" target="_blank" class="museum-element id${i}" style="background-image: url('../Assets/Projets/${jsonData[i].imageLink}');">
                <section class="museum-title">${jsonData[i].description}</section>
                <section class="museum-description">${jsonData[i].title}</section>
            </a>
            `
        }

    }

}

const docHeight = document.body.offsetHeight;

window.addEventListener("scroll", function () {
    console.log(docHeight);
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            let museumElement = document.querySelector(".id" + i);
            let rect = museumElement.getBoundingClientRect();

            if (75 < rect.top && rect.top < 400) {
                museumElement.classList.add("showMuseum");
            } else {
                museumElement.classList.remove("showMuseum");
            }
        }
    }

});
