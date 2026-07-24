// 📱 DİR NİMRO D WHATSAPP DYALEK HNA
const PHONE_NUMBER = "212702602431"; 

// 🛍️ Liste d les 18 produits (Format .png)
const products = [
  // 💍 8 ANNEAUX (earrings)
  { id: 1, category: "earrings", name: "Anneau Minimaliste Gold", price: 120, image: "anneaux1.png" },
  { id: 2, category: "earrings", name: "Anneau Tressé Chic", price: 130, image: "anneaux2.png" },
  { id: 3, category: "earrings", name: "Anneau Double Rang", price: 140, image: "anneaux3.png" },
  { id: 4, category: "earrings", name: "Anneau Texturé Gold", price: 125, image: "anneaux4.png" },
  { id: 5, category: "earrings", name: "Anneau Fine Élégance", price: 110, image: "anneaux5.png" },
  { id: 6, category: "earrings", name: "Anneau Martelée", price: 135, image: "anneaux6.png" },
  { id: 7, category: "earrings", name: "Anneau Croix Zircon", price: 150, image: "anneaux7.png" },
  { id: 8, category: "earrings", name: "Anneau Vintage Gold", price: 145, image: "anneaux8.png" },

  // 📿 6 BRACELETS (Charms)
  { id: 9, category: "charms", name: "Bracelet Chaîne Epaisse", price: 160, image: "bracelet1.png" },
  { id: 10, category: "charms", name: "Bracelet Perles d'Eau", price: 180, image: "bracelet2.png" },
  { id: 11, category: "charms", name: "Bracelet Maille Royale", price: 170, image: "bracelet3.png" },
  { id: 12, category: "charms", name: "Bracelet Charm Cœur", price: 165, image: "bracelet4.png" },
  { id: 13, category: "charms", name: "Bracelet Fin Tressé", price: 150, image: "bracelet5.png" },
  { id: 14, category: "charms", name: "Bracelet Gourmette Chic", price: 175, image: "bracelet6.png" },

  // 💎 3 COLLIERS (Necklaces)
  { id: 15, category: "necklaces", name: "Collier Chunky Gold", price: 220, image: "collier1.png" },
  { id: 16, category: "necklaces", name: "Collier Pendentif Soleil", price: 240, image: "collier2.png" },
  { id: 17, category: "necklaces", name: "Collier Multirang Chic", price: 250, image: "collier3.png" },

  // 👑 1 BAGUE (Rings)
  { id: 18, category: "rings", name: "Bague Solitaire Éléganza", price: 190, image: "bague1.png" }
];

let cart = [];

// 1. Render Products
function renderProducts(itemsToRender) {
  const container = document.getElementById('products-grid');
  if (!container) return;
  container.innerHTML = '';

  if (itemsToRender.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Aucun produit trouvé dans cette catégorie.</p>';
    return;
  }

  itemsToRender.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/220?text=AURA+JEWELS';">
        <h4>${p.name}</h4>
        <span class="price">${p.price} DH</span>
        <button class="btn-add-cart" onclick="addToCart(${p.id})">ADD TO CART</button>
      </div>
    `;
  });
}

renderProducts(products);

// 2. Filter Category
function filterCategory(categoryName, element) {
  document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');

  if (categoryName === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === categoryName);
    renderProducts(filtered);
  }
}

// 3. Toggle Cart Drawer
function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('active');
  document.getElementById('cart-overlay').classList.toggle('active');
}

// 4. Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  toggleCart();
}

// 5. Supprimer un produit complètement du panier
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

// 6. Update Cart UI & Calculate Total
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; color:#736d65; margin-top:2rem;">Votre panier est vide ♡</p>';
  }

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    count += item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <h4 style="font-family:var(--font-serif); font-size:1rem;">${item.name}</h4>
          <span style="font-size:11px; color:#736d65;">${item.price} x ${item.qty} = ${itemTotal} DH</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <div>
            <button onclick="changeQty(${item.id}, -1)" style="padding:2px 6px; cursor:pointer;">-</button>
            <span style="margin:0 5px; font-size:12px;">${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)" style="padding:2px 6px; cursor:pointer;">+</button>
          </div>
          <button onclick="removeFromCart(${item.id})" style="background:none; border:none; cursor:pointer; font-size:1rem;" title="Supprimer">
            🗑️
          </button>
        </div>
      </div>
    `;
  });

  cartCount.innerText = count;
  cartTotal.innerText = `${total} DH`;
}

// 7. Modifier la quantité (+ / -)
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
  }
  updateCartUI();
}

// 8. Order via WhatsApp
function sendWhatsApp() {
  if (cart.length === 0) {
    alert("Le panier est vide!");
    return;
  }

  const name = document.getElementById('client-name').value;
  const phone = document.getElementById('client-phone').value;
  const city = document.getElementById('client-city').value;

  if (!name || !phone || !city) {
    alert("Veuillez remplir vos informations (Nom, Téléphone, Adresse)!");
    return;
  }

  let message = `✨ *NOUVELLE COMMANDE - AURA ACCESSORIES* ✨\n\n`;
  message += `👤 *Nom:* ${name}\n`;
  message += `📞 *Tél:* ${phone}\n`;
  message += `📍 *Adresse/Ville:* ${city}\n\n`;
  message += `📦 *Articles:* \n`;

  let total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `• ${item.name} (x${item.qty}) : ${itemTotal} DH\n`;
  });

  message += `\n💰 *TOTAL COMMANDE:* ${total} DH\n`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
}