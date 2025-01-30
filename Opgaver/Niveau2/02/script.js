const productAmount = document.querySelectorAll(".product__amount__count");
const productPrice = document.querySelectorAll(".product__price--num");
const productPriceTotal = document.querySelectorAll(".product__totalprice--num");

const buttonPlus = document.querySelectorAll(".product__amount__plus");
const buttonMinus = document.querySelectorAll(".product__amount__minus");


buttonPlus.forEach((button, index) => {
	button.addEventListener("click", updateAmountPlus)

	let thisAmount = productAmount[index]
	let thisPrice = Number(productPrice[index].textContent)
	let thisPriceTotal = productPriceTotal[index]

	function updateAmountPlus() {
		thisAmount.textContent++
		thisPriceTotal.textContent = thisPrice * Number(thisAmount.textContent)
	}
});


buttonMinus.forEach((button, index) => {
	button.addEventListener("click", updateAmountMinus)

	let thisAmount = productAmount[index]
	let thisPrice = Number(productPrice[index].textContent)
	let thisPriceTotal = productPriceTotal[index]

	function updateAmountMinus() {
		if (thisAmount.textContent > 0) {
			thisAmount.textContent--
		}
		thisPriceTotal.textContent = thisPrice * Number(thisAmount.textContent)
	}
});