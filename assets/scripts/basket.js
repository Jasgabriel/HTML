(function () {
  const storageKey = "modasphere.basket";
  const basketDialog = document.getElementById("basketDialog");
  const basketItems = document.getElementById("basketItems");
  const basketEmpty = document.getElementById("basketEmpty");
  const basketStatus = document.getElementById("basketStatus");
  const basketTotal = document.getElementById("basketTotal");
  const basketCount = document.querySelector(".basket-count");
  const productStatus = document.getElementById("productStatus");
  const bagButtons = document.querySelectorAll("[data-bag-button]");
  const checkoutButton = document.querySelector("[data-go-checkout]");
  const organizedImageNames = new Set([
    "classic-beige-fedora.png",
    "brown-flat-cap.png",
    "black-cowboy-hat.png",
    "black-top-hat.png",
    "charcoal-baseball-cap.png"
  ]);

  function resolveProductImage(image) {
    const filename = image.split(/[\\/]/).pop();
    return organizedImageNames.has(filename)
      ? `assets/images/${filename}`
      : image;
  }

  function readBasket() {
    const stored = localStorage.getItem(storageKey);
    if (stored === null) {
      return [];
    }

    let items;
    try {
      items = JSON.parse(stored);
    } catch {
      throw new Error("Saved basket data is unreadable. Clear the basket to continue.");
    }

    if (
      !Array.isArray(items) ||
      items.some((item) =>
        !item ||
        typeof item.id !== "string" ||
        typeof item.name !== "string" ||
        typeof item.image !== "string" ||
        !Number.isFinite(item.price) ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1
      )
    ) {
      throw new Error("Saved basket data is invalid. Clear the basket to continue.");
    }

    return items;
  }

  function saveBasket(items) {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }

  function formatPrice(amount) {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 2
    }).format(amount);
  }

  function showStatus(text, target) {
    if (!target) {
      basketStatus.textContent = text;
      return;
    }

    target.textContent = text;
  }

  function makeBasketItem(item) {
    const row = document.createElement("article");
    row.className = "basket-item";

    const image = document.createElement("img");
    image.src = resolveProductImage(item.image);
    image.alt = item.name;
    row.append(image);

    const details = document.createElement("div");
    details.className = "basket-item-details";

    const name = document.createElement("h3");
    name.textContent = item.name;
    details.append(name);

    const price = document.createElement("p");
    price.textContent = `${formatPrice(item.price)} each`;
    details.append(price);

    const controls = document.createElement("div");
    controls.className = "basket-item-controls";
    controls.append(
      makeActionButton("−", "decrease", item.id, `Decrease ${item.name} quantity`),
      makeQuantity(item.quantity),
      makeActionButton("+", "increase", item.id, `Increase ${item.name} quantity`),
      makeActionButton("Remove", "remove", item.id, `Remove ${item.name}`, "basket-remove")
    );
    details.append(controls);
    row.append(details);
    return row;
  }

  function makeActionButton(label, action, id, ariaLabel, className = "") {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.basketAction = action;
    button.dataset.productId = id;
    button.setAttribute("aria-label", ariaLabel);
    button.textContent = label;
    if (className) {
      button.className = className;
    }
    return button;
  }

  function makeQuantity(quantity) {
    const value = document.createElement("span");
    value.textContent = String(quantity);
    value.setAttribute("aria-label", `Quantity ${quantity}`);
    return value;
  }

  function renderBasket() {
    const items = readBasket();
    basketItems.replaceChildren(...items.map(makeBasketItem));
    basketEmpty.hidden = items.length > 0;
    basketItems.hidden = items.length === 0;
    basketTotal.textContent = formatPrice(
      items.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const quantity = items.reduce((total, item) => total + item.quantity, 0);
    for (const button of bagButtons) {
      button.setAttribute("aria-label", `Shopping bag, ${quantity} ${quantity === 1 ? "item" : "items"}`);
    }
    basketCount.textContent = String(quantity);
    basketCount.hidden = quantity === 0;
    if (checkoutButton) {
      const empty = quantity === 0;
      checkoutButton.setAttribute("aria-disabled", String(empty));
      checkoutButton.tabIndex = empty ? -1 : 0;
    }
  }

  function updateBasket(update) {
    const items = update(readBasket());
    saveBasket(items);
    renderBasket();
  }

  function addProduct(button) {
    const product = {
      id: button.dataset.productId,
      name: button.dataset.productName,
      image: button.dataset.productImage,
      price: Number(button.dataset.productPrice)
    };

    if (!product.id || !product.name || !product.image || !Number.isFinite(product.price) || product.price < 0) {
      throw new Error("This product cannot be added because its details are incomplete.");
    }

    updateBasket((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        items.push({ ...product, quantity: 1 });
      }
      return items;
    });

    showStatus(`${product.name} added to your basket.`, productStatus);
  }

  for (const button of bagButtons) {
    button.addEventListener("click", () => {
      try {
        renderBasket();
        basketStatus.textContent = "";
        basketDialog.showModal();
      } catch (error) {
        basketStatus.textContent = error.message;
        basketDialog.showModal();
      }
    });
  }

  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-basket]");
    if (addButton) {
      try {
        addProduct(addButton);
      } catch (error) {
        showStatus(`Could not add item: ${error.message}`, productStatus);
      }
      return;
    }

    const actionButton = event.target.closest("[data-basket-action]");
    if (actionButton) {
      try {
        updateBasket((items) => {
          const itemIndex = items.findIndex(
            (item) => item.id === actionButton.dataset.productId
          );
          if (itemIndex === -1) {
            return items;
          }

          const item = items[itemIndex];
          switch (actionButton.dataset.basketAction) {
            case "increase":
              item.quantity += 1;
              break;
            case "decrease":
              item.quantity -= 1;
              if (item.quantity === 0) {
                items.splice(itemIndex, 1);
              }
              break;
            case "remove":
              items.splice(itemIndex, 1);
              break;
            default:
              throw new Error("Unknown basket action.");
          }
          return items;
        });
        basketStatus.textContent = "";
      } catch (error) {
        basketStatus.textContent = `Could not update the basket: ${error.message}`;
      }
      return;
    }

    if (event.target.closest("[data-clear-basket]")) {
      try {
        updateBasket(() => []);
        basketStatus.textContent = "Basket cleared.";
      } catch (error) {
        basketStatus.textContent = `Could not clear the basket: ${error.message}`;
      }
    }
  });

  document.querySelectorAll("[data-close-basket]").forEach((button) => {
    button.addEventListener("click", () => basketDialog.close());
  });

  if (checkoutButton) {
    checkoutButton.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        if (readBasket().length === 0) {
          basketStatus.textContent = "Add an item to your basket before checkout.";
          return;
        }

        window.location.href = "checkout.html";
      } catch (error) {
        basketStatus.textContent = `Could not start checkout: ${error.message}`;
      }
    });
  }

  try {
    renderBasket();
  } catch (error) {
    basketStatus.textContent = `Could not load your basket: ${error.message}`;
  }
})();
