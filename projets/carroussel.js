const carousselElements = document.querySelectorAll(".museum-section")
const buttons = document.querySelectorAll(".bouton")

let carousselId = 3;
CarousselGen(carousselId);
addEventListener("resize", (event) => {
    CarousselGen(carousselId);
});


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
    if (window.matchMedia("(max-width: 800px)").matches) {
        
        for (let h = 0; h < carousselElements.length; h++) {
            carousselElements[h].classList.remove("mainCaroussel")
            buttons[h].classList.remove("mainBouton")
        }

        for (let i = 0; i < carousselElements.length; i++) {
           carousselElements[i].style.top = 50 + "%"

            if (i == carousselPos) {
                carousselElements[i].style.left = 40 + "%"
                carousselElements[i].classList.add("mainCaroussel")
                buttons[i].classList.add("mainBouton")
            }else{
                
                if(i == carousselPos + 1){
                    carousselElements[i].style.left = 95 + "%"
                }else if(i > carousselPos + 1){
                    carousselElements[i].style.left = 160 + "%"
                }else if(i == carousselPos - 1){
                    carousselElements[i].style.left = -15 + "%"
                }else if(i < carousselPos - 1){
                    carousselElements[i].style.left = -40 + "%"
                }
            }
        }
        

    } else {

        for (let h = 0; h < carousselElements.length; h++) {
            carousselElements[h].classList.remove("mainCaroussel")
            buttons[h].classList.remove("mainBouton")
        }

        for (let i = 0; i < carousselElements.length; i++) {

            carousselElements[i].style.left = "unset"

            if (i == carousselPos) {
                carousselElements[i].style.top = 50 + "%"
                carousselElements[i].classList.add("mainCaroussel")
                buttons[i].classList.add("mainBouton")
            }else{
                
                if(i == carousselPos + 1){
                    carousselElements[i].style.top = 85 + "%"
                }else if(i > carousselPos + 1){
                    carousselElements[i].style.top = 120 + "%"
                }else if(i == carousselPos - 1){
                    carousselElements[i].style.top = 15 + "%"
                }else if(i < carousselPos - 1){
                    carousselElements[i].style.top = -20 + "%"
                }
            }
        }
        
    }

    
}
