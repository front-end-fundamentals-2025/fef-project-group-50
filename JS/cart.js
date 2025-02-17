//document.addEventListener("DOMContentLoaded", function () {
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
