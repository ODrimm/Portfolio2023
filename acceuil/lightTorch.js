const circle = document.getElementById("circle");


//plus.innerHTML = overlay.innerHTML;

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



