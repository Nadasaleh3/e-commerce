let bestproducts= document.getElementById('seebestpage');
let allproducts =document.getElementById('allproducts');
let woman=document.getElementById('container1');
let men=document.getElementById('container2');
let electonics=document.getElementById('container3');
let jewelery=document.getElementById('container4');
let categorydetails=document.getElementById('categorydetails');
let bag =document.getElementById('bag');

function bestproductspage()
{
    window.location.href=('allproducts.html');
}
function womanpage(){
    location.href=('woman.html');
   
}
function menpage(){
    location.href=('men.html');

}
function electonicspage(){
    location.href=('electronics.html');
}
function jewelerypage(){
    location.href=('jewelery.html');
}
function viewCart(){
    window.location.href = 'cart.html';
  }

  function updatecartcount(count){
    document.getElementById('cartcount').textContent=count;
}

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
updatecartcount(cart.length);
bestproducts.onclick=bestproductspage;
woman.onclick = womanpage;
men.onclick=menpage;
electonics.onclick=electonicspage;
jewelery.onclick=jewelerypage;
bag.onclick=viewCart;


