const carousselElements = document.querySelectorAll(".museum-section")
const buttons = document.querySelectorAll(".bouton")

let carousselId = 3;
CarousselGen(carousselId);


function CarousselUp() {
    if (carousselId > 0) {
        carousselId -= 1;
    }
    CarousselGen(carousselId);
}

function CarousselDown() {
    if (carousselId < 6) {
        carousselId += 1;
    }
    CarousselGen(carousselId);
}

function CarousselGen(carousselPos) {

    if (carousselPos == 0) {
        carousselElements[0].style.top = 50 + "%"
        carousselElements[1].style.top = 85 + "%"
        carousselElements[2].style.top = 120 + "%"
        carousselElements[3].style.top = 120 + "%"
        carousselElements[4].style.top = 120 + "%"
        carousselElements[5].style.top = 120 + "%"
        carousselElements[6].style.top = 120 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[0].classList.add("mainCaroussel")
        buttons[0].classList.add("mainBouton")

    }
    else if (carousselPos == 1) {
        carousselElements[0].style.top = 15 + "%"
        carousselElements[1].style.top = 50 + "%"
        carousselElements[2].style.top = 85 + "%"
        carousselElements[3].style.top = 120 + "%"
        carousselElements[4].style.top = 120 + "%"
        carousselElements[5].style.top = 120 + "%"
        carousselElements[6].style.top = 120 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[1].classList.add("mainCaroussel")
        buttons[1].classList.add("mainBouton")

    }
    else if (carousselPos == 2) {
        carousselElements[0].style.top = -20 + "%"
        carousselElements[1].style.top = 15 + "%"
        carousselElements[2].style.top = 50 + "%"
        carousselElements[3].style.top = 85 + "%"
        carousselElements[4].style.top = 120 + "%"
        carousselElements[5].style.top = 120 + "%"
        carousselElements[6].style.top = 120 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[2].classList.add("mainCaroussel")
        buttons[2].classList.add("mainBouton")

    }
    else if (carousselPos == 3) {
        carousselElements[0].style.top = -20 + "%"
        carousselElements[1].style.top = -20 + "%"
        carousselElements[2].style.top = 15 + "%"
        carousselElements[3].style.top = 50 + "%"
        carousselElements[4].style.top = 85 + "%"
        carousselElements[5].style.top = 120 + "%"
        carousselElements[6].style.top = 120 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[3].classList.add("mainCaroussel")
        buttons[3].classList.add("mainBouton")

    }
    else if (carousselPos == 4) {
        carousselElements[0].style.top = -20 + "%"
        carousselElements[1].style.top = -20 + "%"
        carousselElements[2].style.top = -20 + "%"
        carousselElements[3].style.top = 15 + "%"
        carousselElements[4].style.top = 50 + "%"
        carousselElements[5].style.top = 85 + "%"
        carousselElements[6].style.top = 120 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[4].classList.add("mainCaroussel")
        buttons[4].classList.add("mainBouton")

    }
    else if (carousselPos == 5) {
        carousselElements[0].style.top = -20 + "%"
        carousselElements[1].style.top = -20 + "%"
        carousselElements[2].style.top = -20 + "%"
        carousselElements[3].style.top = -20 + "%"
        carousselElements[4].style.top = 15 + "%"
        carousselElements[5].style.top = 50 + "%"
        carousselElements[6].style.top = 85 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[5].classList.add("mainCaroussel")
        buttons[5].classList.add("mainBouton")

    }
    else if (carousselPos == 6) {
        carousselElements[0].style.top = -20 + "%"
        carousselElements[1].style.top = -20 + "%"
        carousselElements[2].style.top = -20 + "%"
        carousselElements[3].style.top = -20 + "%"
        carousselElements[4].style.top = -20 + "%"
        carousselElements[5].style.top = 15 + "%"
        carousselElements[6].style.top = 50 + "%"

        for(let i = 0; i < carousselElements.length; i++){
            carousselElements[i].classList.remove("mainCaroussel")
            buttons[i].classList.remove("mainBouton")

        }
        carousselElements[6].classList.add("mainCaroussel")
        buttons[6].classList.add("mainBouton")


    }
}
