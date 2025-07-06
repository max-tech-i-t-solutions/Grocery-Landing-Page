document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Organic Bananas',
            price: 1.99,
            image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 2,
            name: 'Free-Range Eggs',
            price: 3.49,
            image: 'https://images.unsplash.com/photo-1569288063648-850c6c2a2d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 3,
            name: 'Fresh Avocados',
            price: 1.25,
            image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 4,
            name: 'Artisan Bread',
            price: 4.99,
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 5,
            name: 'Fresh Strawberries',
            price: 2.99,
            image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 6,
            name: 'Organic Milk',
            price: 2.49,
            image: 'https://images.unsplash.com/photo-1550583724-b2692b85b210?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 7,
            name: 'Cherry Tomatoes',
            price: 2.99,
            image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 8,
            name: 'Ground Beef',
            price: 5.99,
            image: 'https://images.unsplash.com/photo-1588349529490-6b69a531d7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 9,
            name: 'Fresh Spinach',
            price: 1.99,
            image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 10,
            name: 'Greek Yogurt',
            price: 3.99,
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 11,
            name: 'Bell Peppers',
            price: 2.49,
            image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 12,
            name: 'Chicken Breast',
            price: 6.99,
            image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 13,
            name: 'Fresh Apples',
            price: 2.49,
            image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 14,
            name: 'Carrots',
            price: 1.79,
            image: 'https://images.unsplash.com/photo-1447175008436-170170753d52?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 15,
            name: 'Broccoli',
            price: 2.29,
            image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 16,
            name: 'Salmon Fillet',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
    ];

    const productGrid = document.querySelector('.product-grid');
    const cartCount = document.querySelector('.cart-count');

    let cart = [];

    function displayProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productGrid.innerHTML += productCard;
        });
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCartCount();
            
            // Visual feedback
            e.target.textContent = 'Added!';
            e.target.style.backgroundColor = '#28a745';
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.style.backgroundColor = '#007bff';
            }, 1000);
        }
    });

    displayProducts();
}); 