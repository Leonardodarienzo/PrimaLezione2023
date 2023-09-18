const mostraImmagineButton = document.getElementById("Immagine");
const immagineContainer = document.getElementById("immagineContainer");

mostraImmagineButton.addEventListener("click", function () {
    immagineContainer.style.display = "block";
    mostraImmagineButton.style.display = "none";
});
