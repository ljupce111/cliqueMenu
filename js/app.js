import { menuItems, CATEGORIES, CATEGORY_LABELS, FOOD_FILTERS } from './data.js'

const categoriesContainer = document.getElementById('categories');
const menuContainer = document.getElementById('menu')
const foodFilterContainer = document.getElementById("food-filters")

const modal = document.getElementById("item-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");
const modalPrice = document.getElementById("modal-price");
const modalClose = document.getElementById("modal-close");

let activeCategory = "all";
let isFilteredCategory = false;
let currentLang = "en";

function createMenuCard(item) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  if (!item.available) {
    card.classList.add("unavailable");
  }

  card.innerHTML = `
    <div class="menu-card-image">
      <img src="${item.image}" alt="${item.name[currentLang]}" class="menu-img">

      <div class="menu-card-dietary-overlay">
        ${item.mealOptions.vegan ? '<span class="tag vegan">Vegan</span>' : ''}
        ${item.mealOptions.meat
          .map(
            meatType =>
              `<span class="tag ${meatType}">
                ${meatType.charAt(0).toUpperCase() + meatType.slice(1)}
              </span>`
          )
          .join("")}
      </div>
    </div>

    <div class="menu-card-info">
      <h3 class="menu-card-name">${item.name[currentLang]}</h3>
      <h4 class="menu-card-description">
        ${item.description[currentLang]}
      </h4>
      <hr>
    </div>

    <div class="menu-card-price-dietary">
      <div class="menu-card-prices">
        <div class="price-mkd">${item.price} MKD</div>
        <div class="price-eur">
          €${(item.price / 61.5).toFixed(2)}
        </div>
      </div>

      <button class="view-btn">+</button>
    </div>
  `;

  const viewBtn = card.querySelector(".view-btn");
  viewBtn.addEventListener("click", () => {
    openItemModal(item);
  });

  return card;
}


function renderCategories() {
  console.log("rendering categories")
  categoriesContainer.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const button = document.createElement("button");

    // Language-aware category label
    button.textContent = CATEGORY_LABELS[cat][currentLang];
    button.classList.add("category-btn");

    // Active state
    if (!isFilteredCategory && activeCategory === cat) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeCategory = cat;
      isFilteredCategory = false;

      renderMenu();
      renderCategories();
      renderFoodFilters();
    });

    categoriesContainer.appendChild(button);
  });
}

function renderMenu() {
  menuContainer.innerHTML = "";

  // Determine categories to render
  const categoriesToRender = activeCategory === "all" || isFilteredCategory
    ? CATEGORIES.filter(cat => cat !== "all")
    : [activeCategory];

  categoriesToRender.forEach(cat => {
    // Get items in this category
    let itemsInCategory = menuItems.filter(item => item.category === cat);

    // Apply filtered category if active
    if (isFilteredCategory) {
      itemsInCategory = itemsInCategory.filter(item => {
        if (activeCategory === "vegan") return item.mealOptions.vegan;        if (["beef", "chicken", "pork", "seafood"].includes(activeCategory)) {
          return item.mealOptions.meat.includes(activeCategory);
        }
        return false;
      });
    }

    // Skip empty categories
    if (itemsInCategory.length === 0) return;

    // Create category heading (skip heading for single filtered category if you prefer)
    if (activeCategory === "all" || !isFilteredCategory) {
      const heading = document.createElement("h2");
      heading.textContent = CATEGORY_LABELS[cat][currentLang]?.toUpperCase() || CATEGORY_LABELS[cat].en.toUpperCase();
      heading.classList.add("category-heading");
      menuContainer.appendChild(heading);
    }

    // Create container for cards
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    itemsInCategory.forEach(item => {
      const card = createMenuCard(item);
      categoryContainer.appendChild(card);
    });

    menuContainer.appendChild(categoryContainer);
  });
}
function renderFoodFilters(){
    foodFilterContainer.innerHTML = '';
    FOOD_FILTERS.forEach(filter => {
        const button = document.createElement("button");
        button.textContent = filter.label;
        button.classList.add("food-filter-btn")

        if (isFilteredCategory && activeCategory === filter.key) {
            button.classList.add("active");
        }

        button.addEventListener('click', () => {
            activeCategory = filter.key;
            isFilteredCategory = true;
            renderMenu();
            renderFoodFilters();
            renderCategories();
        });
        foodFilterContainer.appendChild(button);
    });
}
function openItemModal(item) {
  modalImg.src = item.image;
  modalImg.alt = item.name[currentLang];

  modalName.textContent = item.name[currentLang];
  modalDescription.textContent =
    item.description[currentLang] || "No description available.";

  if (item.ingredients?.[currentLang]) {
    modalIngredients.textContent =
      item.ingredients[currentLang].join(", ");
  } else {
    modalIngredients.textContent = "";
  }

  const priceEUR = (item.price / 61.5).toFixed(2);
  modalPrice.textContent = `${item.price} MKD / €${priceEUR}`;

  modal.classList.remove("hidden");
}
modalClose.addEventListener("click",() => {
  modal.classList.add("hidden")
});
modal.addEventListener("click", e => {
  if(e.target === modal){
    modal.classList.add("hidden");
  }
});

renderCategories();
renderFoodFilters();
renderMenu();