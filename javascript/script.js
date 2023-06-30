// add to cart


//  const btnCart = document.querySelector('btn-cart');
//  const cart = document.querySelector('.cart');
// const btnClose = document.getElementById("cart-close");



// const btnClose = document.querySelector("#cart-close");
// const closeButton = () => {
//     btnClose.classList.remove('active');
// }
// btnClose.onclick = () => {
//     console.log("close btn is clicked");
//     // document.cart.style.display=invisible;
// }


const btnCart = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector("#cart-close");

let itemList = [];

btnCart.onclick = ()=>{
    cart.classList.add('cart-active');
};
btnClose.onclick = () => {
    cart.classList.remove('cart-active');
}
// let itemList = [];
// function addToCart(){
//     console.log("Hello bhai");
//     // let food = this.parentElement;
//     let title = document.querySelector('.item-name').innerHTML;
//     let price = document.querySelector('.item-rate').innerHTML;
//     let imgSrc = document.querySelector('.food-img').src;
//     // let element = 
//      let newProduct = {title,price,imgSrc}

//     if(itemList.find((el) => el.title == newProduct.title)){
//         alert("Product already added in cart");
//         return;
//     }
//     else{
//         itemList.push(newProduct);
//     }
//     let newProductElement = createCartProduct(title,price,imgSrc);
//     let element = document.createElement('div');
//     element.innerHTML = newProductElement;
//     let cartBasket = document.querySelector('.cart-content');
//     cartBasket.append(element);
//     updateTotal();
//     loadContent();
// }

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

function loadContent(){
    let btnRemove = document.querySelectorAll('.cart-remove');
    console.log(btnRemove);
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });

    let cartBtns = document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
    });
    updateTotal();

}

function removeItem(){
    if(confirm('Are you sure to remove')){
        let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList = itemList.filter(el => el.title != title );
        this.parentElement.remove(itemList);
        loadContent();
    }
}

function changeQty(){
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    loadContent();
}

    

function addCart(){
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgSrc = this.parentElement.querySelector('.food-img').src;

    let newProduct = {title,price,imgSrc}

    if(itemList.find((el) => el.title == newProduct.title)){
        alert("Product already added in cart");
        return;
    }
    else{
        itemList.push(newProduct);
    }
    let newProductElement = createCartProduct(title,price,imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
}

function createCartProduct(title,price,imgSrc){

    return`
    
            <div class="cart-box">
                <img src="${imgSrc}" class="cart-img">
                    <div class="detail">
                        <div class="cart-food-title">${title}</div>
                        <div class="price-box">
                            <div class="cart-price">${price}</div>
                            <div class="cart-amount">${price}</div>
                    </div>
                        <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa fa-trash cart-remove"></i>
            </div>
                    
        `;
}
function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0;
    cartItems.forEach(product=>{
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("Rs. ",""));
        let qty = product.querySelector('.cart-quantity').value;
        total = total + (price * qty);
        product.querySelector('.cart-amount').innerHTML = "Rs. " + (price * qty);
    });
    totalValue.innerHTML = 'Rs. ' + total;

    const cartCount = document.querySelector('.cart-count');
    let count = itemList.length;
    cartCount.innerHTML = count;

    if(count == 0){
    cartCount.style.display = 'none';
    }
    else{
    cartCount.style.display = 'block';
    }

}
