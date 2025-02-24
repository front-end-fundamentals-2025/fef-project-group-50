const itemNameSweaterOne = document.getElementById("item-name-sweater-one");

const sweaterOneButton = document.getElementById(
  "button-polo-ralph-lauren-knitted-sweater-black"
);

sweaterOneButton.addEventListener("click", function () {
  let clothing = itemNameSweaterOne.innerText;
  sessionStorage.sweaterOne = clothing;
});
