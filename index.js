let bagItems
onLoad()

function onLoad(){
let bagItemsStr=localStorage.getItem('bagItems')
bagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];
displayItemsOnHomePage()
displayBagIcon()
}


function AddToBag(itemId){
bagItems.push(itemId)
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon()
}

function displayBagIcon(){
let bagItemCountElement = document.querySelector('.bag-item-count');
if(bagItems.length > 0){
    bagItemCountElement.style.visibility='visible'
  bagItemCountElement.innerText=bagItems.length
}else{
  bagItemCountElement.style.visibility='hidden'
}
}

function displayItemsOnHomePage(){
let itemsContainerElement=document.querySelector('.items-container');

if(!itemsContainerElement){
  return;
}

let innerHtml='';

items.forEach(item =>{
innerHtml += `
<div class="item-container">
  <img class="item-image" src="${item.image}" alt="product image">
    <div class="rating"> ${item.rating. stars}|${item.rating. stars}k</div>
      <div class="company_name">${item.company}</div>
      <div class="item_name">${item.item_name}</div>
      <div class="price">
     <span class="current_price">Rs${item.current_price}</span>
      <span class="orignal_price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% off)</span>
      </div>
     <button class="add-to-bag" onclick=" AddToBag (${item.id})">Add Bag</button>
      </div>`
}) 


itemsContainerElement.innerHTML= innerHtml;


}
