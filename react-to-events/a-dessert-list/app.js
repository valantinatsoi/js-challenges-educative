
document.getElementById("addButton").addEventListener("click", () => {
  const dessertName = prompt("Add a dessert:");
  const dessertElement = document.createElement("li");
  dessertElement.id = "dessert";
  dessertElement.textContent = dessertName;
  document.getElementById("desserts").appendChild(dessertElement);
  dessertElement.addEventListener("click", e => {
    const newName = prompt(`Edit ${e.target.textContent}`);
    e.target.textContent = newName;
  });
});


// document.getElementsByTagName("li").forEach(addEventListener("click", e => {
//   const newName = prompt(`Edit ${e.target.textContent}`);
//   e.target.textContent = newName;
// })
// );
