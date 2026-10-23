(() => {
  const products = Object.entries(window.modaSphereCollections || {}).flatMap(([group, categories]) =>
    Object.entries(categories).flatMap(([category, items]) =>
      items.map((product) => ({ ...product, group, category }))
    )
  );
  const productId = new URLSearchParams(window.location.search).get("id");
  const product = products.find((item) => item.id === productId);
  if (!product) {
    document.querySelector(".product-detail").hidden = true;
    document.querySelector(".product-reviews").hidden = true;
    const status = document.getElementById("productStatus");
    status.textContent = "That piece is not in the current collection. ";
    const returnLink = document.createElement("a");
    returnLink.href = "home.html";
    returnLink.textContent = "Browse the collection";
    status.append(returnLink);
    return;
  }

  const formatPrice = (price) => new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0
  }).format(price);

  document.title = `ModaSphere | ${product.name}`;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productImage").alt = product.name;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productBreadcrumbName").textContent = product.name;
  document.getElementById("productPrice").textContent = formatPrice(product.price);
  document.getElementById("productGroup").textContent = `${product.group} / ${product.category}`;
  document.getElementById("productDescription").textContent =
    `${product.name} is part of the ModaSphere ${product.category.toLocaleLowerCase()} edit. A considered style for everyday wear and personal expression.`;
  document.getElementById("productCategoryLink").textContent = product.category;
  document.getElementById("productCategoryLink").href =
    `category.html?group=${encodeURIComponent(product.group)}&category=${encodeURIComponent(product.category)}`;

  const options = window.modaSphereGetProductOptions(product);
  const sizeSelect = document.getElementById("productSize");
  const isFootwear = product.type === "shoe" || product.type === "formal-shoe";
  const isApparel = ["shirt", "dress", "shorts", "pants", "jacket"].includes(product.type);
  sizeSelect.replaceChildren(...options.sizes.map((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = isFootwear ? `EU ${size}` : size;
    return option;
  }));
  const careGuidance = isApparel
    ? "Fabric composition is not specified for this listing. Check the garment's care label before washing or ironing, and follow those instructions."
    : isFootwear
      ? "The upper, lining, and sole materials are not specified for this listing. Check the product label or maker's care instructions; avoid soaking or heat drying unless they allow it."
      : product.type === "bag" || product.type === "hat"
        ? "The materials are not specified for this listing. Check the product label before cleaning; use a suitable gentle method and avoid soaking unless the care instructions allow it."
        : product.type === "socks"
          ? "The fiber content is not specified for this listing. Check the care label for washing temperature and drying instructions."
          : "Material and care details are not specified for this listing. Check the product label before cleaning.";
  document.getElementById("productCare").textContent = careGuidance;
  document.getElementById("productFit").textContent = isApparel
    ? `Displayed sizes: ${options.sizes.join(", ")}. A measured size chart and product-specific fit notes are not available; compare measurements with a similar garment you own. Sizes are not connected to live stock.`
    : isFootwear
      ? `Displayed sizes: EU ${options.sizes[0]}–${options.sizes[options.sizes.length - 1]}. A foot-length chart, width information, and brand-specific size conversion are not available; sizes are not connected to live stock.`
      : "Displayed size: One size. Product dimensions and measurements are not provided, and the option does not confirm live stock.";
  document.getElementById("productDelivery").textContent =
    "Checkout displays ₱99 shipping for basket subtotals below ₱2,500 and free shipping from ₱2,500. Orders and returns are not currently processed through this site. For store questions, email modasphere@gmail.com.";
  const colorOptions = document.getElementById("productColorOptions");
  const selectedColorName = document.getElementById("selectedColorName");
  let selectedColor = options.colors[0];
  colorOptions.replaceChildren(...options.colors.map((color, index) => {
    const colorButton = document.createElement("button");
    colorButton.type = "button";
    colorButton.className = "product-color-swatch";
    colorButton.dataset.colorName = color.name;
    colorButton.dataset.colorValue = color.value;
    colorButton.style.setProperty("--swatch-color", color.value);
    colorButton.setAttribute("aria-label", `Select ${color.name}`);
    colorButton.setAttribute("aria-pressed", String(index === 0));
    colorButton.addEventListener("click", () => {
      selectedColor = color;
      selectedColorName.textContent = color.name;
      addButton.dataset.productColor = color.name;
      for (const swatch of colorOptions.querySelectorAll(".product-color-swatch")) {
        swatch.setAttribute("aria-pressed", String(swatch === colorButton));
      }
    });
    return colorButton;
  }));
  selectedColorName.textContent = selectedColor.name;

  const addButton = document.getElementById("productAddButton");
  addButton.dataset.productId = product.id;
  addButton.dataset.productName = product.name;
  addButton.dataset.productPrice = String(product.price);
  addButton.dataset.productImage = product.image;
  const syncSelection = () => {
    addButton.dataset.productSize = sizeSelect.value;
    addButton.dataset.productColor = selectedColor.name;
  };
  sizeSelect.addEventListener("change", syncSelection);
  syncSelection();
  if (product.originalPrice) {
    const oldPrice = document.createElement("del");
    oldPrice.textContent = formatPrice(product.originalPrice);
    const saleLabel = document.createElement("span");
    saleLabel.className = "product-sale-label";
    saleLabel.textContent =
      `${Math.round((1 - product.price / product.originalPrice) * 100)}% off`;
    document.getElementById("productPrice").append(" ", oldPrice, " ", saleLabel);
  }

  const favorite = document.getElementById("productFavorite");
  favorite.dataset.favoriteId = product.id;
  favorite.dataset.favoriteName = product.name;
  favorite.dataset.favoritePrice = String(product.price);
  favorite.dataset.favoriteImage = product.image;

  const reviewForm = document.getElementById("reviewForm");
  const reviewStars = reviewForm.querySelector(".review-stars");
  const reviewPreview = document.getElementById("reviewPreview");
  const reviewStatus = document.getElementById("reviewStatus");
  let selectedRating = 0;
  reviewStars.addEventListener("click", (event) => {
    const starButton = event.target.closest("button");
    if (!starButton) return;
    selectedRating = [...reviewStars.querySelectorAll("button")].indexOf(starButton) + 1;
    reviewStars.querySelectorAll("button").forEach((button, index) => {
      const isSelected = index < selectedRating;
      button.textContent = isSelected ? "★" : "☆";
      button.setAttribute("aria-pressed", String(index === selectedRating - 1));
    });
    reviewStatus.textContent = `${selectedRating} out of 5 stars selected.`;
  });
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (selectedRating === 0) {
      reviewStatus.textContent = "Choose a star rating to preview your review.";
      reviewStars.querySelector("button").focus();
      return;
    }

    const preview = document.createElement("article");
    preview.className = "review-preview-card";
    const heading = document.createElement("strong");
    heading.textContent = "Your review preview";
    const stars = document.createElement("p");
    stars.className = "review-preview-stars";
    stars.setAttribute("aria-label", `${selectedRating} out of 5 stars`);
    stars.textContent = `${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}`;
    const comment = document.createElement("p");
    comment.textContent = document.getElementById("reviewComment").value.trim() ||
      "No written comment added.";
    const notice = document.createElement("small");
    notice.textContent = "Private preview only — this review has not been published or saved.";
    preview.append(heading, stars, comment, notice);
    reviewPreview.replaceChildren(preview);
    reviewPreview.hidden = false;
    reviewStatus.textContent = "Review preview created. It has not been published or saved.";
  });
})();
