const CONFIG = {
  brandName: 'Braja Bloom',
  tagline: 'Little Treasures, Rooted in Braj.',
  contactEmail: '',
  whatsappNumber: '', // Add the business number with country code, digits only.
  instagramUrl: '#instagram-profile',
  currency: 'INR',
  demoMode: true,
  storageKeys: { bag: 'braja-bloom-bag', wishlist: 'braja-bloom-wishlist', announcement: 'braja-bloom-announcement-dismissed' }
};

const CATEGORIES = [
  { id: 'sarees', title: 'Sarees', description: 'Grace in every drape.', image: 'https://images.pexels.com/photos/14928074/pexels-photo-14928074.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Woman wearing a red traditional Indian saree outdoors' },
  { id: 'vastra', title: 'Laddu Gopal Ji Vastra', description: 'Beautiful little outfits for your beloved Kanha.', image: 'https://images.pexels.com/photos/34459703/pexels-photo-34459703.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Krishna idol dressed in colorful devotional attire' },
  { id: 'tulsi', title: 'Tulsi Mala', description: 'Timeless devotion, thoughtfully presented.', image: 'https://images.pexels.com/photos/6634244/pexels-photo-6634244.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Natural prayer beads arranged on a warm neutral surface' },
  { id: 'handmade', title: 'Handmade Treasures', description: 'Special finds with a personal touch.', image: 'https://images.pexels.com/photos/31551511/pexels-photo-31551511.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Red embroidered mini purse with traditional beadwork' },
  { id: 'braj-raj', title: 'Braj Raj', description: 'A little connection to sacred Braj.', image: 'https://images.pexels.com/photos/35960312/pexels-photo-35960312.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Prem Mandir temple in Vrindavan' }
];

const PRODUCTS = [
  { id: 'gulabi-bloom', name: 'Gulabi Bloom Saree', price: 1499, category: 'sarees', image: 'https://images.pexels.com/photos/35108817/pexels-photo-35108817.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Woman in a pink Indian saree with elegant jewelry', description: 'A graceful demo saree in a soft rose palette, imagined for celebrations and everyday moments alike.', variants: ['One size'], featured: true, favorite: true },
  { id: 'vrindavan-rose', name: 'Vrindavan Rose Saree', price: 1899, category: 'sarees', image: 'https://images.pexels.com/photos/37054342/pexels-photo-37054342.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Woman wearing a traditional pink saree in natural light', description: 'An elegant drape inspired by the colours and quiet romance of Vrindavan.', variants: ['One size'], featured: true },
  { id: 'golden-hour', name: 'Golden Hour Ethnic Saree', price: 2199, category: 'sarees', image: 'https://images.pexels.com/photos/37054346/pexels-photo-37054346.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Woman in an ivory and gold traditional saree', description: 'A festive demo pick with warm golden tones and a timeless silhouette.', variants: ['One size'] },
  { id: 'kanha-floral', name: 'Kanha Floral Vastra', price: 299, category: 'vastra', image: 'https://images.pexels.com/photos/31727270/pexels-photo-31727270.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Krishna idol adorned with a bright floral garland', description: 'A little floral look for a cherished devotional moment. Exact sizing can be confirmed in your inquiry.', variants: ['Small', 'Medium', 'Large'], featured: true },
  { id: 'peacock-charm', name: 'Peacock Charm Poshak', price: 399, category: 'vastra', image: 'https://images.pexels.com/photos/33789503/pexels-photo-33789503.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Radha and Krishna idols dressed in colorful traditional garments', description: 'A bright demo poshak inspired by the colours of peacock feathers.', variants: ['Small', 'Medium', 'Large'] },
  { id: 'classic-tulsi', name: 'Classic Tulsi Mala', price: 199, category: 'tulsi', image: 'https://images.pexels.com/photos/11215767/pexels-photo-11215767.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Prayer beads laid out on a natural wood surface', description: 'A simple, timeless mala concept presented as a devotional keepsake.', variants: ['One size'], featured: true, favorite: true },
  { id: 'sacred-bead', name: 'Sacred Bead Mala', price: 249, category: 'tulsi', image: 'https://images.pexels.com/photos/11132407/pexels-photo-11132407.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Mala beads with a tassel arranged on warm wood', description: 'A thoughtful bead mala demo with a quiet, natural finish.', variants: ['One size'] },
  { id: 'floral-potli', name: 'Floral Handmade Potli', price: 349, category: 'handmade', image: 'https://images.pexels.com/photos/18555113/pexels-photo-18555113.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Close-up of a fabric bag with embroidered flowers', description: 'A charming potli concept for gifting, celebrations, and little keepsakes.', variants: ['Rose', 'Ivory'], featured: true },
  { id: 'keepsake-box', name: 'Little Keepsake Gift Box', price: 499, category: 'handmade', image: 'https://images.pexels.com/photos/8819577/pexels-photo-8819577.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Colorful gifts arranged on a festive tray with marigold flowers', description: 'A sweet gift-box concept for collecting meaningful little things.', variants: ['Blush', 'Sage'] },
  { id: 'braj-raj-collection', name: 'Braj Raj Collection', price: 199, category: 'braj-raj', image: 'https://images.pexels.com/photos/39080855/pexels-photo-39080855.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Traditional Indian puja thali with ceremonial offerings', description: 'A demo collection concept inspired by sacred Braj. Details can be confirmed directly with the business.', variants: ['Small', 'Large'], favorite: true }
];

