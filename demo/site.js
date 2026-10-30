(() => {
  // Add the confirmed WhatsApp number in international format without “+” when it is approved.
  const SHOP_WHATSAPP_NUMBER = "";
  const images = "images/";
  const products = [
    {brand:"Balea",name:"Crème pour les mains",detail:"7 versions au choix",image:"creme-mains-aloe-vera.jpg",href:"produit.html",tag:"SOIN DES MAINS"},
    {brand:"Balea",name:"Crème corps karité & argan",detail:"Pot de crème pour le corps",image:"balea-creme-corps-karite-argan.jpg",tag:"SOIN DU CORPS"},
    {brand:"Mixa",name:"Baume Cica Repair+",detail:"Format à confirmer",image:"mixa-cica-repair.jpg",tag:"SOIN DU CORPS"},
    {brand:"Balea",name:"Crème de jour Vital",detail:"Pot et sa boîte",image:"balea-vital-creme-jour.jpg",tag:"SOIN DU VISAGE"},
    {brand:"Balea",name:"Déodorant crème Sensitive",detail:"Pot de déodorant crème",image:"balea-deo-creme-sensitive.jpg",tag:"HYGIÈNE"},
    {brand:"Balea",name:"Huile démaquillante à l’argan",detail:"Flacon pompe",image:"balea-huile-demaquillante.jpg",tag:"SOIN DU VISAGE"},
    {brand:"Cadeaux",name:"Ourson en peluche",detail:"Taille à confirmer",image:"peluche-ours.jpg",tag:"IDÉE CADEAU"},
    {brand:"Soins du corps",name:"Éponges de douche tressées",detail:"Trois coloris",image:"eponges-douche.jpg",tag:"ACCESSOIRE"}
  ];
  const related = [products[1],products[4],products[5],products[2]];
  const variantNames = ["Aloe Vera","Q10","Camomille","Glamorous Moment","Pénétration rapide","Crème-huile","Urée"];
  const variantImages = ["creme-mains-aloe-vera.jpg","creme-mains-q10.jpg","creme-mains-camomille.jpg","creme-mains-glamorous-moment.jpg","creme-mains-penetration-rapide.jpg","creme-mains-huile.jpg","creme-mains-uree.jpg"];

  function card(product) {
    return `<article class="product-card"><a href="${product.href || "#contact"}" aria-label="Découvrir ${product.name}"><img src="${images}${product.image}" alt="${product.name}${product.brand ? ` ${product.brand}` : ""}" loading="lazy"><span class="product-tag">${product.tag}</span></a><div class="product-card-copy"><p class="product-brand">${product.brand}</p><h3>${product.name}</h3><p class="product-detail-line">${product.detail}</p><a class="text-link" href="${product.href || "#contact"}">Prix à confirmer <span aria-hidden="true">↗</span></a></div></article>`;
  }
  document.querySelectorAll("[data-product-grid]").forEach((grid) => { grid.innerHTML = products.map(card).join(""); });
  document.querySelectorAll("[data-related-grid]").forEach((grid) => { grid.innerHTML = related.map(card).join(""); });
  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
  const productRail = document.querySelector("[data-product-grid]");
  document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => {
    if (!productRail) return;
    const direction = button.dataset.scroll === "next" ? 1 : -1;
    productRail.scrollBy({left: direction * Math.max(250, productRail.clientWidth * 0.72), behavior: "smooth"});
  }));

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
  document.querySelectorAll("[data-order]").forEach((button) => button.addEventListener("click", () => contact(button.dataset.order)));
  document.querySelectorAll("[data-dialog-close],.dialog-close").forEach((button) => button.addEventListener("click", () => dialog?.close()));
  dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

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
})();
