/////////// --------- GENERATE PARAGRAPHES ------- ///////////

function paraToP(paraString){
    let paraList = paraString.split(" ")
    let divContent = [];
    for(let i = 0; i < paraList.length; i++){

        if(paraList[i] != " "){
            
            divContent.push("<p class='phys'>"+ paraList[i] +"</p>")
            // divContent.push("<p class='espace'>l</p>")
        } else{
            divContent.push("<p class='espace phys'>l</p>")
        }
    }

    return divContent;
}

let paragraphe1 = document.querySelector(".paragraphe")
let paragrapheContent1 = paragraphe1.innerHTML
let pList1 = paraToP(paragrapheContent1);
paragraphe1.innerHTML = ""

for(let i = 0; i < pList1.length; i++){
    paragraphe1.innerHTML += pList1[i]
}
