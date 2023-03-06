////////////////////////////////////// DATE DISPLAY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
dateDisplay = document.querySelector(".heure")

if (window.matchMedia("(max-width: 800px)").matches) {

}else{
    setInterval(function() {
        var today = new Date();
    
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
        dateDisplay.innerHTML = time;
    },1000)
}