const GALLERY = [
  { image: PRODUCTS[0].image, alt: 'Rose-toned saree detail' },
  { image: PRODUCTS[3].image, alt: 'Colourful devotional outfit detail' },
  { image: PRODUCTS[5].image, alt: 'Natural wooden beads' },
  { image: PRODUCTS[7].image, alt: 'A handmade potli keepsake' },
  { image: PRODUCTS[8].image, alt: 'Wrapped gift box' },
  { image: PRODUCTS[9].image, alt: 'Braj-inspired devotional keepsake' }
];

const PLACEHOLDER_REVIEWS = [
  { quote: '“A lovely way to discover small treasures. I would love to see this filled with real favourites.”', label: 'Placeholder review · Replace before launch' },
  { quote: '“The thoughtful presentation makes every piece feel like it has a story to tell.”', label: 'Placeholder review · Replace before launch' },
  { quote: '“A beautiful concept for finding something special for a loved one or yourself.”', label: 'Placeholder review · Replace before launch' }
];

const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: CONFIG.currency, maximumFractionDigits: 0 });
const state = {
  category: 'all', query: '', sort: 'featured', wishlistOnly: false,
  wishlist: readStorage(CONFIG.storageKeys.wishlist, []), bag: readStorage(CONFIG.storageKeys.bag, []),
  activeProduct: null, toastTimer: null, previousFocus: null
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { showToast('Browser storage is unavailable in this session.'); }
}

function getCategoryName(id) {
  return CATEGORIES.find(category => category.id === id)?.title ?? 'Collection';
}

function renderCategories() {
  const categoryGrid = document.querySelector('[data-category-grid]');
  categoryGrid.innerHTML = CATEGORIES.map(category => `
    <a class="category-card" href="#shop" data-category-link="${category.id}" aria-label="Browse ${category.title}">
      <span class="category-card__image"><img src="${category.image}" alt="${category.alt}" loading="lazy" data-image-fallback></span>
      <h3>${category.title}</h3><p>${category.description}</p>
      <span class="category-card__action">Explore collection <span aria-hidden="true">→</span></span>
    </a>`).join('');
  const filters = [{ id: 'all', title: 'All treasures' }, ...CATEGORIES.map(({ id, title }) => ({ id, title }))];
  const filterMarkup = filters.map(filter => `<button class="filter-button" type="button" data-filter="${filter.id}" aria-pressed="${filter.id === state.category}">${filter.title}</button>`).join('');
  document.querySelector('[data-filter-list]').innerHTML = filterMarkup;
  document.querySelector('[data-sheet-filter-list]').innerHTML = filterMarkup;
}

