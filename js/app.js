import { menuItems, CATEGORIES, CATEGORY_LABELS, FOOD_FILTERS, noItemsText } from './data.js'

const categoriesContainer = document.getElementById('categories');
const menuContainer = document.getElementById('menu')
const foodFilterContainer = document.getElementById("food-filters")


const modal = document.getElementById("item-modal");
const modalClose = document.getElementById("modal-close");
const modalIngredients = document.getElementById("modal-ingredients");


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

function addStickyPhone() {
  let existing = document.getElementById("clique-phone");
  if (existing) return; 

  const phone = document.createElement("a");
  phone.id = "clique-phone";
  phone.href = "tel:+38975312306";
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
  // Append to menuContainer
  menuContainer.appendChild(phone);
}
addStickyPhone()

  card.addEventListener("click", () => {
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
  let categoriesToRender = activeCategory === "all" || isFilteredCategory
    ? CATEGORIES.filter(cat => cat !== "all")
    : [activeCategory];

  // Filter out categories that have no items at all
  categoriesToRender = categoriesToRender.filter(cat => {
    const itemsInCategory = menuItems.filter(item => item.category === cat);
    return itemsInCategory.length > 0;
  });

  // If no categories have items (rare), show a general message
  if (categoriesToRender.length === 0) {
    const noItems = document.createElement("p");
    noItems.textContent = noItemsText[currentLang] || noItemsText.en;
    noItems.classList.add("no-items-msg");
    noItems.style.textAlign = "center";
    noItems.style.marginTop = "50px";
    menuContainer.appendChild(noItems);
    return;
  }

  categoriesToRender.forEach(cat => {
    // Get items in this category
    let itemsInCategory = menuItems.filter(item => item.category === cat);

    // Apply filtered category if active
    if (isFilteredCategory) {
      itemsInCategory = itemsInCategory.filter(item => {
        if (activeCategory === "vegan") return item.mealOptions.vegan;
        if (["beef", "chicken", "pork", "seafood"].includes(activeCategory)) {
          return item.mealOptions.meat.includes(activeCategory);
        }
        return false;
      });
    }

    // Only show category heading if in "all" view
    if (activeCategory === "all") {
      const heading = document.createElement("h2");
      heading.textContent = CATEGORY_LABELS[cat][currentLang]?.toUpperCase() || CATEGORY_LABELS[cat].en.toUpperCase();
      heading.classList.add("category-heading");
      menuContainer.appendChild(heading);
    }

    // Create container for cards
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    if (itemsInCategory.length === 0) {
      const noItems = document.createElement("p");
      noItems.textContent = noItemsText[currentLang] || noItemsText.en;

      categoryContainer.style.display = "flex";
      categoryContainer.style.justifyContent = "center";
      categoryContainer.style.alignItems = "center";
      categoryContainer.style.minHeight = "150px";

      categoryContainer.appendChild(noItems);
    } else {
      itemsInCategory.forEach(item => {
        const card = createMenuCard(item);
        categoryContainer.appendChild(card);
      });
    }

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
  // Set image
  const modalImg = document.getElementById("modal-img");
  modalImg.src = item.image;
  modalImg.alt = item.name[currentLang];

  // Set name
  const modalName = document.getElementById("modal-name");
  modalName.textContent = item.name[currentLang];

  // Set description
  const modalDescription = document.getElementById("modal-description");
  modalDescription.textContent = item.description[currentLang] || "No description available.";

  // Set ingredients
   modalIngredients.innerHTML = "";
  if (item.ingredients?.[currentLang]) {
    item.ingredients[currentLang].forEach(ingredient => {
      const p = document.createElement("p");
      p.textContent = ingredient;
      modalIngredients.appendChild(p);
    });
  }

  // Set MKD price
  const modalPrice = document.getElementById("modal-price");
  modalPrice.textContent = `${item.price} MKD`;

  // Set EUR price
  const priceEUR = (item.price / 61.5).toFixed(2);
  const priceEurEl = document.getElementById("price-eur");
  priceEurEl.textContent = `€${priceEUR}`;

  // Set dietary info
  const dietaryInfo = document.getElementById("dietary-info");
  dietaryInfo.innerHTML = "";
  if (item.mealOptions.vegan) {
    const p = document.createElement("p");
    p.textContent = "Vegan";
    dietaryInfo.appendChild(p);
  }
  if (item.mealOptions.vegetarian) {
    const p = document.createElement("p");
    p.textContent = "Vegetarian";
    dietaryInfo.appendChild(p);
  }
  if (item.mealOptions.meat?.length > 0) {
    item.mealOptions.meat.forEach(meatType => {
      const p = document.createElement("p");
      p.textContent = meatType.charAt(0).toUpperCase() + meatType.slice(1);
      dietaryInfo.appendChild(p);
    });
  }

  // Show modal
  const modal = document.getElementById("item-modal");
  modal.classList.remove("hidden");
}

// Close events

modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

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