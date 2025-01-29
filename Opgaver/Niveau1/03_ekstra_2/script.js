function skjulElement(elements) {
    if (elements !== null) {
        elements.style.display = "none"
    }
}

function skjulElementViaCssSelector(cssSelector) {
    let hiddenItems = Array.from(document.querySelectorAll(cssSelector));
    hiddenItems.forEach(items => {
        skjulElement(items);
    });
}

skjulElementViaCssSelector(".hidden");