function productCard(product) {
  const isSaved = state.wishlist.includes(product.id);
  return `<article class="product-card">
    <div class="product-card__image" data-open-product="${product.id}" role="group" aria-label="${product.name}">
      <img src="${product.image}" alt="${product.alt}" loading="lazy" data-image-fallback>
      <button class="product-card__heart" type="button" aria-label="${isSaved ? 'Remove from' : 'Add to'} wishlist: ${product.name}" aria-pressed="${isSaved}" data-wishlist="${product.id}">${isSaved ? '♥' : '♡'}</button>
      <button class="product-card__quick" type="button" data-open-product="${product.id}">Quick view</button>
    </div>
    <div class="product-card__details"><p class="product-card__category">${getCategoryName(product.category)}</p>
      <div class="product-card__title-row"><h3 class="product-card__title" data-open-product="${product.id}" tabindex="0">${product.name}</h3><p class="product-card__price">${money.format(product.price)}</p></div>
      <button class="product-card__add" type="button" data-add-product="${product.id}">Add to bag <span aria-hidden="true">+</span></button>
    </div>
  </article>`;
}

function renderProducts() {
  const grid = document.querySelector('[data-product-grid]');
  let products = PRODUCTS.filter(product => state.category === 'all' || product.category === state.category);
  if (state.wishlistOnly) products = products.filter(product => state.wishlist.includes(product.id));
  if (state.query) {
    const query = state.query.toLocaleLowerCase();
    products = products.filter(product => `${product.name} ${getCategoryName(product.category)} ${product.description}`.toLocaleLowerCase().includes(query));
  }
  if (state.sort === 'low') products.sort((a, b) => a.price - b.price);
  if (state.sort === 'high') products.sort((a, b) => b.price - a.price);
  if (state.sort === 'featured') products.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  grid.innerHTML = products.map(productCard).join('');
  document.querySelector('[data-product-count]').textContent = `${products.length} ${products.length === 1 ? 'treasure' : 'treasures'} to explore`;
  document.querySelector('[data-empty-state]').hidden = products.length > 0;
  grid.hidden = products.length === 0;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === state.category)));
  document.querySelectorAll('[data-wishlist-filter]').forEach(button => button.setAttribute('aria-pressed', String(state.wishlistOnly)));
  const activeFilter = document.querySelector('[data-active-filter]');
  if (activeFilter) activeFilter.textContent = state.wishlistOnly ? 'Wishlist' : state.category === 'all' ? 'All' : getCategoryName(state.category);
  const filterResultCount = document.querySelector('[data-filter-result-count]');
  if (filterResultCount) filterResultCount.textContent = products.length;
}

function renderFavorites() {
  const products = PRODUCTS.filter(product => product.favorite).slice(0, 3);
  document.querySelector('[data-favorites]').innerHTML = products.map((product, index) => `
    <article class="favorite-card ${index === 0 ? 'favorite-card--large' : ''}"><div class="favorite-card__image" data-open-product="${product.id}" tabindex="0" role="button" aria-label="View ${product.name}"><img src="${product.image}" alt="${product.alt}" loading="lazy" data-image-fallback><span class="demo-badge">Demo favourite</span></div><div class="favorite-card__details"><h3>${product.name}</h3><p>${money.format(product.price)}</p></div></article>`).join('');
}

function renderGallery() {
  document.querySelector('[data-gallery]').innerHTML = GALLERY.map(item => `<div class="gallery-tile"><img src="${item.image}" alt="${item.alt}" loading="lazy" data-image-fallback><span aria-hidden="true">♡</span></div>`).join('');
  document.querySelector('[data-testimonials]').innerHTML = PLACEHOLDER_REVIEWS.map(review => `<article class="quote-card"><span class="quote-card__mark" aria-hidden="true">“</span><blockquote>${review.quote}</blockquote><p>${review.label}</p></article>`).join('');
}

