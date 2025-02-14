const itemNameSweaterOne = document.getElementById("item-name-sweater-one");
const itemNameSweaterTwo = document.getElementById("item-name-sweater-two");
const sweaterOneButton = document.getElementById(
  "button-polo-ralph-lauren-knitted-sweater-black"
);
const sweaterTwoButton = document.getElementById(
  "button-polo-ralph-lauren-full-zip-cardigan-fawn-grey-heather"
);

sweaterOneButton.addEventListener("click", function () {
  let clothing = itemNameSweaterOne.innerText;
  sessionStorage.sweaterOne = clothing;
});

sweaterTwoButton.addEventListener("click", function () {
  let clothing = itemNameSweaterTwo.innerText;
  sessionStorage.sweaterTwo = clothing;
});

document.addEventListener("DOMContentLoaded", function () {
  const shoppingCart = document.getElementById("shopping-cart");
  const sweaterOne = sessionStorage.getItem("sweaterOne");
  const sweaterTwo = sessionStorage.getItem("sweaterTwo");

  if (sweaterOne) {
    const liElement = document.createElement("li");
    liElement.innerText = "1x " + sweaterOne;
    shoppingCart.appendChild(liElement);

    const removeButtonElement = document.createElement("button");
    removeButtonElement.innerText = "Remove";
    shoppingCart.appendChild(removeButtonElement);
    removeButtonElement.classList.add("remove-button");

    removeButtonElement.addEventListener("click", function () {
      sessionStorage.removeItem("sweaterOne");
      liElement.remove();
      removeButtonElement.remove();
    });
  }

  if (sweaterTwo) {
    const liElement = document.createElement("li");
    liElement.innerText = "1x " + sweaterTwo;
    shoppingCart.appendChild(liElement);

    const removeButtonElement = document.createElement("button");
    removeButtonElement.innerText = "Remove";
    shoppingCart.appendChild(removeButtonElement);
    removeButtonElement.classList.add("remove-button");

    removeButtonElement.addEventListener("click", function () {
      sessionStorage.removeItem("sweaterTwo");
      liElement.remove();
      removeButtonElement.remove();
    });
  }
});

/*
It should be possible to add two different products to the cart, and they should remain there regardless of which page you navigate to. 
You must use either localStorage  or sessionStorage for this.
It should be possible to remove products from the cart. You must use either localStorage or sessionStorage for this.
There should be at least one animation with a minimum of 2 keyframes.
*/
