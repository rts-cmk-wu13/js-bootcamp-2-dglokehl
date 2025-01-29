const amountButtons = document.querySelectorAll(".product__amount__buttons__container");
amountButtons.forEach(element => {
    element.addEventListener("click", amountPlusMinus);
});

function amountPlusMinus(e) {
    if (e.target.classList.contains("product__amount__plus")) {
        this.previousElementSibling.textContent++;
    } else if (e.target.classList.contains("product__amount__minus")) {
        if (this.previousElementSibling.textContent > 0) {
            this.previousElementSibling.textContent--;
        }
    }
}