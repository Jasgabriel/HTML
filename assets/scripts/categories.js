(function () {
  const categoriesButton = document.getElementById("categoriesButton");
  const categoriesMenu = document.getElementById("categoriesMenu");
  const menuSearchForm = document.getElementById("menuSearchForm");
  const menuSearchInput = document.getElementById("menuSearchInput");
  const menuSearchStatus = document.getElementById("menuSearchStatus");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const categoryButtons = [...categoriesMenu.querySelectorAll(".category-options button")];
  let closeMenuTimer;

  function setCategoriesOpen(open) {
    window.clearTimeout(closeMenuTimer);
    categoriesButton.setAttribute("aria-expanded", String(open));

    if (open) {
      categoriesMenu.hidden = false;
      categoriesMenu.inert = false;
      categoriesMenu.getBoundingClientRect();
      categoriesMenu.dataset.open = "true";
      return;
    }

    categoriesMenu.inert = true;
    delete categoriesMenu.dataset.open;
    closeMenuTimer = window.setTimeout(() => {
      if (categoriesButton.getAttribute("aria-expanded") === "false") {
        categoriesMenu.hidden = true;
      }
    }, 280);
  }

  function getCategory(button) {
    return {
      button,
      group: button.closest(".category-card").querySelector("h2").textContent.trim(),
      category: button.textContent.trim()
    };
  }

  function navigateToCategory({ group, category }) {
    const categoryUrl = new URL("category.html", window.location.href);
    categoryUrl.searchParams.set("group", group);
    categoryUrl.searchParams.set("category", category);
    window.location.href = categoryUrl.href;
  }

  function filterCategories(query) {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const matches = [];

    for (const button of categoryButtons) {
      const item = getCategory(button);
      const matchesQuery = !normalizedQuery ||
        item.category.toLocaleLowerCase().includes(normalizedQuery) ||
        item.group.toLocaleLowerCase().includes(normalizedQuery);

      button.hidden = !matchesQuery;
      if (matchesQuery) {
        matches.push(item);
      }
    }

    for (const card of categoriesMenu.querySelectorAll(".category-card")) {
      card.hidden = !card.querySelector(".category-options button:not([hidden])");
    }

    menuSearchStatus.textContent = normalizedQuery
      ? `${matches.length} ${matches.length === 1 ? "category" : "categories"} found`
      : "";
    return matches;
  }

  function submitCategorySearch(query) {
    const matches = filterCategories(query);
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!normalizedQuery) {
      menuSearchStatus.textContent = "Enter a category to search.";
      setCategoriesOpen(true);
      return;
    }

    const exactMatches = matches.filter(
      (item) => item.category.toLocaleLowerCase() === normalizedQuery
    );

    if (exactMatches.length === 1) {
      navigateToCategory(exactMatches[0]);
      return;
    }

    setCategoriesOpen(true);
    if (matches.length === 0) {
      menuSearchStatus.textContent = `No categories found for “${query.trim()}”.`;
    } else if (exactMatches.length > 1) {
      menuSearchStatus.textContent = "Choose a matching category below.";
    }
  }

  categoriesButton.addEventListener("click", () => {
    setCategoriesOpen(categoriesButton.getAttribute("aria-expanded") !== "true");
  });

  categoriesMenu.addEventListener("click", (event) => {
    const option = event.target.closest(".category-options button");
    if (option) {
      navigateToCategory(getCategory(option));
    }
  });

  menuSearchInput.addEventListener("input", () => {
    filterCategories(menuSearchInput.value);
    if (searchInput) {
      searchInput.value = menuSearchInput.value;
    }
  });

  menuSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitCategorySearch(menuSearchInput.value);
  });

  if (searchForm && searchInput) {
    searchInput.addEventListener("input", () => {
      menuSearchInput.value = searchInput.value;
      filterCategories(searchInput.value);
      if (searchInput.value.trim()) {
        setCategoriesOpen(true);
      }
    });

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      menuSearchInput.value = searchInput.value;
      submitCategorySearch(searchInput.value);
    });
  }

  if (clearSearch && searchInput) {
    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      menuSearchInput.value = "";
      filterCategories("");
      searchInput.focus();
    });
  }

  document.addEventListener("click", (event) => {
    if (!categoriesMenu.hidden &&
      !categoriesMenu.contains(event.target) &&
      !categoriesButton.contains(event.target) &&
      !(searchForm && searchForm.contains(event.target))) {
      setCategoriesOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setCategoriesOpen(false);
    }
  });
})();
