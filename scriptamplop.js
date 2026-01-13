function centerElement(el, offsetX = 0, offsetY = 0) {
  const x = (window.innerWidth - el.offsetWidth) / 2 + offsetX;
  const y = (window.innerHeight - el.offsetHeight) / 2 + offsetY;

  el.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*10-5}deg)`;
}

window.addEventListener("orientationchange", () => {
  location.reload();
});

$(document).ready(function () {
    const envelope = $("#envelope");
    const btnOpen = $("#open");
    const btnReset = $("#reset");
    const nextBtn = $("#nextBtn");

    function openEnvelope() {
        envelope.removeClass("close").addClass("open");

        // tampilkan tombol Next setelah animasi
        setTimeout(() => {
            nextBtn.css({
                opacity: 1,
                pointerEvents: "auto"
            });
        }, 700);
    }

    function closeEnvelope() {
        envelope.removeClass("open").addClass("close");

        nextBtn.css({
            opacity: 0,
            pointerEvents: "none"
        });
    }

    envelope.on("click", openEnvelope);
    btnOpen.on("click", openEnvelope);
    btnReset.on("click", closeEnvelope);

    nextBtn.on("click", function () {
        window.location.href = "indexpaper.html"; // SESUAIKAN
    });
});