function renderBag() {
  state.bag = state.bag.filter(item => PRODUCTS.some(product => product.id === item.productId) && Number.isInteger(item.quantity) && item.quantity > 0);
  saveStorage(CONFIG.storageKeys.bag, state.bag);
  const count = state.bag.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.querySelector('[data-bag-count]');
  countElement.textContent = count;
  countElement.setAttribute('aria-label', `${count} ${count === 1 ? 'item' : 'items'} in bag`);
  document.querySelector('[data-drawer-count]').textContent = `(${count})`;
  const itemsElement = document.querySelector('[data-bag-items]');
  itemsElement.innerHTML = state.bag.map(item => {
    const product = PRODUCTS.find(entry => entry.id === item.productId);
    const lineKey = `${item.productId}::${item.variant ?? ''}`;
    return `<article class="bag-line"><img class="bag-line__image" src="${product.image}" alt="${product.alt}" data-image-fallback>
      <div class="bag-line__main"><h3>${product.name}</h3><p>${item.variant ? `Option: ${item.variant} · ` : ''}${money.format(product.price)} each</p><div class="quantity-control" aria-label="Quantity for ${product.name}"><button type="button" aria-label="Decrease quantity" data-quantity="${lineKey}" data-change="-1">−</button><span>${item.quantity}</span><button type="button" aria-label="Increase quantity" data-quantity="${lineKey}" data-change="1">+</button></div></div>
      <div class="bag-line__aside"><strong class="bag-line__price">${money.format(product.price * item.quantity)}</strong><button class="remove-line" type="button" data-remove-line="${lineKey}">Remove</button></div></article>`;
  }).join('');
  const empty = state.bag.length === 0;
  document.querySelector('[data-bag-empty]').hidden = !empty;
  document.querySelector('[data-bag-footer]').hidden = empty;
  const subtotal = state.bag.reduce((sum, item) => sum + PRODUCTS.find(product => product.id === item.productId).price * item.quantity, 0);
  document.querySelector('[data-bag-subtotal]').textContent = money.format(subtotal);
}

function addToBag(productId, variant, quantity = 1) {
  const existing = state.bag.find(item => item.productId === productId && item.variant === variant);
  if (existing) existing.quantity += quantity;
  else state.bag.push({ productId, variant, quantity });
  saveStorage(CONFIG.storageKeys.bag, state.bag);
  renderBag();
  showToast('Added to your little bag.');
}

function toggleWishlist(productId) {
  state.wishlist = state.wishlist.includes(productId) ? state.wishlist.filter(id => id !== productId) : [...state.wishlist, productId];
  saveStorage(CONFIG.storageKeys.wishlist, state.wishlist);
  renderProducts();
  showToast(state.wishlist.includes(productId) ? 'Saved to your wishlist.' : 'Removed from your wishlist.');
}

