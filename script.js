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
  window.location.href = "../envelope/index.html"; // sesuaikan path
};
