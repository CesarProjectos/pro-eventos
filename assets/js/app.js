console.log("Pro-Eventos online");
const heroVideo = document.getElementById("heroVideo");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (heroVideo) {
  heroVideo.loop = false;

  heroVideo.addEventListener("ended", () => {
    heroVideo.pause();
  });
}
