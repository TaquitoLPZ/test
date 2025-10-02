// script.js
// Maneja el carrito de compras con almacenamiento en LocalStorage y animaciones

document.addEventListener('DOMContentLoaded', () => {
  // Recuperar carrito del almacenamiento local o inicializar uno nuevo
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Elementos del DOM
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  /**
   * Guarda el carrito en localStorage.
   */
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  /**
   * Actualiza la interfaz del carrito en el offcanvas.
   */
  function updateCartUI() {
    // Limpia la lista
    cartItems.innerHTML = '';
    let total = 0;

    // Rellena la lista con los productos actuales
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <div>
          <h6 class="my-0">${item.name}</h6>
          <small class="text-muted">CHF ${item.price.toFixed(2)}</small>
        </div>
        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">&times;</button>
      `;
      cartItems.appendChild(li);
      total += item.price;
    });

    // Si está vacío, mostrar mensaje
    if (cart.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'list-group-item text-center';
      emptyLi.textContent = 'El carrito está vacío.';
      cartItems.appendChild(emptyLi);
    }

    // Actualiza total y contador
    cartTotal.textContent = 'CHF ' + total.toFixed(2);
    cartCount.textContent = cart.length;
  }

  /**
   * Anima la imagen o icono del producto hacia el ícono del carrito.
   * @param {HTMLElement} img Elemento de imagen o icono a animar
   */
  function animateToCart(img) {
    const cartIcon = document.getElementById('cart-icon');
    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    // Clonar el elemento para animar
    const clone = img.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.top = imgRect.top + 'px';
    clone.style.left = imgRect.left + 'px';
    clone.style.width = imgRect.width + 'px';
    clone.style.height = imgRect.height + 'px';
    clone.style.transition = 'all 0.8s ease-in-out';
    clone.style.zIndex = '1055'; // por encima del offcanvas
    document.body.appendChild(clone);

    // Disparar la transición en el siguiente frame
    requestAnimationFrame(() => {
      clone.style.top = cartRect.top + 'px';
      clone.style.left = cartRect.left + 'px';
      clone.style.width = '20px';
      clone.style.height = '20px';
      clone.style.opacity = '0.4';
    });

    // Limpiar después de la animación y aplicar rebote al contador
    clone.addEventListener('transitionend', () => {
      clone.remove();
      cartCount.classList.add('cart-bounce');
      setTimeout(() => cartCount.classList.remove('cart-bounce'), 600);
    }, { once: true });
  }

  /**
   * Añade un producto al carrito a partir de sus atributos de datos y actualiza la interfaz.
   * @param {HTMLElement} button Botón que se ha pulsado
   */
  function addItemFromButton(button) {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    cart.push({ id, name, price });
    saveCart();
    updateCartUI();

    // Encuentra la imagen o icono para animar
    const card = button.closest('.card');
    const img = card.querySelector('img') || card.querySelector('svg') || card.querySelector('i');
    if (img) {
      animateToCart(img);
    }
  }

  // Asigna listeners a los botones de añadir al carrito
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => addItemFromButton(btn));
  });

  // Maneja la eliminación de un producto (delegación de eventos)
  cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
      const index = parseInt(event.target.dataset.index, 10);
      cart.splice(index, 1);
      saveCart();
      updateCartUI();
    }
  });

  // Inicializa la interfaz con los datos del carrito almacenados
  updateCartUI();
});