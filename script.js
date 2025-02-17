const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const productTitle = document.getElementById('product-title');
const productDescription = document.getElementById('product-description');
const productImage = document.getElementById('product-image');
const productPrice = document.getElementById('product-price');

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    renderProducts(products);
}

function renderProducts(products) {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-body">
                <h3>${product.title}</h3>
                <p>${product.description.slice(0, 50)}...</p>
                <p class="price">$${product.price}</p>
            </div>
        `;

        card.addEventListener('click', () => openModal(product));
        container.appendChild(card);
    });
}

function openModal(product) {
    productTitle.textContent = product.title;
    productDescription.textContent = product.description;
    productImage.src = product.image;
    productPrice.textContent = `$${product.price}`;
    modal.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', fetchProducts);