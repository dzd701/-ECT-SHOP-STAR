// Main JavaScript file

// DOM Elements Cache
const domElements = {
    cart: document.getElementById('cart'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    cartCount: document.getElementById('cart-count'),
    orderForm: document.getElementById('order-form'),
    languageSelector: document.getElementById('language-selector')
};

// Current language (default: Hebrew)
let currentLang = 'he';

// Utility Functions
const utils = {
    formatPrice: (price) => {
        return new Intl.NumberFormat(currentLang === 'he' ? 'he-IL' : 'en-US', {
            style: 'currency',
            currency: 'ILS'
        }).format(price);
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    showNotification: (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// Language Management
const languageManager = {
    setLanguage: (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = ['he', 'ar'].includes(lang) ? 'rtl' : 'ltr';
        this.updateTranslations();
    },
    
    updateTranslations: () => {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            element.textContent = translations[currentLang][key] || key;
        });
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    if (domElements.languageSelector) {
        domElements.languageSelector.addEventListener('change', (e) => {
            languageManager.setLanguage(e.target.value);
        });
    }
    
    // Initialize tooltips
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
        });
        
        element.addEventListener('mouseleave', () => {
            document.querySelector('.tooltip')?.remove();
        });
    });
});

// Export utilities for use in other files
window.utils = utils;
window.languageManager = languageManager; 