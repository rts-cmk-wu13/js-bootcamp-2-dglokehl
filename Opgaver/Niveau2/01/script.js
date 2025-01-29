const buttons = Array.from(document.querySelectorAll("#buttons button"));
buttons.forEach(elements => {
    elements.addEventListener("click", clickButton);
});

function clickButton() {
    if (this.classList.contains("highlighted")) {
        this.classList.remove("highlighted");
    } else {
        buttons.forEach(elements => {
            elements.classList.remove("highlighted");
        });
        this.classList.add("highlighted");
    }
}