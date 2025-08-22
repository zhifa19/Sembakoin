let index = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
function showSlide(i) { const slidesContainer = document.querySelector('.slides'); index = (i + slides.length) % slides.length; slidesContainer.style.transform = `translateX(${-index * 320}px)`; }
prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));
const cartItems = [];
const cartList = document.getElementById('cart-items');
document.querySelectorAll('.add-to-cart').forEach((btn, i) => { btn.addEventListener('click', () => { cartItems.push(`Produk ${i+1}`); updateCart(); }); });
function updateCart() { cartList.innerHTML = cartItems.map(item => `<li>${item}</li>`).join(''); }
const testimoniList = document.getElementById('testimoni-list');
const testimoniForm = document.getElementById('testimoni-form');
testimoniForm.addEventListener('submit', e => { e.preventDefault(); const nama = document.getElementById('nama').value; const pesan = document.getElementById('pesan').value; const li = document.createElement('li'); li.textContent = `${nama}: ${pesan}`; testimoniList.appendChild(li); testimoniForm.reset(); });