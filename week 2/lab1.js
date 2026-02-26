let quantity = 0;
const quantityElement = document.getElementById("quantity");
const addButtons = document.querySelectorAll("button[data-role=add]");
const resetButton = document.querySelector("button[data-role=reset]");
// console.log(addButtons);
// console.log(resetButton);

for (const addButton of addButtons) {
  //   console.log(addButton.dataset);
addButton.addEventListener("click", () => {
    qtyToAdd = +addButton.dataset.add;
    quantity += qtyToAdd;
    quantityElement.innerText = quantity;
});
}

resetButton.addEventListener("click", () => {
quantity = 0;
quantityElement.innerText = quantity;
});