document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");

  nextBtn.addEventListener("click", () => {
    window.location.href = "../next/index.html"; 
    // ganti sesuai folder HTML berikutnya
  });
});
