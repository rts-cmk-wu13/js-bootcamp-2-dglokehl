const button = document.querySelector("#my-button");
button.addEventListener("click", changeColor)

function changeColor() {
    button.classList.toggle("color")
}