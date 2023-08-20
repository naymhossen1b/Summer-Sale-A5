let total = 0;
let productCounter = 0;

function clickItem(target) {
  const selectedItemContainer = document.getElementById("select-item");
  const itemName = target.childNodes[5].childNodes[1].innerText;
  const proDuctPrice = target.childNodes[5].childNodes[3].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(proDuctPrice);

  productCounter++;
  const productName = document.createElement("p");
  productName.innerText = `${productCounter}. ${itemName}`;
  selectedItemContainer.appendChild(productName);

  if (total > 0) {
    let purChesBtn = document.getElementById('make-purches');
    purChesBtn.removeAttribute('disabled');
  }

  document.getElementById("orginal-price").innerText = total;
}
// function clickItem(target) {

//   const selectedItemContainer = document.getElementById("select-item");
//   const itemName = target.childNodes[5].childNodes[1].innerText;
//   const productName = document.createElement("p");  
//   productName.innerText = itemName;
//   selectedItemContainer.appendChild(productName);
//   const proDuctPrice = target.childNodes[5].childNodes[3].innerText.split(" ")[0];
//   total = parseInt(total) + parseInt(proDuctPrice);

//   if(total > 0 ){
//   let purChesBtn = document.getElementById('make-purches');
//   purChesBtn.removeAttribute('disabled') 
// }

//   document.getElementById("orginal-price").innerText = total;
// }

function applyCoupon(){
  const couponCode = document.getElementById("couponCode").value;
  if(couponCode === "SELL200" && total > 200 ){
    const discountParcentage = 20;
    const discount = (total * discountParcentage) / 100;
    const finalAmount = total - discount;
    const toDecimale = finalAmount.toFixed(2);


    document.getElementById("discountAmount").textContent = discount;
    document.getElementById("finalAmount").textContent = toDecimale;
  }else{
    alert("Coupon code is not valid or minimum amount not valide");
  }
}

document.getElementById('couponCode').addEventListener('keyup', function(event){
  const text = event.target.value;
  const deleteButton = document.getElementById('hide-btn');
  if( text === 'SELL200' ){
    deleteButton.removeAttribute('disabled');
  }else{
    deleteButton.setAttribute('disabled', true);
  }
})

function navigateBtn(){
  location.reload();
}

