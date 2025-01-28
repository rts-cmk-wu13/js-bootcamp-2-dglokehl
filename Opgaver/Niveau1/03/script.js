const text = document.querySelector("#text");

function skjulElementViaCssSelector(cssSelector) {
    document.querySelector(cssSelector).style.display = "none";
}

skjulElementViaCssSelector(".hidden__heading");
skjulElementViaCssSelector(".hidden__text");