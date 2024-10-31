const hoverImage = document.getElementById("hoverImage");
const hoverAudio = document.getElementById("hoverAudio");

hoverImage.addEventListener("mouseenter", () => {
    hoverAudio.play();
});

hoverImage.addEventListener("mouseleave", () => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
});