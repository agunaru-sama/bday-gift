function centerElement(el, offsetX = 0, offsetY = 0) {
  const x = (window.innerWidth - el.offsetWidth) / 2 + offsetX;
  const y = (window.innerHeight - el.offsetHeight) / 2 + offsetY;

  el.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*10-5}deg)`;
}

window.addEventListener("orientationchange", () => {
  location.reload();
});

var heart= document.getElementById('heart'),
    heartW = heart.offsetWidth,
    heartH = heart.offsetHeight;

document.body.onmousemove = function( event ) {
  var x = event.clientX - (heartW / 2);
  var y = event.clientY  - (heartH / 2);
  
  heart.style.transform = "translate("+ x +"px, "+ y +"px) rotate(-45deg)"
}

document.getElementById("nextBtn").onclick = function () {
  window.location.href = "../next/index.html";
};

const heartInput = document.getElementById("heartInput");
const nextBtn = document.getElementById("nextBtn");

heartInput.addEventListener("change", () => {
  if (heartInput.checked) {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "auto";
  }
});

nextBtn.onclick = () => {
  window.location.href = "indexamplop.html"; // sesuaikan path
};
