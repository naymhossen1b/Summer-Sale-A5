
// let total = 0;

function clickItem(target) {
    const selectedItemContainer = document.getElementById("select-item");
    const itemName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    
    console.log(target.parentNode.childNodes[5].innerText.split(" ")[5]);
    // const price = ;

    // total = parseInt(total) + parseInt(price);
    // document.getElementById("total").innerText = total;
  }