function showToast(message) {
  const toast = document.querySelector('[data-toast]');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function setOverlay(open) {
  const overlay = document.querySelector('[data-overlay]');
  overlay.hidden = !open;
  document.body.classList.toggle('is-locked', open);
  requestAnimationFrame(() => overlay.classList.toggle('is-visible', open));
}

function openFilterSheet() {
  closeMenu();
  state.previousFocus = document.activeElement;
  const sheet = document.querySelector('[data-filter-sheet]');
  sheet.inert = false;
  sheet.setAttribute('aria-hidden', 'false');
  setOverlay(true);
  requestAnimationFrame(() => sheet.classList.add('is-open'));
  sheet.querySelector('[data-filter="all"]').focus();
}

function closeFilterSheet() {
  const sheet = document.querySelector('[data-filter-sheet]');
  sheet.classList.remove('is-open');
  sheet.inert = true;
  sheet.setAttribute('aria-hidden', 'true');
  const anotherDialogOpen = !document.querySelector('[data-product-dialog]').inert || !document.querySelector('[data-bag-drawer]').inert;
  if (!anotherDialogOpen) setOverlay(false);
  if (state.previousFocus?.isConnected) state.previousFocus.focus();
}

function resetFilters() {
  state.category = 'all';
  state.query = '';
  state.sort = 'featured';
  state.wishlistOnly = false;
  document.querySelector('[data-search]').value = '';
  document.querySelector('[data-sort]').value = 'featured';
  renderProducts();
}

function openBag() {
  closeMenu();
  state.previousFocus = document.activeElement;
  const drawer = document.querySelector('[data-bag-drawer]');
  drawer.inert = false;
  drawer.setAttribute('aria-hidden', 'false');
  setOverlay(true);
  requestAnimationFrame(() => drawer.classList.add('is-open'));
  document.querySelector('[data-bag-close]').focus();
}

function closeBag() {
  const drawer = document.querySelector('[data-bag-drawer]');
  drawer.classList.remove('is-open');
  drawer.inert = true;
  drawer.setAttribute('aria-hidden', 'true');
  const dialogOpen = !document.querySelector('[data-product-dialog]').inert;
  if (!dialogOpen) setOverlay(false);
  if (state.previousFocus?.isConnected) state.previousFocus.focus();
}

function openProduct(productId) {
  const product = PRODUCTS.find(entry => entry.id === productId);
  if (!product) return;
  closeMenu();
  state.activeProduct = product;
  state.previousFocus = document.activeElement;
  const variantControl = product.variants?.length > 1 ? `<div class="variant-field"><label for="product-variant">Choose an option</label><select id="product-variant" data-product-variant>${product.variants.map(option => `<option value="${option}">${option}</option>`).join('')}</select></div>` : '';
  document.querySelector('[data-dialog-content]').innerHTML = `<img class="product-dialog__image" src="${product.image}" alt="${product.alt}" data-image-fallback><div class="product-dialog__details"><p class="eyebrow">${getCategoryName(product.category)}</p><h2 id="dialog-title">${product.name}</h2><p class="product-dialog__price">${money.format(product.price)} <span class="demo-disclaimer">Illustrative demo price</span></p><p class="product-dialog__description">${product.description}</p>${variantControl}<div class="dialog-quantity"><label for="quantity-value">Quantity</label><div class="quantity-control"><button type="button" aria-label="Decrease quantity" data-modal-quantity="-1">−</button><span id="quantity-value" data-modal-quantity-value>1</span><button type="button" aria-label="Increase quantity" data-modal-quantity="1">+</button></div></div><div class="product-dialog__buttons"><button class="button button--rose" type="button" data-modal-add>Add to bag <span aria-hidden="true">+</span></button><button class="button button--outline" type="button" data-order-product>Order via WhatsApp <span aria-hidden="true">↗</span></button></div></div>`;
  const dialog = document.querySelector('[data-product-dialog]');
  dialog.inert = false;
  dialog.setAttribute('aria-hidden', 'false');
  document.querySelector('[data-bag-drawer]').inert = true;
  setOverlay(true);
  requestAnimationFrame(() => dialog.classList.add('is-open'));
  document.querySelector('[data-product-close]').focus();
}

function closeProduct() {
  const dialog = document.querySelector('[data-product-dialog]');
  dialog.classList.remove('is-open');
  dialog.inert = true;
  dialog.setAttribute('aria-hidden', 'true');
  const bagOpen = document.querySelector('[data-bag-drawer]').classList.contains('is-open');
  if (!bagOpen) setOverlay(false);
  if (state.previousFocus?.isConnected) state.previousFocus.focus();
  state.activeProduct = null;
}

function closeMenu(restoreFocus = false) {
  document.body.classList.remove('is-menu-open');
  const toggle = document.querySelector('[data-menu-toggle]');
  const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  document.querySelector('#primary-navigation').classList.remove('is-open');
  if (restoreFocus && wasOpen) toggle.focus();
}

function normalizedWhatsAppNumber() {
  const number = CONFIG.whatsappNumber.replace(/\D/g, '');
  return number.length >= 7 && number.length <= 15 ? number : '';
}

function orderViaWhatsApp(items) {
  const number = normalizedWhatsAppNumber();
  if (!number) {
    showToast('WhatsApp ordering will be available after business contact details are added.');
    return;
  }
  const lines = items.map(({ product, variant, quantity }) => `• ${product.name}${variant ? ` (${variant})` : ''} × ${quantity} — ${money.format(product.price)} each; ${money.format(product.price * quantity)} estimated`);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const message = `Hello ${CONFIG.brandName}! I would like to ask about these demo items:\n${lines.join('\n')}\nEstimated subtotal: ${money.format(subtotal)}\n\nPlease confirm availability and final details.`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function handleImageFallback(image) {
  image.alt = `${image.alt} (image unavailable)`;
  image.style.visibility = 'hidden';
  image.parentElement?.classList.add('image-unavailable');
}

function trapDialogFocus(event) {
  const activeDialog = [...document.querySelectorAll('[role="dialog"]')].find(dialog => !dialog.inert);
  if (!activeDialog || event.key !== 'Tab') return;
  const focusable = [...activeDialog.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), [tabindex="0"]')].filter(element => element.getClientRects().length);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function init() {
  document.title = `${CONFIG.brandName} | ${CONFIG.tagline}`;
  document.querySelectorAll('.brand__name').forEach(element => { element.textContent = CONFIG.brandName; });
  document.querySelectorAll('.brand__tagline').forEach(element => { element.textContent = CONFIG.tagline; });
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  const contactLink = document.querySelector('[data-contact-link]');
  const contactDetails = document.querySelector('[data-contact-display]');
  const whatsappNumber = normalizedWhatsAppNumber();
  if (CONFIG.contactEmail) {
    contactLink.href = `mailto:${CONFIG.contactEmail}`;
    contactLink.textContent = 'Email us';
    contactDetails.textContent = CONFIG.contactEmail;
  } else if (whatsappNumber) {
    contactLink.href = `https://wa.me/${whatsappNumber}`;
    contactLink.target = '_blank';
    contactLink.rel = 'noopener noreferrer';
    contactLink.textContent = 'Message us on WhatsApp';
    contactDetails.textContent = `WhatsApp: +${whatsappNumber}`;
  }
  document.querySelectorAll('[data-instagram-link]').forEach(link => {
    link.href = CONFIG.instagramUrl;
    if (CONFIG.instagramUrl.startsWith('#')) link.addEventListener('click', event => { event.preventDefault(); showToast('Add the Instagram profile URL in js/script.js.'); });
  });
  if (whatsappNumber) {
    const floatingLink = document.querySelector('[data-floating-whatsapp]');
    floatingLink.href = `https://wa.me/${normalizedWhatsAppNumber()}`;
    floatingLink.hidden = false;
  }
  try { if (localStorage.getItem(CONFIG.storageKeys.announcement) === 'true') document.querySelector('#announcement').hidden = true; } catch { /* The announcement preference is optional. */ }
  renderCategories(); renderFavorites(); renderGallery(); renderProducts(); renderBag();

  document.addEventListener('click', event => {
    const target = event.target.closest('button, a, [data-open-product]');
    if (!target) return;
    if (target.matches('[data-dismiss-announcement]')) {
      document.querySelector('#announcement').hidden = true;
      try { localStorage.setItem(CONFIG.storageKeys.announcement, 'true'); } catch { /* Storage is optional. */ }
    } else if (target.matches('[data-menu-toggle]')) {
      const open = target.getAttribute('aria-expanded') !== 'true';
      target.setAttribute('aria-expanded', String(open));
      target.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      document.querySelector('#primary-navigation').classList.toggle('is-open', open);
      document.body.classList.toggle('is-menu-open', open);
    } else if (target.closest('#primary-navigation')) closeMenu();
    else if (target.matches('[data-filter-open]')) openFilterSheet();
    else if (target.matches('[data-filter-close]')) closeFilterSheet();
    else if (target.matches('[data-bag-open]')) openBag();
    else if (target.matches('[data-bag-close], [data-continue-shopping]')) closeBag();
    else if (target.matches('[data-product-close]')) closeProduct();
    else if (target.matches('[data-filter]')) { state.category = target.dataset.filter; state.wishlistOnly = false; renderProducts(); if (!document.querySelector('[data-filter-sheet]').inert) closeFilterSheet(); }
    else if (target.matches('[data-category-link]')) { state.category = target.dataset.categoryLink; state.wishlistOnly = false; renderProducts(); }
    else if (target.matches('[data-wishlist-filter]')) {
      state.wishlistOnly = !state.wishlistOnly; state.category = 'all';
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' }); renderProducts();
    } else if (target.matches('[data-reset-filters]')) {
      resetFilters();
    } else if (target.matches('[data-filter-reset]')) {
      resetFilters(); closeFilterSheet();
    } else if (target.matches('[data-wishlist]')) { event.stopPropagation(); toggleWishlist(target.dataset.wishlist); }
    else if (target.matches('[data-add-product]')) {
      const product = PRODUCTS.find(item => item.id === target.dataset.addProduct); addToBag(product.id, product.variants?.[0], 1);
    } else if (target.matches('[data-open-product]')) openProduct(target.dataset.openProduct);
    else if (target.matches('[data-modal-quantity]')) {
      const quantity = document.querySelector('[data-modal-quantity-value]'); quantity.textContent = Math.max(1, Number(quantity.textContent) + Number(target.dataset.modalQuantity));
    } else if (target.matches('[data-modal-add]')) {
      const variant = document.querySelector('[data-product-variant]')?.value ?? state.activeProduct.variants?.[0];
      addToBag(state.activeProduct.id, variant, Number(document.querySelector('[data-modal-quantity-value]').textContent)); closeProduct();
    } else if (target.matches('[data-order-product]')) {
      const variant = document.querySelector('[data-product-variant]')?.value ?? state.activeProduct.variants?.[0];
      orderViaWhatsApp([{ product: state.activeProduct, variant, quantity: Number(document.querySelector('[data-modal-quantity-value]').textContent) }]);
    } else if (target.matches('[data-quantity]')) {
      const [productId, variant = ''] = target.dataset.quantity.split('::');
      const item = state.bag.find(entry => entry.productId === productId && (entry.variant ?? '') === variant);
      if (item) { item.quantity += Number(target.dataset.change); if (item.quantity < 1) state.bag = state.bag.filter(entry => entry !== item); saveStorage(CONFIG.storageKeys.bag, state.bag); renderBag(); }
    } else if (target.matches('[data-remove-line]')) {
      const [productId, variant = ''] = target.dataset.removeLine.split('::');
      state.bag = state.bag.filter(item => !(item.productId === productId && (item.variant ?? '') === variant)); saveStorage(CONFIG.storageKeys.bag, state.bag); renderBag(); showToast('Removed from your bag.');
    } else if (target.matches('[data-order-bag]')) {
      orderViaWhatsApp(state.bag.map(item => ({ ...item, product: PRODUCTS.find(product => product.id === item.productId) })));
    } else if (target.matches('[data-search-focus]')) {
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => document.querySelector('[data-search]').focus(), 350);
    } else if (target.matches('[data-footer-category]')) { state.category = target.dataset.footerCategory; state.wishlistOnly = false; renderProducts(); }
    else if (target.matches('[data-placeholder-link]')) { event.preventDefault(); showToast('This page will be added with the real business details.'); }
    else if (target.matches('[data-contact-link]')) { event.preventDefault(); showToast('Add business contact details in js/script.js.'); }
  });

  document.addEventListener('keydown', event => {
    trapDialogFocus(event);
    if (event.key === 'Tab' && document.body.classList.contains('is-menu-open')) {
      const menuToggle = document.querySelector('[data-menu-toggle]');
      const links = [...document.querySelectorAll('#primary-navigation a')];
      const firstLink = links[0], lastLink = links[links.length - 1];
      if (event.shiftKey && document.activeElement === (firstLink ?? menuToggle)) {
        event.preventDefault();
        (document.activeElement === menuToggle ? lastLink : menuToggle).focus();
      } else if (!event.shiftKey && (document.activeElement === lastLink || document.activeElement === menuToggle)) {
        event.preventDefault();
        (document.activeElement === menuToggle ? firstLink : menuToggle).focus();
      }
    }
    if (event.key === 'Escape') {
      if (!document.querySelector('[data-product-dialog]').inert) closeProduct();
      else if (!document.querySelector('[data-bag-drawer]').inert) closeBag();
      else if (!document.querySelector('[data-filter-sheet]').inert) closeFilterSheet();
      else if (document.body.classList.contains('is-menu-open')) closeMenu(true);
    }
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.favorite-card__image, .product-card__title')) {
      if (event.key === ' ') event.preventDefault();
      openProduct(event.target.dataset.openProduct);
    }
  });
  document.querySelector('[data-search]').addEventListener('input', event => { state.query = event.target.value.trim(); renderProducts(); });
  document.querySelector('[data-sort]').addEventListener('change', event => { state.sort = event.target.value; renderProducts(); });
  document.querySelector('[data-newsletter]').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget, message = document.querySelector('[data-newsletter-message]'), email = form.elements.email;
    if (!email.value.trim() || !email.validity.valid) { email.setAttribute('aria-invalid', 'true'); message.textContent = 'Please enter a valid email address. This demo will not store it.'; email.focus(); return; }
    email.removeAttribute('aria-invalid'); message.textContent = 'Thanks for your interest. This demo does not store or submit email addresses.'; form.reset();
  });
  document.querySelector('[data-newsletter] input').addEventListener('input', event => event.currentTarget.removeAttribute('aria-invalid'));
  document.querySelector('[data-overlay]').addEventListener('click', event => {
    if (event.target !== event.currentTarget) return;
    if (!document.querySelector('[data-product-dialog]').inert) closeProduct();
    else if (!document.querySelector('[data-bag-drawer]').inert) closeBag();
    else closeFilterSheet();
  });
  document.addEventListener('error', event => { if (event.target instanceof HTMLImageElement && event.target.hasAttribute('data-image-fallback')) handleImageFallback(event.target); }, true);
}

init();
