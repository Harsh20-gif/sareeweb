- `brandName`, `tagline`, and `contactEmail` set the visible brand and contact values.
# Braja Bloom

Braja Bloom is a fictional, static storefront concept for an Instagram-based boutique offering sarees, devotional clothing, handmade gifts, and traditional accessories. It is a frontend demo, not a live shop.

## Features

- Responsive boutique storefront with category collections, featured demo favourites, story, image gallery, placeholder reviews, and footer navigation.
- Product search, category filtering, price sorting, empty state, quick-view dialog, and wishlist.
- Shopping bag with quantity controls, item removal, estimated subtotal, and browser `localStorage` persistence.
- WhatsApp click-to-chat inquiry messages for a product or the full bag. The number is intentionally unset.
- Client-side newsletter validation. Email addresses are not submitted or stored.
- Keyboard-accessible dialogs and menu, visible focus states, reduced-motion support, and lazy-loaded images.

## File structure

```text
braja-bloom/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── README.md
└── README.md
```

The site currently references public Pexels image URLs. See `assets/README.md` for using local files.

## Run locally

Open `index.html` directly in a browser, or serve this folder with any static file server. No build step, package manager, or backend is required.

## Update the demo

Edit the `CONFIG` object near the top of `js/script.js`:

- `brandName` and `tagline` update the visible logo and document title.
- `contactEmail` supplies an optional contact email shown in the footer.
- `whatsappNumber` must be the business's full international number using digits only, including country code and excluding `+`, spaces, and punctuation. It is blank by default; ordering displays a setup message until configured. The floating WhatsApp action appears only for a number with 7 to 15 digits.
- `instagramUrl` is a placeholder. Replace it with the real profile URL.
- `currency` controls formatted prices; the examples are in INR.
- `demoMode` marks this storefront as demo data and is available for future extensions.

Update the centralized `PRODUCTS` array to change product names, illustrative prices, category ids, descriptions, variants, and image URLs. Prices and inventory are demo data, not verified stock or offers. Category ids must match an id in `CATEGORIES`. Use relevant image URLs and descriptive alt text. Category cards are set in `CATEGORIES`; featured favourites and gallery imagery are configured in `js/script.js`.

Replace `PLACEHOLDER_REVIEWS` with authentic customer-approved feedback before production, or remove the testimonials section. Current review text and labels are fictional placeholders, not real customers or verified reviews.

The shopping bag and wishlist are stored only in the visitor's browser using `localStorage`; visitors can clear them through browser settings. Orders are WhatsApp inquiries, not database records. The page does not process payments. Newsletter submissions are neither stored nor sent.

## Deploy to GitHub Pages

1. Put the contents of this folder at the root of a GitHub repository, with `index.html` at the repository root.
2. Push the files to GitHub.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select the branch containing the site and the `/ (root)` folder, then save.
5. Open the Pages URL shown by GitHub. Relative CSS and JavaScript paths support repository URLs such as `https://username.github.io/repository/`.

Do not add a leading slash to local asset paths. This demo needs no server-side routes or environment variables.

## Production features not included

A real store would need verified product information and inventory, an order-management backend or managed commerce service, secure payment processing, shipping and tax rules, privacy and terms content, customer-support details, and a consent-aware mailing-list provider. WhatsApp messages are not recorded as orders by this site. Configure and test the real WhatsApp and Instagram contact details before publishing.
