// Modal functionality
const buyNowBtn = document.getElementById('buy-now-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const coffeeForm = document.getElementById('coffee-form');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.querySelector('.cart');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsList = document.getElementById('cart-items-list');
let itemCount = 0;
let cartItems = [];

// Coffee images
const coffeeImages = {
    "Espresso": "espresso.png",
    "Americano": "americano.png",
    "Latte": "latte.png",
    "Cappuccino": "cappuccino.png"
};

// Open the modal when Buy Now button is clicked
buyNowBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add to Cart functionality
coffeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const coffeeType = document.querySelector('input[name="coffee-type"]:checked').value;
    itemCount++;

    // Add item to the cart
    addToCart(coffeeType);

    // Update cart count
    cartCount.textContent = itemCount;

    // Hide modal after adding to cart
    modal.style.display = 'none';
});

// Add item to cart and display the image in the cart
function addToCart(coffeeType) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = coffeeImages[coffeeType];
    img.alt = coffeeType;
    li.appendChild(img);
    li.appendChild(document.createTextNode(coffeeType));
    cartItemsList.appendChild(li);
    cartItems.push(coffeeType);
}

// Open the cart modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

// Close the cart modal
closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
