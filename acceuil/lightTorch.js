const circle = document.getElementById("circle");

if (window.matchMedia("(max-width: 800px)").matches) {

}
else{
  const onMouseMove = (e) => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
  
  document.addEventListener('mousemove', onMouseMove);
  
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
}







