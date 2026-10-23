(() => {
  const storageKey = "modasphere.wishlist";
  const toolbar = document.querySelector(".toolbar");
  const bagButton = toolbar?.querySelector("[data-bag-button]");
  if (!toolbar || !bagButton) {
    throw new Error("Favorites need a page toolbar and shopping bag button.");
  }

  const button = document.createElement("button");
  button.className = "wishlist-nav";
  button.type = "button";
  button.setAttribute("aria-label", "Open saved favorites");
  button.setAttribute("aria-haspopup", "dialog");
  button.innerHTML = '<span aria-hidden="true">♡</span><span class="wishlist-count" hidden></span>';
  toolbar.insertBefore(button, bagButton);

  const dialog = document.createElement("dialog");
  dialog.className = "wishlist-dialog";
  dialog.setAttribute("aria-labelledby", "wishlistTitle");
  dialog.innerHTML = `
    <header class="wishlist-header">
      <div><p class="eyebrow">YOUR EDIT</p><h2 id="wishlistTitle">Saved favorites</h2></div>
      <button type="button" class="wishlist-close" aria-label="Close saved favorites">×</button>
    </header>
    <p class="wishlist-status" role="status" aria-live="polite"></p>
    <p class="wishlist-empty">Your saved pieces will appear here. Tap the heart on a product to keep it close.</p>
    <div class="wishlist-items"></div>
  `;
  document.body.append(dialog);

  const count = button.querySelector(".wishlist-count");
  const status = dialog.querySelector(".wishlist-status");
  const empty = dialog.querySelector(".wishlist-empty");
  const list = dialog.querySelector(".wishlist-items");

  function readFavorites() {
    const saved = localStorage.getItem(storageKey);
    if (saved === null) {
      return [];
    }
    let favorites;
    try {
      favorites = JSON.parse(saved);
    } catch {
      throw new Error("Saved favorites could not be read. Clear the saved favorites in your browser storage and try again.");
    }
    if (!Array.isArray(favorites) || favorites.some((item) =>
      !item || typeof item.id !== "string" || typeof item.name !== "string" ||
      typeof item.image !== "string" || !Number.isFinite(item.price)
    )) {
      throw new Error("Saved favorites are invalid. Clear the saved favorites in your browser storage and try again.");
    }
    return favorites;
  }

  function setFavoriteButton(toggle, active, name) {
    toggle.setAttribute("aria-pressed", String(active));
    toggle.setAttribute(
      "aria-label",
      active ? `Remove ${name} from favorites` : `Save ${name} to favorites`
    );
    toggle.textContent = toggle.classList.contains("product-favorite")
      ? active ? "♥ Saved to favorites" : "♡ Save to favorites"
      : active ? "♥" : "♡";
  }

  function render() {
    const favorites = readFavorites();
    count.textContent = String(favorites.length);
    count.hidden = favorites.length === 0;
    for (const toggle of document.querySelectorAll("[data-favorite-id]")) {
      const favorite = favorites.find((item) => item.id === toggle.dataset.favoriteId);
      const name = toggle.dataset.favoriteName || toggle.closest(".catalog-product")?.querySelector("h2")?.textContent.trim() || "this piece";
      setFavoriteButton(toggle, Boolean(favorite), name);
    }
    empty.hidden = favorites.length > 0;
    list.replaceChildren(...favorites.map((item) => {
      const row = document.createElement("article");
      row.className = "wishlist-item";
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;
      const details = document.createElement("div");
      details.className = "wishlist-item-details";
      const name = document.createElement("a");
      name.href = `product.html?id=${encodeURIComponent(item.id)}`;
      name.textContent = item.name;
      const price = document.createElement("p");
      price.textContent = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0
      }).format(item.price);
      details.append(name, price);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "wishlist-remove";
      remove.dataset.removeFavorite = item.id;
      remove.setAttribute("aria-label", `Remove ${item.name} from favorites`);
      remove.textContent = "Remove";
      row.append(image, details, remove);
      return row;
    }));
  }

  function showError(error) {
    status.textContent = error.message;
  }

  button.addEventListener("click", () => {
    try {
      status.textContent = "";
      render();
      dialog.showModal();
    } catch (error) {
      showError(error);
      dialog.showModal();
    }
  });

  dialog.querySelector(".wishlist-close").addEventListener("click", () => dialog.close());

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-favorite-id]");
    const remove = event.target.closest("[data-remove-favorite]");
    if (!toggle && !remove) {
      return;
    }
    try {
      const favorites = readFavorites();
      const id = remove ? remove.dataset.removeFavorite : toggle.dataset.favoriteId;
      const index = favorites.findIndex((item) => item.id === id);
      let message;
      if (index >= 0) {
        message = `${favorites[index].name} removed from favorites.`;
        favorites.splice(index, 1);
      } else {
        const product = {
          id,
          name: toggle.dataset.favoriteName ||
            toggle.closest(".catalog-product")?.querySelector("h2")?.textContent.trim(),
          image: toggle.dataset.favoriteImage ||
            toggle.closest(".catalog-product")?.querySelector("img")?.getAttribute("src"),
          price: Number(toggle.dataset.favoritePrice ||
            toggle.closest(".catalog-product")?.querySelector("[data-add-to-basket]")?.dataset.productPrice)
        };
        if (!product.id || !product.name || !product.image || !Number.isFinite(product.price)) {
          throw new Error("This piece cannot be saved because its product details are incomplete.");
        }
        favorites.push(product);
        message = `${product.name} saved to favorites.`;
      }
      localStorage.setItem(storageKey, JSON.stringify(favorites));
      render();
      status.textContent = message;
    } catch (error) {
      showError(error);
    }
  });

  try {
    render();
  } catch (error) {
    showError(error);
  }
})();
