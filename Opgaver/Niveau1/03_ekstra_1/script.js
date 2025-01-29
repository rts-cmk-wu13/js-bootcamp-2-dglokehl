function skjulElement(element) {
    if (element !== null) {
        element.style.display = "none"
    }
}

function skjulElementViaCssSelector(cssSelector) {
    skjulElement(document.querySelector(cssSelector));
}

skjulElementViaCssSelector(".hidden__heading");
skjulElementViaCssSelector(".hidden__text");