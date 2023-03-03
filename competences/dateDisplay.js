////////////////////////////////////// DATE DISPLAY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
dateDisplay = document.querySelector(".heure")

setInterval(function() {
    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    dateDisplay.innerHTML = time;
},1000)