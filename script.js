 let cart = [];
// // Creamos una funcion donde tomaremos el id del producto el nombre y el precio y se alamcenara 
 function addToCart(productId, productName, price) {
     const quantity = parseInt(document.getElementById(`${productId}-quantity`).innerText);
     if (quantity > 0) {
         const product = { id: productId, name: productName, price: price, quantity: quantity };
         const existingProduct = cart.find(item => item.id === productId);
         if (existingProduct) {
             existingProduct.quantity += quantity;
         } else {
             cart.push(product);
         }
         updateCartDisplay();
     } else {
         alert('Por favor, selecciona una cantidad válida.');
     }
 }







// // Esta funcion hara que se muestre los productos agrega el nombre y el precio
// Función para actualizar la visualización del carrito
 function updateCartDisplay() {
     const cartItemsContainer = document.getElementById('cart-items');
     cartItemsContainer.innerHTML = '';
     let total = 0;
     cart.forEach(item => {
         const li = document.createElement('li');
         li.innerText = `${item.name} - ${item.quantity} x $${item.price}`;
         cartItemsContainer.appendChild(li);
         total += item.quantity * item.price;
     });
     document.getElementById('cart-total').innerText = total.toFixed(2);
}


// Función para finalizar la compra y enviar el mensaje por WhatsApp
function checkout() {
    let message = 'Productos en tu carrito:%0A';
    
    cart.forEach(product => {
        message += `${product.name} - Cantidad: ${product.quantity} - Precio: $${product.price * product.quantity}%0A`;
    });
    
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    message += `%0ATotal: $${total.toFixed(2)}`;
    
    const whatsappLink = `https://wa.me/524491888055?text=${message}`;
    
    // Abre WhatsApp con el mensaje preformateado
    window.open(whatsappLink, '_blank');

    if (cart.length > 0) {
        
        cart = [];
        updateCartDisplay();
    } else {
        alert('Tu carrito está vacío.');
    }
}










// Funcion para eliminar la cantidad de productos 
function decreaseQuantity(productId) {
    const quantityElement = document.getElementById(`${productId}-quantity`);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        quantityElement.innerText = --quantity;
    }
}

// Funcion para incrementar la cantidad de productos 
function increaseQuantity(productId) {
    const quantityElement = document.getElementById(`${productId}-quantity`);
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = ++quantity;
}

// Funcion para darnos una alerta para saber si se realizo la comra o no 
// function checkout() {
//     if (cart.length > 0) {
//         alert('¡Gracias por tu compra!');
//         cart = [];
//         updateCartDisplay();
//     } else {
//         alert('Tu carrito está vacío.');
//     }
// }









document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExampleIndicators');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});








// document.addEventListener('DOMContentLoaded', function() {
//     // Seleccionar los elementos a animar
//     const mainTitle = document.getElementById('main-title');
//     const mainSubtitle = document.getElementById('main-subtitle');
//     const featuredProductsTitle = document.getElementById('featured-products-title');
//     const product1 = document.getElementById('product-1');
//     const product2 = document.getElementById('product-2');
//     const product3 = document.getElementById('product-3');

//     // Añadir clases de animación al cargar la página
//     mainTitle.classList.add('fade-in');
//     mainSubtitle.classList.add('fade-in');
//     featuredProductsTitle.classList.add('fade-in');

//     // Retrasar la animación para los productos destacados
//     setTimeout(() => {
//         product1.classList.add('zoom-in');
//     }, 500);

//     setTimeout(() => {
//         product2.classList.add('zoom-in');
//     }, 1000);

//     setTimeout(() => {
//         product3.classList.add('zoom-in');
//     }, 1500);
// });

