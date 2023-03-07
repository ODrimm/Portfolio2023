const circle = document.getElementById("circle"); //get circle div

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if is mobile device

  const onMouseMove = (e) => { //move circle to cursor position
    circle.style.transform = "translate(" + e.pageX + "px," +  e.pageY + "px";
  }

  document.addEventListener('mousemove', onMouseMove); //mouve on mouse mov
}







