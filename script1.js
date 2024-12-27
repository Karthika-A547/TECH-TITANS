// JavaScript for basic e-commerce functionality
let cart = [];

// Function to update the cart count
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.parentElement;
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.querySelector('h3').textContent;
    const productPrice = productElement.querySelector('p').textContent;

    // Add product to the cart
    cart.push({ id: productId, name: productName, price: productPrice });
    updateCartCount();

    // Corrected string interpolation for the alert
    alert(`${productName} has been added to the cart!`);
  });
});

// Show cart details (basic implementation)
document.getElementById('cart-button').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  let cartDetails = 'Cart Items:\n';
  cart.forEach((item, index) => {
    // Corrected string interpolation for cart details
    cartDetails += `${index + 1}. ${item.name} - ${item.price}\n`;
  });
  alert(cartDetails);
});
