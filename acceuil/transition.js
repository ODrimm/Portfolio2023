const transition = document.querySelector(".transition"); 
const transitionB = document.querySelector(".transitionB"); 
const nextPage = document.querySelector(".nextPage"); 

setTimeout(() => {  //transition on page load
    transition.style.transition = "all 1s"; //make transition after load to avoid bug
    transition.classList.toggle("hiddenBottom")
}, 500);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if on mobile
    nextPage.classList.remove("hiddenRight") //button directly appear
}else{
    setTimeout(() => {    
        nextPage.classList.remove("hiddenRight") //else button appear after delay
    }, 5000);

    addEventListener("click", (event) => { //on click skip delay
        nextPage.classList.remove("hiddenRight") 
    });
}

function changePage(href){ //changepage
    
    if(href == "./competences"){
        setTimeout(() => {    
            location.href = href //load page after delay
        }, 1000);
        transitionB.classList.toggle("hiddenBottom") //make transition appear

    }else{
        setTimeout(() => {    
            location.href = href //load page after delay
        }, 1000);
        transition.classList.toggle("hiddenBottom") //make transition appear
    }
    
}

