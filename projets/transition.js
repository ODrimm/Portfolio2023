const transition = document.querySelector(".transition");
const transitionBack = document.querySelector(".transitionB");
const transitionBack2 = document.querySelector(".transitionB2");
const museumSection = document.querySelectorAll(".museum-section");
// const nextPage = document.querySelector(".nextPage");
const transitionContent = document.querySelector(".transition-content");

for(let i = 0; i < museumSection.length; i++){
    museumSection[i].classList.remove("hiddenMuseum")
}

function closeTransition(){

    transition.style.transition = "all 3s";
    transition.classList.add("hiddenTop")

    if (window.matchMedia("(max-width: 800px)").matches) {

        // nextPage.classList.remove("hiddenOpacity")
        
    }else{
        setTimeout(() => {    
            // nextPage.classList.remove("hiddenOpacity")
        }, 5000);
    }
}

addEventListener("click", (event) => {
    // nextPage.classList.remove("hiddenOpacity")
});

setTimeout(() => {    
    transitionContent.classList.remove("hiddenOpacity")
}, 500);

function changePage(href){
    if(href == "../competences"){
        setTimeout(() => {    
            location.href = href
        }, 1000);
        transitionBack.classList.toggle("hiddenBottom")
    }else{
        setTimeout(() => {    
            location.href = href
        }, 1000);
        transitionBack2.classList.toggle("hiddenBottom")
    }
    
}

