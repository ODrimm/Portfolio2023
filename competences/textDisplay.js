//////////////////// TEXT DISPLAY \\\\\\\\\\\\\\\\\\\\\\\\\\\

const diag = windowDiag();
const maxSize = 24;
const minSize = -5;
const amplSize = maxSize - minSize;

const onMouseMove = (event) => {
    
    objectTransform(".skill1");
    objectTransform(".skill2");
    objectTransform(".skill3");
    objectTransform(".skill4");
    objectTransform(".skill5");
    objectTransform(".skill6");
    objectTransform(".skill7");
    objectTransform(".skill8");
    objectTransform(".skill9");
    objectTransform(".skill10");
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if mobile
    animate();
    document.removeEventListener('mousemove', onMouseMove);

} else {
    document.addEventListener('mousemove', onMouseMove);
}

function animate() {

    mobileTextHandler(".skill1")
    mobileTextHandler(".skill2")
    mobileTextHandler(".skill3")
    mobileTextHandler(".skill4")
    mobileTextHandler(".skill5")
    mobileTextHandler(".skill6")
    mobileTextHandler(".skill7")
    mobileTextHandler(".skill8")
    mobileTextHandler(".skill9")
    mobileTextHandler(".skill10")

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if mobile
        requestAnimationFrame(animate);
    }
}





function windowDiag() { // get size of window diagonal
    return Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) / 2;
}

function mobileTextHandler(compSelector) { //skill detail appear when in middle of screen

    const comp = document.querySelector(compSelector + " .title");

    if (comp != null) { //to avoid errors
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

    const comp = document.querySelector(compSelector + " .title"); //get size and pos of element
    var rect = comp.getBoundingClientRect();

    let distY = (event.clientY - (rect.top + comp.clientHeight / 2)) //calculate distances
    let distXL = (event.clientX - (rect.left))
    let distXR = (event.clientX - (rect.left + comp.clientWidth))

    let distR = (Math.abs(distXR) + Math.abs(distY)) / 2
    let distL = (Math.abs(distXL) + Math.abs(distY)) / 2

    let dist;

    if (document.querySelector(compSelector + " :hover") != null) { //when element is hovered

        let details = document.querySelectorAll(compSelector + " .details p")
        for (let i = 0; i < details.length; i++) {
            details[i].classList.remove("hidden") //make details visible
        }

        dist = 0;
        comp.style.transform = "translateX(0px) translateY(0px)" //get back to original pos

    } else { //when element isn't hovered

        let details = document.querySelectorAll(compSelector + " .details p")
        for (let i = 0; i < details.length; i++) {
            details[i].classList.add("hidden") //make details invisible
        }

        dist = (distR > distL ? distL : distR)
        comp.style.transform = "translateX(" + (-distXL / 10) * 1.9 + "px) translateY(" + (-distY / 10) * 1.5 + "px)" //move to desired pos
    }


    let percentDiag = (dist * 100) / windowDiag(); //apply font size depending on distance
    let fontSize = maxSize - ((percentDiag * amplSize) / 100);
    comp.style.fontSize = fontSize + "px"

    if (dist > 0) { //apply opacity depending on disrance
        comp.style.opacity = 1 - (percentDiag / 100);
    } else {
        comp.style.fontSize = maxSize + "px";
        comp.style.opacity = 1;
    }
}