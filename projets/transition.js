const transition = document.querySelector(".transition");
const transitionBack = document.querySelector(".transitionB");
const museumSection = document.querySelectorAll(".museum-section");
const nextPage = document.querySelector(".nextPage");
const transitionContent = document.querySelector(".transition-content");

for(let i = 0; i < museumSection.length; i++){
    museumSection[i].classList.remove("hiddenMuseum")
}


function closeTransition(){
    transition.style.transition = "all 3s";
    transition.classList.add("hiddenTop")

    setTimeout(() => {    
        nextPage.classList.remove("hiddenOpacity")
    }, 5000);
}

addEventListener("click", (event) => {
    nextPage.classList.remove("hiddenOpacity")
});


setTimeout(() => {    
    transitionContent.classList.remove("hiddenOpacity")
}, 500);

function changePage(href){
    setTimeout(() => {    
        location.href = href
    }, 1000);
    transitionBack.classList.toggle("hiddenBottom")
}

