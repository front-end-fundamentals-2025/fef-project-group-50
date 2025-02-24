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
