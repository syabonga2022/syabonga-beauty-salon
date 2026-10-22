(function () {
  "use strict";

  const config = window.SALON_CONFIG;
  const money = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  });

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function cleanWhatsappNumber(number) {
    return String(number || "").replace(/\D/g, "");
  }

  function createStyleArtwork(style) {
    const hair = {
      straight: `
        <path d="M119 278Q111 135 260 126Q409 135 401 278L389 560H131Z" fill="#241821"/>
        <path d="M132 220Q181 124 260 139Q340 124 388 220L362 248Q337 200 260 199Q183 200 158 248Z" fill="#33202b"/>
        <path d="M151 237Q182 205 199 205M369 237Q338 205 321 205" fill="none" stroke="#8b5965" stroke-width="5" stroke-linecap="round"/>
        <path d="M152 277L146 534M368 277L374 534" fill="none" stroke="#53303d" stroke-width="7"/>
      `,
      waves: `
        <path d="M119 280Q111 135 260 126Q409 135 401 280L390 560H130Z" fill="#281a24"/>
        <path d="M132 220Q181 124 260 139Q340 124 388 220L362 248Q337 200 260 199Q183 200 158 248Z" fill="#3a2531"/>
        <path d="M151 259C119 300 173 335 144 376S174 446 140 493S161 535 151 555M369 259C401 300 347 335 376 376S346 446 380 493S359 535 369 555" fill="none" stroke="#80515d" stroke-width="12" stroke-linecap="round"/>
        <path d="M151 259C119 300 173 335 144 376S174 446 140 493M369 259C401 300 347 335 376 376S346 446 380 493" fill="none" stroke="#291b25" stroke-width="7" stroke-linecap="round"/>
      `,
      sidePart: `
        <path d="M117 287Q102 137 254 126Q410 128 401 286L386 560H132Z" fill="#281a24"/>
        <path d="M128 225Q170 118 277 137Q352 141 390 223Q345 195 301 211Q251 174 196 216Q160 233 145 273Z" fill="#3a2531"/>
        <path d="M185 214Q211 177 251 157" fill="none" stroke="#d19ca3" stroke-width="5" stroke-linecap="round"/>
        <path d="M144 258C115 303 174 334 143 377S176 450 142 500S163 537 150 556M372 259C404 300 348 340 379 380S345 448 380 498S357 539 370 556" fill="none" stroke="#80515d" stroke-width="13" stroke-linecap="round"/>
        <path d="M144 258C115 303 174 334 143 377S176 450 142 500M372 259C404 300 348 340 379 380S345 448 380 498" fill="none" stroke="#291b25" stroke-width="7" stroke-linecap="round"/>
      `,
      bob: `
        <path d="M121 283Q112 135 260 126Q407 135 399 283L390 392Q360 437 330 416L327 266Q260 218 193 266L190 416Q160 437 130 392Z" fill="#241821"/>
        <path d="M132 221Q181 124 260 139Q340 124 388 221L360 250Q334 200 260 199Q185 200 159 250Z" fill="#33202b"/>
        <path d="M185 216Q218 187 258 158" fill="none" stroke="#c8929c" stroke-width="4" stroke-linecap="round"/>
        <path d="M147 282L139 381M373 282L381 381" fill="none" stroke="#63404a" stroke-width="8"/>
      `,
      curls: `
        <path d="M119 291Q103 150 260 126Q415 149 401 291L388 560H132Z" fill="#2b1b24"/>
        <g fill="#39232e" stroke="#563541" stroke-width="5">
          <circle cx="158" cy="216" r="32"/><circle cx="202" cy="174" r="34"/><circle cx="252" cy="158" r="34"/><circle cx="309" cy="174" r="35"/><circle cx="360" cy="216" r="32"/>
          <circle cx="143" cy="277" r="30"/><circle cx="377" cy="277" r="30"/><circle cx="148" cy="344" r="29"/><circle cx="372" cy="344" r="29"/>
        </g>
        <path d="M161 247Q204 197 260 198Q316 197 359 247" fill="none" stroke="#94636d" stroke-width="5"/>
      `,
    }[style.artwork] || "";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 640">
      <defs><linearGradient id="bg" x2="0" y2="1"><stop stop-color="#f6dce5"/><stop offset="1" stop-color="#dfaebb"/></linearGradient></defs>
      <rect width="520" height="640" fill="url(#bg)"/><circle cx="450" cy="95" r="80" fill="#fff1f5" opacity=".58"/>
      <path d="M0 510Q98 446 190 510T390 505T520 496V640H0Z" fill="#c78193" opacity=".35"/>
      <path d="M115 640Q125 481 216 466H304Q395 481 405 640Z" fill="#803e58"/>
      <path d="M224 410H296V500Q260 534 224 500Z" fill="#794238"/>
      ${hair}
      <path d="M181 255Q181 207 260 202Q339 207 339 255L329 355Q319 417 260 436Q201 417 191 355Z" fill="#925c48"/>
      <path d="M183 273Q171 254 158 279Q157 306 187 307M337 273Q349 254 362 279Q363 306 333 307Z" fill="#925c48"/>
      <path d="M211 302q15-11 30 0M279 302q15-11 30 0" fill="none" stroke="#38232a" stroke-width="5" stroke-linecap="round"/>
      <path d="M260 307l-8 35 12 4" fill="none" stroke="#704237" stroke-width="4" stroke-linecap="round"/>
      <path d="M244 366q16 11 32 0" fill="none" stroke="#6c303e" stroke-width="5" stroke-linecap="round"/>
      <path d="M194 274Q217 254 239 270M281 270Q303 254 326 274" fill="none" stroke="#33202a" stroke-width="8" stroke-linecap="round"/>
      <path d="M196 280Q201 252 226 252M324 280Q319 252 294 252" fill="none" stroke="#d2a77f" stroke-width="4"/>
      <path d="M230 456Q260 471 290 456" fill="none" stroke="#d2a77f" stroke-width="3"/>
      <circle cx="260" cy="72" r="3" fill="#c89163"/><circle cx="90" cy="366" r="4" fill="#fff1f5" opacity=".8"/>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function whatsappUrl(message) {
    const number = cleanWhatsappNumber(config.whatsapp);
    return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "";
  }

  function setupBusinessDetails() {
    setText('[data-business="name"]', config.name);
    setText('[data-business="phone"]', config.phone || "Add your phone number");
    setText('[data-business="email"]', config.email || "Add your email address");
    setText('[data-business="address"]', config.address || "Add your salon address");
    setText('[data-business="hours"]', config.hours || "Add your business hours");
    document.title = `${config.name} | Your Beauty, Our Passion`;

    document.querySelectorAll('[data-contact="phone"]').forEach((link) => {
      if (config.phone) link.href = `tel:${config.phone.replace(/[^\d+]/g, "")}`;
    });
    document.querySelectorAll('[data-contact="email"]').forEach((link) => {
      if (config.email) link.href = `mailto:${config.email}`;
    });

    const mapLink = document.querySelector('[data-business-link="map"]');
    const mapPlaceholder = document.getElementById("map-placeholder");
    if (config.mapUrl) {
      mapLink.href = config.mapUrl;
      mapPlaceholder.hidden = true;
    } else if (config.address) {
      mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`;
      mapPlaceholder.querySelector("p").textContent = "Map directions will open in Google Maps using the address above.";
    } else {
      mapLink.hidden = true;
    }

    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      const url = whatsappUrl(`Hello ${config.name}! I'd love to ask about booking an appointment.`);
      if (url) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      } else {
        link.href = "#booking";
        link.addEventListener("click", (event) => {
          event.preventDefault();
          document.getElementById("booking-mode-note").scrollIntoView({ behavior: "smooth", block: "center" });
          document.getElementById("booking-mode-note").focus({ preventScroll: true });
        });
        link.setAttribute("aria-label", "WhatsApp booking is not configured yet; view demo booking information");
      }
    });
  }

  function renderServices() {
    const grid = document.getElementById("service-grid");
    const priceList = document.getElementById("price-list");
    const serviceSelect = document.getElementById("booking-service");
    (config.hairstyles || []).forEach((style) => {
      const looksGrid = document.getElementById("frontal-grid");
      const card = document.createElement("button");
      card.className = "look-card";
      card.type = "button";
      const artwork = style.image || createStyleArtwork(style);
      card.dataset.fullImage = artwork;
      card.setAttribute("aria-label", `View ${style.name} inspiration image`);
      const image = document.createElement("img");
      image.src = artwork;
      image.alt = style.imageAlt;
      image.loading = "lazy";
      const details = document.createElement("span");
      details.className = "look-details";
      const category = document.createElement("small");
      category.textContent = style.category;
      const title = document.createElement("strong");
      title.textContent = style.name;
      details.append(category, title);
      card.append(image, details);
      looksGrid.append(card);
    });

    config.services.forEach((service, index) => {
      const card = document.createElement("article");
      card.className = "service-card";
      const image = document.createElement("img");
      image.src = service.image;
      image.alt = service.imageAlt;
      image.loading = "lazy";
      const number = document.createElement("span");
      number.className = "service-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const body = document.createElement("div");
      body.className = "service-body";
      const title = document.createElement("h3");
      title.textContent = service.name;
      const description = document.createElement("p");
      description.textContent = service.description;
      const footer = document.createElement("div");
      footer.className = "service-footer";
      const price = document.createElement("span");
      price.textContent = `From ${money.format(service.price)}`;
      const duration = document.createElement("span");
      duration.textContent = service.duration;
      footer.append(price, duration);
      body.append(title, description, footer);
      card.append(image, number, body);
      grid.append(card);

      const row = document.createElement("div");
      row.className = "price-row";
      const serviceName = document.createElement("span");
      serviceName.textContent = service.name;
      const durationText = document.createElement("span");
      durationText.textContent = service.duration;
      const servicePrice = document.createElement("strong");
      servicePrice.textContent = `From ${money.format(service.price)}`;
      row.append(serviceName, durationText, servicePrice);
      priceList.append(row);

      const option = document.createElement("option");
      option.value = service.name;
      option.textContent = service.name;
      serviceSelect.append(option);
    });
  }

  function setupNavigation() {
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.getElementById("primary-nav");
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
      });
    });
  }

  function setupBookingForm() {
    const form = document.getElementById("booking-form");
    const status = document.getElementById("form-status");
    const dateInput = form.elements.date;
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localDate;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.classList.remove("is-error");
      status.textContent = "";
      if (!form.reportValidity()) return;

      const formData = new FormData(form);
      const details = [
        `Hello ${config.name}! I'd like to enquire about an appointment.`,
        `Name: ${formData.get("name")}`,
        `Phone: ${formData.get("phone")}`,
        `Email: ${formData.get("email") || "Not provided"}`,
        `Service: ${formData.get("service")}`,
        `Preferred date: ${formData.get("date")}`,
        `Preferred time: ${formData.get("time")}`,
        `Message: ${formData.get("message") || "None"}`
      ].join("\n");
      const url = whatsappUrl(details);

      if (url) {
        status.textContent = "Your WhatsApp message is ready. Review it and press Send in WhatsApp; your appointment is not confirmed until the salon replies.";
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        status.textContent = "Demo only: your enquiry has not been sent or saved, and no appointment is confirmed. Add a WhatsApp number in scripts/config.js to send this enquiry via WhatsApp.";
      }
    });
  }

  function setupGallery() {
    const dialog = document.getElementById("lightbox");
    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("p");
    document.querySelectorAll(".gallery-item, .look-card").forEach((item) => {
      item.addEventListener("click", () => {
        image.src = item.dataset.fullImage;
        image.alt = item.querySelector("img").alt;
        caption.textContent = item.querySelector(".look-details strong")?.textContent
          || item.querySelector("span").textContent;
        dialog.showModal();
      });
    });
    dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      image.removeAttribute("src");
      image.alt = "";
    });
  }

  setupBusinessDetails();
  renderServices();
  setupNavigation();
  setupBookingForm();
  setupGallery();
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
