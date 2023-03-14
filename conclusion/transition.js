const transition = document.querySelector(".transition");
const nextPage = document.querySelector(".nextPage");


setTimeout(() => {
    transition.style.transition = "all 1s";
    transition.classList.toggle("hiddenOpacity")
}, 500);

function changePage(href){
    setTimeout(() => {    
        location.href = href
    }, 1000);
    transition.classList.remove("hiddenOpacity")
}

