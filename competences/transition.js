const transition = document.querySelector(".transition");
const transitionBack = document.querySelector(".transitionB");
const transitionContent = document.querySelector(".transition-content");
const nextPage = document.querySelector(".nextPage");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");

let clicked = false;
let pageChange = false;

function closeTransition() {
    transition.style.transition = "all 2s";

    transition.classList.add("hiddenOpacity")
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        nextPage.classList.remove("hiddenTop")

    }else{
        setTimeout(() => {
            clicked = true;
            setTimeout(() => {
                nextPage.classList.remove("hiddenTop")
            }, 5000);
        }, 1000);
    }
    
}

addEventListener("click", (event) => {
    if (clicked) {
        nextPage.classList.remove("hiddenTop")
        pageChange = true;
    }
});



setTimeout(() => {
    transitionContent.classList.remove("hiddenOpacity")
}, 500);

function changePage(href) {
    setTimeout(() => {
        location.href = href
    }, 1000);
    transitionBack.classList.toggle("hiddenBottom")
}

let i = 0;
let txt1 = "Après la création, ma deuxième passion : Apprendre. Découvrir des gens, des cultures et des lieux, faire preuve de curiosité, s’apporter de nouveaux outils. Grâce à cette passion, mes connaissances et compétences sont en perpétuelle évolution, alors il vaut mieux"
let speed = 50;

typeWriter()

function typeWriter() {

    addEventListener("click", (event) => {
        i = txt1.length
        para1.innerHTML = txt1
    });

    if (i < txt1.length) {
        para1.innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, (txt1.charAt(i) == "." ? 1000 : speed));
    } else {
        setTimeout(typeWriter2, 500);
    }
}

let i2 = 0;
let txt2 = "Garder un oeil dessus"
let speed2 = 25;

function typeWriter2() {
    if (i2 < txt2.length) {
        para2.innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed2);
    }
}

