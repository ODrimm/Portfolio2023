//////////////////// TEXT DISPLAY \\\\\\\\\\\\\\\\\\\\\\\\\\\

const diag = windowDiag();
const maxSize = 24;
const minSize = -5;
const amplSize = maxSize - minSize;


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    animate();
}

function animate() {

    mobileTextHandler(".competence1")
    mobileTextHandler(".competence2")
    mobileTextHandler(".competence3")
    mobileTextHandler(".competence4")
    mobileTextHandler(".competence5")
    mobileTextHandler(".competence6")
    mobileTextHandler(".competence7")
    mobileTextHandler(".competence8")  //300 a 165
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        requestAnimationFrame(animate);
    }
}


document.addEventListener('mousemove', event => {
    //DIST MOUSE / ELEMENT LEFT AND RIGHT
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    } else {
        objectTransform(".competence1");
        objectTransform(".competence2");
        objectTransform(".competence3");
        objectTransform(".competence4");
        objectTransform(".competence5");
        objectTransform(".competence6");
        objectTransform(".competence7");
        objectTransform(".competence8");
    }

})



function windowDiag() {
    return Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) / 2;
}

function mobileTextHandler(compSelector) {
    const comp = document.querySelector(compSelector + " .titre");
    if (comp != null) {
        var rect = comp.getBoundingClientRect();
        let details = document.querySelector(compSelector + " .details p")

        if (165 < rect.top && rect.top < 500) {
            details.classList.remove("hidden")
            details.classList.add("main")
        } else {
            details.classList.add("hidden")
            details.classList.remove("main")
        }
    }

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