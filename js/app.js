import { CATEGORIES, CATEGORY_LABELS, FOOD_FILTERS, FILTER_LABELS, noItemsText } from '../data/data.js';

const categoriesContainer = document.getElementById('categories');
const menuContainer = document.getElementById('menu');
const foodFilterContainer = document.getElementById("food-filters");
const langButtons = document.querySelectorAll(".lang-switch button");

const modal = document.getElementById("item-modal");
const modalClose = document.getElementById("modal-close");
const modalIngredients = document.getElementById("modal-ingredients");

let activeCategory = "all";
let activeFilter = "all";
let currentLang = "en";

let menuItems = [];

fetch('/data/menu.json')
  .then(response => response.json())
  .then(data => {
    menuItems = data;
    renderMenu(menuItems)
    console.log(menuItems)
  })
  .catch(err => console.error('Error loading menu:', err))

  
// -------------------- MENU CARD --------------------
function createMenuCard(item) {
  const card = document.createElement("div");
  card.classList.add("menu-card");
  if (!item.available) card.classList.add("unavailable");

  card.innerHTML = `
    <div class="menu-card-image">
      <img src="${item.image}" alt="${item.name.en}" class="menu-img">
      <div class="menu-card-dietary-overlay">
        ${item.mealOptions.vegan ? '<span class="tag vegan">Vegan</span>' : ''}
        ${item.mealOptions.meat?.map(meatType => 
          `<span class="tag ${meatType}">${meatType.charAt(0).toUpperCase() + meatType.slice(1)}</span>`
        ).join("")}
      </div>
    </div>

    <div class="menu-card-info">
      <h3 class="menu-card-name">${item.name.en}</h3>
      <h4 class="menu-card-description">${item.description[currentLang]}</h4>
      <hr>
    </div>

    <div class="menu-card-price-dietary">
      <div class="menu-card-prices">
        <div class="price-mkd">${item.price} MKD</div>
        <div class="price-eur">€${(item.price / 61.5).toFixed(2)}</div>
      </div>
      <button class="view-btn">+</button>
    </div>
  `;

  card.addEventListener("click", () => openItemModal(item));
  return card;
}

// -------------------- STICKY PHONE --------------------
function addStickyPhone() {
  if (document.getElementById("clique-phone")) return;

  const phone = document.createElement("a");
  phone.id = "clique-phone";
  phone.classList.add("phone-sticky");
  phone.textContent = "📞 075 312 306";

  function updateClick() {
    if (window.innerWidth < 768) {
      phone.href = "tel:+38970123456";
      phone.style.cursor = "pointer";
    } else {
      phone.removeAttribute("href");
      phone.style.cursor = "default";
    }
  }

  updateClick();
  window.addEventListener("resize", updateClick);
  menuContainer.appendChild(phone);
}
addStickyPhone();

// -------------------- CATEGORIES --------------------
function renderCategories() {
  categoriesContainer.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const button = document.createElement("button");
    button.textContent = CATEGORY_LABELS[cat][currentLang];
    button.classList.add("category-btn");

    if (activeCategory === cat) button.classList.add("active");

    button.addEventListener("click", () => {
      activeCategory = cat;
      renderMenu();
      renderCategories();
      renderFoodFilters();
    });

    categoriesContainer.appendChild(button);
  });
}

// -------------------- FOOD FILTERS --------------------
function renderFoodFilters() {
  foodFilterContainer.innerHTML = "";

  FOOD_FILTERS.forEach(filter => {
    const button = document.createElement("button");
    button.textContent = FILTER_LABELS[filter.key][currentLang];
    button.classList.add("food-filter-btn");

    if (activeFilter === filter.key) button.classList.add("active");

    button.addEventListener("click", () => {
      activeFilter = filter.key;
      renderMenu();
      renderFoodFilters();
      renderCategories();
    });

    foodFilterContainer.appendChild(button);
  });
}

// -------------------- MENU RENDER --------------------
function renderMenu() {
  menuContainer.innerHTML = "";

  const categoriesToRender = activeCategory === "all" 
    ? CATEGORIES.filter(cat => cat !== "all")
    : [activeCategory];

  let hasItems = false;

  categoriesToRender.forEach(cat => {
    let itemsInCategory = menuItems.filter(item => item.category === cat);

    // Apply filter
    if (activeFilter !== "all") {
      itemsInCategory = itemsInCategory.filter(item => {
        if (activeFilter === "vegan") return item.mealOptions.vegan;
        if (["beef", "chicken", "pork", "seafood"].includes(activeFilter)) {
          return item.mealOptions.meat?.includes(activeFilter);
        }
        return true;
      });
    }

    if (itemsInCategory.length === 0) return;

    hasItems = true;

    // Category heading if viewing "all"
    if (activeCategory === "all") {
      const heading = document.createElement("h2");
      heading.textContent = CATEGORY_LABELS[cat][currentLang]?.toUpperCase() || CATEGORY_LABELS[cat].en.toUpperCase();
      heading.classList.add("category-heading");
      menuContainer.appendChild(heading);
    }

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    itemsInCategory.forEach(item => {
      categoryContainer.appendChild(createMenuCard(item));
    });

    menuContainer.appendChild(categoryContainer);
  });

  if (!hasItems) {
    const noItems = document.createElement("p");
    noItems.textContent = noItemsText[currentLang] || noItemsText.en;
    noItems.classList.add("no-items-msg");
    menuContainer.appendChild(noItems);
  }
}

// -------------------- ITEM MODAL --------------------
function openItemModal(item) {
  document.getElementById("modal-img").src = item.image;
  document.getElementById("modal-img").alt = item.name[currentLang];
  document.getElementById("modal-name").textContent = item.name[currentLang];
  document.getElementById("modal-description").textContent = item.description[currentLang] || "No description available.";

  modalIngredients.innerHTML = "";
  item.ingredients?.[currentLang]?.forEach(ingredient => {
    const p = document.createElement("p");
    p.textContent = ingredient;
    modalIngredients.appendChild(p);
  });

  document.getElementById("modal-price").textContent = `${item.price} MKD`;
  document.getElementById("price-eur").textContent = `€${(item.price / 61.5).toFixed(2)}`;

  const dietaryInfo = document.getElementById("dietary-info");
  dietaryInfo.innerHTML = "";
  if (item.mealOptions.vegan) dietaryInfo.appendChild(Object.assign(document.createElement("p"), { textContent: "Vegan" }));
  if (item.mealOptions.vegetarian) dietaryInfo.appendChild(Object.assign(document.createElement("p"), { textContent: "Vegetarian" }));
  item.mealOptions.meat?.forEach(meatType => {
    dietaryInfo.appendChild(Object.assign(document.createElement("p"), { textContent: meatType.charAt(0).toUpperCase() + meatType.slice(1) }));
  });

  modal.classList.remove("hidden");
}

// -------------------- MODAL CLOSE --------------------
modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

// -------------------- LANGUAGE SWITCH --------------------
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderMenu();
    renderCategories();
    renderFoodFilters();
  });
});

// -------------------- INITIAL RENDER --------------------
langButtons[0].classList.add("active");
renderMenu();
renderCategories();
renderFoodFilters();
