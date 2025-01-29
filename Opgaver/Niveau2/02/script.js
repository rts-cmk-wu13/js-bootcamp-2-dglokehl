const amountButtons = Array.from(document.querySelectorAll(".product__amount__buttons__container"));
amountButtons.forEach(element => {
	element.addEventListener("click", amountPlusMinus);
});

const price = Array.from(document.querySelectorAll(".product__price--num"));
const totalPrice = Array.from(document.querySelectorAll(".product__totalprice--num"));

function amountPlusMinus(e) {
	let productTotal = totalPrice[amountButtons.indexOf(this)]
	let productCount = this.previousElementSibling

	let productPrice = price[amountButtons.indexOf(this)]

	if (e.target.classList.contains("product__amount__plus")) {
		productCount.textContent++;
		productTotal.textContent = productPrice.textContent * productCount.textContent;

	} else if (e.target.classList.contains("product__amount__minus")) {
		if (productCount.textContent > 0) {
			productCount.textContent--;
			productTotal.textContent = productPrice.textContent * productCount.textContent;
		}
	}
}