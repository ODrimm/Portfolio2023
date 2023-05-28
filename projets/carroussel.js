let data;
const content = document.querySelector(".content");
const category = document.querySelector(".category");
let currentCategory = "Tous";
const categories = [];

logJSONData();


async function logJSONData() {
    const response = await fetch("../Assets/Data/data.json");
    const jsonData = await response.json();
    data = jsonData;
    generateProj(jsonData);
}


function generateProj(jsonData) {

    for (let i = 0; i < jsonData.length; i++) {
        for (let j = 0; j < jsonData[i].category.length; j++) {
            if (!categories.includes(jsonData[i].category[j])) {
                categories.push(jsonData[i].category[j]);
            }
        }


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

    category.innerHTML += `
        <a class="category-element Tous active" onclick="return categoryChange('Tous');">Tous</a>
    `
    for (let i = 0; i < categories.length; i++) {
        category.innerHTML += `
        <a class="category-element ${(categories[i].replace(/\s/g, '')).replace("3", "trois")}" onclick="return categoryChange('${categories[i]}');">${categories[i]}</a>
        `
    }
}

function categoryChange(category) {
    currentCategory = category;
    content.innerHTML = "";
    let unactiveCategories = document.querySelectorAll(".category-element");
    for(let i = 0; i < unactiveCategories.length; i++){
        unactiveCategories[i].classList.remove("active");
    }
    document.querySelector("." + (currentCategory.replace(/\s/g, '')).replace("3", "trois")).classList.add("active");
    

    for (let i = 0; i < data.length; i++) {

        if (category == "Tous") {
            if (content.innerHTML == "") {
                content.innerHTML += `
            <a href="${data[i].link}" target="_blank" class="museum-element id${i} showMuseum" style="background-image: url('../Assets/Projets/${data[i].imageLink}');">
                <section class="museum-title">${data[i].description}</section>
                <section class="museum-description">${data[i].title}</section>
            </a>
            `

            } else {
                content.innerHTML += `
            <a href="${data[i].link}" target="_blank" class="museum-element id${i}" style="background-image: url('../Assets/Projets/${data[i].imageLink}');">
                <section class="museum-title">${data[i].description}</section>
                <section class="museum-description">${data[i].title}</section>
            </a>
            `
            }
        } else if (data[i].category.includes(category)) {

            if (content.innerHTML == "") {
                console.log("test");
                content.innerHTML += `
            <a href="${data[i].link}" target="_blank" class="museum-element id${i} showMuseum" style="background-image: url('../Assets/Projets/${data[i].imageLink}');">
                <section class="museum-title">${data[i].description}</section>
                <section class="museum-description">${data[i].title}</section>
            </a>
            `

            } else {
                content.innerHTML += `
            <a href="${data[i].link}" target="_blank" class="museum-element id${i}" style="background-image: url('../Assets/Projets/${data[i].imageLink}');">
                <section class="museum-title">${data[i].description}</section>
                <section class="museum-description">${data[i].title}</section>
            </a>
            `
            }
        }



    }
}

window.addEventListener("scroll", function () {
    if (data != undefined) {
        for (let i = 0; i < data.length; i++) {
            if(data[i].category.includes(currentCategory) || currentCategory == "Tous"){
                let museumElement = document.querySelector(".id" + i);
                let rect = museumElement.getBoundingClientRect();
    
                if (75 < rect.top && rect.top < 400) {
                    museumElement.classList.add("showMuseum");
                } else {
                    museumElement.classList.remove("showMuseum");
                }
            }
        }
    }
});
