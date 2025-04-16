// Cart state
let cart = {};
let isCartOpen = false;

// Cart functions
function addToCart(productId, name, price) {
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = {
            name,
            price,
            quantity: 1
        };
    }
    
    updateCartUI();
    showCartNotification();
}

function removeFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId];
        updateCartUI();
    }
}

function updateQuantity(productId, newQuantity) {
    if (cart[productId]) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            cart[productId].quantity = newQuantity;
            updateCartUI();
        }
    }
}

function calculateTotal() {
    return Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const cartItemsList = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const currentLang = document.documentElement.lang;
    
    // Update cart count
    const totalItems = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    if (cartCount) {
        if (totalItems === 0) {
            cartCount.textContent = '0';
        } else {
            const itemText = totalItems === 1 ? 
                window.translations[currentLang]['cart.item'] : 
                window.translations[currentLang]['cart.items'];
            cartCount.textContent = `${totalItems} ${itemText}`;
        }
    }
    
    // Update cart items
    if (cartItemsList) {
        if (Object.keys(cart).length === 0) {
            cartItemsList.innerHTML = `<p class="text-gray-500 text-center py-4 empty-cart-text">${window.translations[currentLang]['cart.empty']}</p>`;
        } else {
            cartItemsList.innerHTML = '';
            for (const [id, item] of Object.entries(cart)) {
                const itemTotal = item.price * item.quantity;
                cartItemsList.innerHTML += `
                    <div class="flex justify-between items-center p-2 border-b">
                        <div>
                            <h4 class="font-semibold">${item.name}</h4>
                            <p class="text-sm text-gray-600">₪${item.price} x ${item.quantity}</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-2">
                                <button onclick="updateQuantity('${id}', ${item.quantity - 1})" 
                                    class="w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
                                    <i class="fas fa-minus text-xs"></i>
                                </button>
                                <span class="w-8 text-center">${item.quantity}</span>
                                <button onclick="updateQuantity('${id}', ${item.quantity + 1})"
                                    class="w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
                                    <i class="fas fa-plus text-xs"></i>
                                </button>
                            </div>
                            <span class="font-semibold">₪${itemTotal}</span>
                            <button onclick="removeFromCart('${id}')" class="text-red-500 hover:text-red-700" title="${window.translations[currentLang]['cart.remove']}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            }
        }
    }
    
    // Update total
    if (cartTotal) {
        cartTotal.textContent = `${window.translations[currentLang]['cart.total']} ₪${calculateTotal()}`;
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        isCartOpen = !isCartOpen;
        if (isCartOpen) {
            cartModal.classList.remove('hidden');
            updateCartUI(); // Refresh cart UI when opening
        } else {
            cartModal.classList.add('hidden');
        }
    }
}

function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-up';
    notification.textContent = window.translations[document.documentElement.lang]['cart.added'];
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function checkout() {
    const items = Object.entries(cart).map(([id, item]) => 
        `${item.name} (${item.quantity}x)`
    ).join('\n');
    const total = calculateTotal();
    
    const message = `הזמנה חדשה:\n${items}\n\nסה"כ: ₪${total}`;
    window.open(`https://wa.me/972544455213?text=${encodeURIComponent(message)}`, '_blank');
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = {};
        }
    }
    
    // Add click event listener for cart modal background
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                toggleCart();
            }
        });
    }
}); 