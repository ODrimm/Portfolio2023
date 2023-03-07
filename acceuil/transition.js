const transition = document.querySelector(".transition");
const nextPage = document.querySelector(".nextPage");


setTimeout(() => {  
    transition.style.transition = "all 1s";
  
    transition.classList.toggle("hiddenBottom")
}, 500);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    nextPage.classList.remove("hiddenRight")

}else{
    setTimeout(() => {    
        nextPage.classList.remove("hiddenRight")
    }, 5000);
}


addEventListener("click", (event) => {
    nextPage.classList.remove("hiddenRight")
});


function changePage(href){
    setTimeout(() => {    
        location.href = href
    }, 1000);
    transition.classList.toggle("hiddenBottom")
}

