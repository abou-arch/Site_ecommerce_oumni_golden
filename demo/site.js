(() => {
  // Add the confirmed WhatsApp number in international format without “+” when it is approved.
  const SHOP_WHATSAPP_NUMBER = "";
  const images = "images/";
  const products = [
    {brand:"Balea",name:"Crème pour les mains",detail:"7 versions au choix",image:"creme-mains-aloe-vera.jpg",href:"produit.html",tag:"Soin des mains"},
    {brand:"Balea",name:"Crème corps karité & argan",detail:"Pot de crème pour le corps",image:"balea-creme-corps-karite-argan.jpg",tag:"Soin du corps"},
    {brand:"Mixa",name:"Baume Cica Repair+",detail:"Format à confirmer",image:"mixa-cica-repair.jpg",tag:"Soin du corps"},
    {brand:"Balea",name:"Crème de jour Vital",detail:"Pot et sa boîte",image:"balea-vital-creme-jour.jpg",tag:"Soin du visage"},
    {brand:"Balea",name:"Déodorant crème Sensitive",detail:"Pot de déodorant crème",image:"balea-deo-creme-sensitive.jpg",tag:"Hygiène"},
    {brand:"Balea",name:"Huile démaquillante à l’argan",detail:"Flacon pompe",image:"balea-huile-demaquillante.jpg",tag:"Soin du visage"},
    {brand:"",name:"Ourson en peluche",detail:"Taille à confirmer",image:"peluche-ours.jpg",tag:"Idée cadeau"},
    {brand:"",name:"Éponges de douche tressées",detail:"Trois coloris",image:"eponges-douche.jpg",tag:"Accessoire"}
  ];
  const related = [products[1],products[4],products[5],products[2],products[3]];
  const variantNames = ["Aloe Vera","Q10","Camomille","Glamorous Moment","Pénétration rapide","Crème-huile","Urée"];
  const variantImages = ["creme-mains-aloe-vera.jpg","creme-mains-q10.jpg","creme-mains-camomille.jpg","creme-mains-glamorous-moment.jpg","creme-mains-penetration-rapide.jpg","creme-mains-huile.jpg","creme-mains-uree.jpg"];
  const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Same card anatomy as the template: framed packshot, name and maker, a meta line, then a full-width pill.
  function card(product) {
    const label = `${product.name}${product.brand ? ` ${product.brand}` : ""}`;
    const target = product.href || "";
    const media = target ? `<a class="product-media" href="${target}" aria-label="Découvrir ${product.name}">` : `<div class="product-media">`;
    const cta = target
      ? `<a class="product-cta" href="${target}">Voir les versions <span aria-hidden="true">↗</span></a>`
      : `<button class="product-cta" type="button" data-order="Bonjour Oumouna, quel est le prix de : ${label} ?">Demander le prix</button>`;
    return `<article class="product-card">${media}<img src="${images}${product.image}" alt="${label}" loading="lazy"><span class="product-tag">${product.tag}</span>${target ? "</a>" : "</div>"}<div class="product-row"><h3>${target ? `<a href="${target}">${product.name}</a>` : product.name}</h3>${product.brand ? `<span class="product-brand">${product.brand}</span>` : ""}</div><p class="product-meta"><span>${product.detail}</span><span>Prix à confirmer</span></p>${cta}</article>`;
  }
  document.querySelectorAll("[data-product-grid]").forEach((grid) => { grid.innerHTML = products.map(card).join(""); });
  document.querySelectorAll("[data-related-grid]").forEach((grid) => { grid.innerHTML = related.map(card).join(""); });
  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => {
    const rail = button.closest("section")?.querySelector(".product-rail");
    if (!rail) return;
    const direction = button.dataset.scroll === "next" ? 1 : -1;
    rail.scrollBy({left: direction * Math.max(260, rail.clientWidth * 0.72), behavior: motionOK ? "smooth" : "auto"});
  }));

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".main-nav");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }));
  }

  const dialog = document.querySelector(".contact-dialog");
  const dialogText = dialog?.querySelector("[data-dialog-message]");
  let currentMessage = "Bonjour Oumouna, je souhaite découvrir votre boutique.";
  function contact(message) {
    currentMessage = message || currentMessage;
    if (SHOP_WHATSAPP_NUMBER) {
      const target = `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(currentMessage)}`;
      window.open(target, "_blank", "noopener,noreferrer");
      return;
    }
    if (dialogText) dialogText.textContent = "Le numéro WhatsApp sera ajouté après confirmation par Oumouna. Aucun contact ni paiement n’est simulé pour le moment.";
    if (dialog && !dialog.open) dialog.showModal();
  }
  // Delegated so the buttons rendered from the product data are covered too.
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-order]");
    if (!trigger) return;
    event.preventDefault();
    contact(trigger.dataset.order);
  });
  document.querySelectorAll("[data-dialog-close],.dialog-close").forEach((button) => button.addEventListener("click", () => dialog?.close()));
  dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

  // Links such as “Livraison et délais” point at a FAQ entry: open it as well as scrolling to it.
  function openFaq(hash) {
    const item = hash && hash.startsWith("#faq-") ? document.querySelector(hash) : null;
    if (item instanceof HTMLDetailsElement) item.open = true;
  }
  document.querySelectorAll('a[href^="#faq-"]').forEach((link) => link.addEventListener("click", () => openFaq(link.getAttribute("href"))));
  openFaq(window.location.hash);

  let quantity = 1;
  const quantityOutput = document.querySelector("[data-quantity-value]");
  document.querySelectorAll("[data-quantity]").forEach((button) => button.addEventListener("click", () => {
    quantity = Math.max(1, quantity + (button.dataset.quantity === "plus" ? 1 : -1));
    if (quantityOutput) quantityOutput.value = String(quantity);
  }));
  function chooseVariant(index) {
    const safeIndex = Math.max(0, Math.min(variantImages.length - 1, index));
    const image = document.querySelector("[data-main-product-image]");
    if (image) {
      image.src = `${images}${variantImages[safeIndex]}`;
      image.alt = `Crème pour les mains Balea, version ${variantNames[safeIndex]}`;
    }
    const label = document.querySelector("[data-current-variant]");
    if (label) label.textContent = variantNames[safeIndex];
    document.querySelectorAll("[data-variant]").forEach((button) => {
      const selected = Number(button.dataset.variant) === safeIndex;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }
  document.querySelectorAll("[data-variant]").forEach((button) => button.addEventListener("click", () => chooseVariant(Number(button.dataset.variant))));
  document.querySelectorAll("[data-product-order]").forEach((button) => button.addEventListener("click", () => {
    const label = document.querySelector("[data-current-variant]")?.textContent || variantNames[0];
    contact(`Bonjour Oumouna, je souhaite connaître la disponibilité de ${quantity} × crème pour les mains Balea, version ${label}.`);
  }));

  // Motion: sections fade in once, the editorial caption lights up word by word, the collage drifts.
  // Everything stays visible and still when reduced motion is requested.
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if (motionOK && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }), {rootMargin: "0px 0px -8% 0px", threshold: 0.12});
    revealTargets.forEach((node) => observer.observe(node));
  }

  const wordBlocks = motionOK ? [...document.querySelectorAll("[data-scroll-words]")] : [];
  wordBlocks.forEach((block) => {
    const words = block.textContent.trim().split(/\s+/);
    block.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(" ");
  });
  const tiles = motionOK ? [...document.querySelectorAll("[data-speed]")] : [];

  let ticking = false;
  function onScroll() {
    ticking = false;
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
    const viewport = window.innerHeight;
    wordBlocks.forEach((block) => {
      const top = block.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (viewport * 0.92 - top) / (viewport * 0.5)));
      const words = block.querySelectorAll(".word");
      words.forEach((word, index) => {
        const amount = Math.min(1, Math.max(0, progress * words.length - index));
        word.style.setProperty("--word-opacity", String(0.22 + amount * 0.78));
      });
    });
    // Half the drift on phones, where the tiles sit close to the heading.
    const drift = window.innerWidth < 760 ? 0.5 : 1;
    tiles.forEach((tile) => {
      const box = tile.parentElement.getBoundingClientRect();
      const offset = (box.top + box.height / 2 - viewport / 2) * Number(tile.dataset.speed) * drift;
      tile.style.setProperty("--shift", `${offset.toFixed(1)}px`);
    });
  }
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(onScroll);
  }, {passive: true});
  onScroll();
})();
