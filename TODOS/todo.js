document.addEventListener("DOMContentLoaded", function () {
  const itemInput = document.getElementById("itemInput");
  const addButton = document.getElementById("addButton");
  const itemList = document.getElementById("itemList");

  addButton.addEventListener("click", addItem);
  itemInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addItem();
    }
  });
  function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText !== "") {
      const li = document.createElement("li");
      const textNode = document.createTextNode(itemText);
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function() {
        li.remove();
      });
      li.appendChild(textNode);
      li.appendChild(removeButton);
      itemList.appendChild(li);
      itemInput.value = "";
      itemInput.focus();
    }
  }
});
