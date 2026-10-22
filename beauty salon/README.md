# Syabonga Beauty Salon

A responsive, static salon website built with HTML, CSS, and vanilla JavaScript. No install or build step is required.

## Run locally

1. Open this folder in VS Code.
2. Open `index.html` in a browser. For a local server and automatic reload, install the VS Code **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

## Make it yours

Edit `scripts/config.js` to change:

- Salon name, phone, WhatsApp number, email, address, opening hours, and map link.
- The frontal-style inspiration gallery, services, descriptions, starting prices (ZAR), estimated durations, and image URLs.
- The hairstyle gallery uses original pink-toned vector illustrations by default. Add a photo URL to a style's `image` field in `scripts/config.js` to use your own photo instead.
- Service and main gallery demo photos use Unsplash; replace them with your own salon photos when ready.

Use the full international WhatsApp number with country code and digits only (for example, South Africa `27...`, without `+`, spaces, or punctuation). Until a number is set, the booking form clearly identifies itself as a demo and does not send or save enquiries. Once set, the form opens a pre-filled WhatsApp message; the client must press Send, and an appointment is not confirmed until the salon replies.

Add a Google Maps URL to `mapUrl`, or add the salon address and the site will make a Google Maps directions link from it. Replace the clearly labelled sample review in `index.html` with a genuine client testimonial before publishing.

## Project structure

- `index.html` — page content, metadata, and accessible form/gallery markup
- `styles/style.css` — visual design and responsive layouts
- `scripts/config.js` — editable salon details, frontal inspiration, and service/pricing data
- `scripts/main.js` — service rendering, mobile navigation, gallery lightbox, and booking form behavior
