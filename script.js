let button = document.getElementById("btn");
let input = document.getElementById("inp");
let countDiv = document.getElementById("count");
let plusButton = document.getElementById("+");
let minusButton = document.getElementById("-");

button.addEventListener("click", function () {
  countDiv.textContent = input.value;
});

plusButton.addEventListener("click", function () {
  countDiv.textContent = parseInt(countDiv.textContent) + 1;
});
minusButton.addEventListener("click", function () {
  countDiv.textContent = parseInt(countDiv.textContent) - 1;
});
