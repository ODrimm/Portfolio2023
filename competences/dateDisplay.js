////////////////////////////////////// DATE DISPLAY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let hourDisplay = document.querySelector(".hour") //get where to display hour

if (!window.matchMedia("(max-width: 800px)").matches) { //if not mobile device

    setInterval(function() { //each second update hour display

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        hourDisplay.innerHTML = time;

    },1000)
}

