const transition = document.querySelector(".transition");
const transitionB = document.querySelector(".transitionB");
const nextPage = document.querySelector(".nextPage");


setTimeout(() => {
    transition.style.transition = "all 1s";
    transition.classList.toggle("hiddenOpacity")
}, 500);

function changePage(href){
    if(href == "../competences"){
        setTimeout(() => {    
            location.href = href
        }, 1000);
        transitionB.classList.remove("hiddenBottom")
    }else{
        setTimeout(() => {    
            location.href = href
        }, 1000);
        transition.classList.remove("hiddenOpacity")
    }
    
}

