const addCart = document.querySelectorAll('.add-cart');
const cartShow = document.querySelector('header span');
for (var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', () => {
        cartCount();
    })
}

function cartCount() {
    let prdCount = localStorage.getItem('cartsCount');
    prdCount = parseInt(prdCount);

    if(prdCount) {
        localStorage.setItem('cartsCount', prdCount + 1);
        cartShow.textContent = prdCount + 1;
    }else {
        localStorage.setItem('cartsCount', 1);
        cartShow.textContent = prdCount = 1;
    }
}

function displayCart() {
    let prdCount = localStorage.getItem('cartsCount');
    if(prdCount){
        cartShow.textContent = prdCount;
    }
}

displayCart();