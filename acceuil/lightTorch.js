const circle = document.getElementById("circle"); //get circle div


addEventListener("resize", (event) => {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if is desktop device

    document.addEventListener('mousemove', onMouseMove); //mouve on mouse mov

  }else{

    circle.style.transform = "translate(" + 0 + "px," +  0 + "px";
    document.removeEventListener('mousemove', onMouseMove);
    
  }
});

const onMouseMove = (e) => { //move circle to cursor position
  circle.style.transform = "translate(" + e.pageX + "px," +  e.pageY + "px";
}








