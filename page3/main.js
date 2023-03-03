//////////////////// TEXT MOVEMENT \\\\\\\\\\\\\\\\\\\\\\\\\\\

const diag = windowDiag();
const maxSize = 24;
const minSize = -5;
const amplSize = maxSize - minSize;


document.addEventListener('mousemove', event => {
    //DIST MOUSE / ELEMENT LEFT AND RIGHT
    objectTransform(".competence1");
    objectTransform(".competence2");
    objectTransform(".competence3");
    objectTransform(".competence4");
    objectTransform(".competence5");
    objectTransform(".competence6");
    objectTransform(".competence7");
    objectTransform(".competence8");
})

function windowDiag() {
    return Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) / 2;
}

function objectTransform(compSelector) {
    const comp = document.querySelector(compSelector + " .titre");
    var rect = comp.getBoundingClientRect();
    let distY = (event.clientY - (rect.top + comp.clientHeight / 2))
    let distXL = (event.clientX - (rect.left))
    let distXR = (event.clientX - (rect.left + comp.clientWidth))

    let distR = (Math.abs(distXR) + Math.abs(distY)) / 2
    let distL = (Math.abs(distXL) + Math.abs(distY)) / 2

    let dist;
    if (document.querySelector(compSelector + " :hover") != null) { //IF ELEMENT IS HOVER 
        let details = document.querySelectorAll(compSelector + " .details p")
        for (let i = 0; i < details.length; i++) {
            details[i].classList.remove("hidden")
        }

        dist = 0;
        comp.style.transform = "translateX(0px) translateY(0px)"

    } else {
        comp.style.transform = "translateX(" + (-distXL / 10) * 1.9 + "px) translateY(" + (-distY / 10) * 1.5 + "px)"

        let details = document.querySelectorAll(compSelector + " .details p")
        for (let i = 0; i < details.length; i++) {
            details[i].classList.add("hidden")
        }
        dist = (distR > distL ? distL : distR)
    }


    let percentDiag = (dist * 100) / windowDiag();
    let fontSize = maxSize - ((percentDiag * amplSize) / 100);
    comp.style.fontSize = fontSize + "px"

    if (dist > 0) {
        comp.style.opacity = 1 - (percentDiag / 100);
    } else {
        comp.style.fontSize = maxSize + "px";
        comp.style.opacity = 1;
    }
}




////////////////////////////////////// DATE DISPLAY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
dateDisplay = document.querySelector(".heure")


displayDate();
function displayDate() {

    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    dateDisplay.innerHTML = time;
    requestAnimationFrame(displayDate)
}