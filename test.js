let total = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNode[1].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;

  
}



