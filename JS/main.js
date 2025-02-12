const shoppingCart = document.getElementById("shopping-cart");
const liElement = document.createElement("li");
const itemNameSweaterOne = document.getElementById("item-name-sweater-one");
const itemNameSweaterTwo = document.getElementById("item-name-sweater-two");

const sweaterOneButton = document.getElementById(
  "button-polo-ralph-lauren-knitted-sweater-black"
);
const sweaterTwoButton = document.getElementById(
  "button-polo-ralph-lauren-full-zip-cardigan-fawn-grey-heather"
);

sweaterOneButton.addEventListener("click", function (event) {
  let clothing = "itemNameSweaterOne.innerText";

  sessionStorage.sweaterOne = clothing;

  let newClothing = sessionStorage.clothing;

  liElement.innerText = newClothing;

  shoppingCart.appendChild(liElement);
});

sweaterTwoButton.addEventListener("click", function (event) {
  let clothing = itemNameSweaterTwo.innerText;

  sessionStorage.sweaterTwo = clothing;

  let newClothing = sessionStorage.clothing;

  liElement.innerText = newClothing;

  shoppingCart.appendChild(liElement);
});

/*
It should be possible to add two different products to the cart, and they should remain there regardless of which page you navigate to. You must use either sessionStorage or sessionStorage for this.

It should be possible to remove products from the cart. You must use either sessionStorage or sessionStorage for this.

There should be at least one animation with a minimum of 2 keyframes.
*/
