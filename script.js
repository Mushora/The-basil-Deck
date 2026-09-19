/**
 * THE BASIL DECK STREET - CLIENT MENU DATA & FRONTEND CONTROLLER
 * Phone: +91 91629 16219
 * Address: Kalashganga Complex, VIIT College Road, Kondhwa Budruk, Pune 411048
 */

// 1. COMPLETE AUTHENTIC CLIENT MENU DATASET
const menuData = [
  {
    id: "breakfast",
    category: "Breakfast",
    items: [
      { name: "Upma", price: 90 },
      { name: "Sheera", price: 90 },
      { name: "Khichdi", price: 130 },
      { name: "Sabudana Wada", price: 110 },
      { name: "Misal Pav", price: 120 },
      { name: "TBD Special Chole Bhature", price: 180 },
      { name: "Extra Bhatura", price: 50 }
    ]
  },
  {
    id: "south-indian",
    category: "South Indian",
    items: [
      { name: "Idli", price: 90 },
      { name: "Podi Idli", price: 130 },
      { name: "Tatte Idli", price: 120 },
      { name: "Plain Dosa", price: 110 },
      { name: "Masala Dosa", price: 130 },
      { name: "Spring Dosa", price: 160 },
      { name: "Pizza Dosa", price: 180 },
      { name: "Schezwan Dosa", price: 150 },
      { name: "Cut Dosa", price: 150 },
      { name: "Cheese Dosa", price: 170 },
      { name: "Uttapa", price: 120 },
      { name: "Onion Uttapa", price: 140 },
      { name: "TBD Special Uttapa", price: 180 },
      { name: "Cheese Onion Uttapa", price: 170 },
      { name: "Medu Wada", price: 110 }
    ]
  },
  {
    id: "soups",
    category: "Soups",
    items: [
      { name: "Tomato", price: 130 },
      { name: "Manchow", price: 140 },
      { name: "Lemon Coriander", price: 140 },
      { name: "Veg Clear", price: 130 },
      { name: "Sweet Corn", price: 140 }
    ]
  },
  {
    id: "pizza",
    category: "Pizza",
    items: [
      { name: "Margherita Pizza", price: 210 },
      { name: "Street Special Pizza", price: 260 },
      { name: "Veggy Delight Pizza", price: 240 },
      { name: "Small Pizza", price: 150 }
    ]
  },
  {
    id: "sandwich",
    category: "Sandwich",
    items: [
      { name: "Veg Club", price: 160 },
      { name: "TBD Special Sandwich", price: 190 },
      { name: "Bread Butter", price: 70 },
      { name: "Toast Butter", price: 80 },
      { name: "Cheese Chilli Toast", price: 140 }
    ]
  },
  {
    id: "pav-bhaji-pulav",
    category: "Pav Bhaji & Pulav",
    items: [
      { name: "Pav Bhaji", price: 140 },
      { name: "Cheese Pav Bhaji", price: 170 },
      { name: "Khada Pav Bhaji", price: 160 },
      { name: "Tawa Pulav", price: 160 },
      { name: "Paneer Pulav", price: 190 },
      { name: "Mushroom Pulav", price: 190 },
      { name: "Masala Pav", price: 100 },
      { name: "Pav Jodi", price: 30 }
    ]
  },
  {
    id: "chaat",
    category: "Chaat",
    items: [
      { name: "Pani Puri", price: 60 },
      { name: "Dahi Puri", price: 80 },
      { name: "Shev Puri", price: 80 },
      { name: "SPDP", price: 90 },
      { name: "Papdi Chaat", price: 80 },
      { name: "Ragda Pattice", price: 90 },
      { name: "Aloo Chaat", price: 80 },
      { name: "Bhel", price: 70 },
      { name: "Matki Bhel", price: 80 }
    ]
  },
  {
    id: "street-specials",
    category: "Street Specials",
    items: [
      { name: "Cream of Broccoli Soup", price: 170 },
      { name: "Cream of Zucchini Soup", price: 170 },
      { name: "Presto Paneer", price: 260 },
      { name: "Cheese Buletto", price: 240 }
    ]
  },
  {
    id: "tandoor",
    category: "Tandoor",
    items: [
      { name: "Veg Seekh Kebab", price: 230 },
      { name: "Paneer Tikka", price: 260 },
      { name: "Mushroom Stuffed Tikka", price: 270 },
      { name: "Paneer Seekh Kebab", price: 260 },
      { name: "Paneer / Veg Platter", price: 380 }
    ]
  },
  {
    id: "starters",
    category: "Starters",
    items: [
      { name: "Veg Manchurian", price: 210 },
      { name: "Paneer Chilli", price: 240 },
      { name: "Baby Corn Chilli", price: 220 },
      { name: "Mushroom Chilli", price: 230 },
      { name: "Paneer 65", price: 240 },
      { name: "Veg 65", price: 210 },
      { name: "Veg Crispy", price: 210 },
      { name: "Veg Brucly", price: 230 },
      { name: "Spring Roll", price: 220 }
    ]
  },
  {
    id: "chinese-mains",
    category: "Chinese Mains",
    items: [
      { name: "Hakka Fried Rice", price: 210 },
      { name: "Schezwan Fried Rice", price: 220 },
      { name: "Triple Fried Rice", price: 260 },
      { name: "Hongkong Fried Rice", price: 230 },
      { name: "Shanghai Fried Rice", price: 230 },
      { name: "Singapore Fried Rice", price: 230 }
    ]
  },
  {
    id: "chinese-noodles",
    category: "Chinese Noodles",
    items: [
      { name: "Hakka Noodles", price: 210 },
      { name: "Schezwan Noodles", price: 220 },
      { name: "Triple Noodles", price: 260 },
      { name: "Hongkong Noodles", price: 230 },
      { name: "Shanghai Noodles", price: 230 },
      { name: "Singapore Noodles", price: 230 }
    ]
  },
  {
    id: "indian",
    category: "Indian",
    items: [
      { name: "Paneer Butter Masala", price: 260 },
      { name: "Paneer Tikka Masala", price: 270 },
      { name: "Palak Paneer", price: 250 },
      { name: "Mattar Paneer", price: 250 },
      { name: "Paneer Kadhai", price: 260 },
      { name: "Paneer Amritsari", price: 270 },
      { name: "Mix Veg Handi", price: 230 },
      { name: "Veg Kadhai", price: 230 },
      { name: "Veg Bhoona", price: 240 },
      { name: "Malai Methi Matar", price: 250 },
      { name: "Malai Kofta", price: 270 },
      { name: "Veg Kolhapuri", price: 230 }
    ]
  },
  {
    id: "roti",
    category: "Roti",
    items: [
      { name: "Plain Roti", price: 48 },
      { name: "Butter Roti", price: 56 },
      { name: "Plain Naan", price: 65 },
      { name: "Butter Naan", price: 75 },
      { name: "Cheese Garlic Naan", price: 82 },
      { name: "Plain Kulcha", price: 55 },
      { name: "Butter Kulcha", price: 65 },
      { name: "Laccha Paratha", price: 70 },
      { name: "Roti Basket (5 Pcs)", price: 240 }
    ]
  },
  {
    id: "hot-beverages",
    category: "Hot Beverages",
    items: [
      { name: "Hot Bournvita", price: 70 },
      { name: "Coffee", price: 50 },
      { name: "Tea", price: 40 },
      { name: "Shaadi Wali Coffee", price: 70 }
    ]
  },
  {
    id: "cold-beverages",
    category: "Cold Beverages",
    items: [
      { name: "Bottled Water", price: 20 },
      { name: "Aerated Drinks", price: 40 },
      { name: "Chaach", price: 50 },
      { name: "Cold Bournvita", price: 90 },
      { name: "Cold Coffee", price: 110 },
      { name: "Milkshakes", price: 140 },
      { name: "Mojito", price: 130 },
      { name: "Blue Curacao", price: 140 },
      { name: "Pina Colada", price: 150 },
      { name: "Fruit Punch", price: 150 },
      { name: "Iced Tea", price: 110 },
      { name: "Coconut Punch", price: 140 }
    ]
  },
  {
    id: "juice",
    category: "Juice",
    items: [
      { name: "Mosambi", price: 90 },
      { name: "Orange", price: 90 },
      { name: "Pineapple", price: 90 },
      { name: "Apple", price: 110 },
      { name: "Watermelon", price: 80 }
    ]
  },
  {
    id: "desserts",
    category: "Desserts",
    items: [
      { name: "Gulab Jamun (3 pcs)", price: 90 },
      { name: "Sizzling Brownie", price: 180 },
      { name: "Choice of Ice Creams", price: 90 },
      { name: "Choice of Pastry", price: 110 }
    ]
  }
];

// Execution Locks for Smooth Scrolling
let isProgrammaticScrolling = false;
let scrollTimeout = null;

// 2. DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initCommonFeatures();
  initIntegratedDigitalMenu();
});

// Calculate exact dynamic top clearance for sticky headers
function getHeaderOffset() {
  const header = document.getElementById("siteHeader");
  const controls = document.getElementById("menuControls");
  const headerHeight = header ? header.offsetHeight : 64;
  const controlsHeight = controls ? controls.offsetHeight : 90;
  return headerHeight + controlsHeight + 14;
}

// 3. COMMON INTERACTION CONTROLLERS
function initCommonFeatures() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const header = document.getElementById("siteHeader");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    if (header) {
      if (scrollPos > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 300) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile Drawer Toggle
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerClose");
  const drawerBackdrop = document.getElementById("drawerBackdrop");

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("is-open");
    if (drawerBackdrop) drawerBackdrop.classList.add("is-visible");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    hamburgerBtn.classList.add("is-active");
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("is-open");
    if (drawerBackdrop) drawerBackdrop.classList.remove("is-visible");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.classList.remove("is-active");
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("is-open");
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  const drawerLinks = document.querySelectorAll(".drawer-link");
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // External Category Jumps (e.g. from Cuisines cards & footer)
  const jumpLinks = document.querySelectorAll(".menu-jump");
  jumpLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetCatId = link.getAttribute("data-cat");
      if (targetCatId) {
        scrollToCategory(targetCatId);
      }
    });
  });
}

// 4. INTEGRATED DIGITAL MENU CONTROLLER
function initIntegratedDigitalMenu() {
  const container = document.getElementById("menuSectionsWrapper");
  const chipsNav = document.getElementById("categoryChipsNav");
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const resultsInfo = document.getElementById("searchResultsInfo");
  const resultsCount = document.getElementById("searchResultsCount");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const emptyState = document.getElementById("searchEmptyState");
  const emptyResetBtn = document.getElementById("emptyStateResetBtn");

  renderCategoryChips(chipsNav);
  renderMenuSections(menuData, container);

  // Live Dish Search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length > 0) {
        clearBtn.style.display = "flex";
        filterMenu(query);
      } else {
        clearBtn.style.display = "none";
        resetFilter();
      }
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      resetFilter();
      searchInput.focus();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      resetFilter();
    });
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      resetFilter();
    });
  }

  initCategoryScrollSpy();
}

function renderCategoryChips(chipsContainer) {
  if (!chipsContainer) return;
  chipsContainer.innerHTML = "";

  menuData.forEach((cat, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip-btn ${index === 0 ? "active" : ""}`;
    button.textContent = cat.category;
    button.dataset.catId = cat.id;

    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      scrollToCategory(cat.id);
    });

    chipsContainer.appendChild(button);
  });
}

// Smooth scroll to target category with collision lock
function scrollToCategory(catId) {
  const targetEl = document.getElementById(catId);
  if (!targetEl) return;

  // Lock scroll spy while smooth scrolling occurs
  isProgrammaticScrolling = true;
  clearTimeout(scrollTimeout);

  const offset = getHeaderOffset();
  const elementPosition = targetEl.getBoundingClientRect().top;
  const currentScroll = window.scrollY || window.pageYOffset;
  const targetPosition = elementPosition + currentScroll - offset;

  window.scrollTo({
    top: Math.round(targetPosition),
    behavior: "smooth"
  });

  updateActiveChip(catId);

  // Release lock once the smooth scroll finishes
  scrollTimeout = setTimeout(() => {
    isProgrammaticScrolling = false;
  }, 750);
}

// Update the active chip and center it inside the horizontal toolbar ONLY
function updateActiveChip(catId) {
  const chipsNav = document.getElementById("categoryChipsNav");
  if (!chipsNav) return;

  const chips = chipsNav.querySelectorAll(".chip-btn");
  chips.forEach(chip => {
    if (chip.dataset.catId === catId) {
      chip.classList.add("active");

      // Scroll container horizontally without affecting window scrolling
      const containerWidth = chipsNav.clientWidth;
      const chipLeft = chip.offsetLeft;
      const chipWidth = chip.clientWidth;
      const targetScrollLeft = chipLeft - (containerWidth / 2) + (chipWidth / 2);

      chipsNav.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    } else {
      chip.classList.remove("active");
    }
  });
}

function renderMenuSections(dataList, wrapper) {
  if (!wrapper) return;
  wrapper.innerHTML = "";

  dataList.forEach(sec => {
    const sectionBlock = document.createElement("section");
    sectionBlock.className = "menu-section-block";
    sectionBlock.id = sec.id;

    sectionBlock.innerHTML = `
      <div class="menu-section-header">
        <h3 class="menu-section-heading">${escapeHTML(sec.category)}</h3>
        <span class="menu-item-count">${sec.items.length} ${sec.items.length === 1 ? 'Dish' : 'Dishes'}</span>
      </div>
      <div class="menu-items-grid">
        ${sec.items.map(item => `
          <div class="menu-dish-card" data-dish-name="${escapeHTML(item.name).toLowerCase()}">
            <div class="dish-left-meta">
              <span class="veg-indicator" aria-label="Pure Vegetarian"><span class="veg-dot"></span></span>
              <span class="dish-title">${escapeHTML(item.name)}</span>
            </div>
            <span class="dish-price">₹${item.price}</span>
          </div>
        `).join("")}
      </div>
    `;

    wrapper.appendChild(sectionBlock);
  });
}

function filterMenu(query) {
  const container = document.getElementById("menuSectionsWrapper");
  const resultsInfo = document.getElementById("searchResultsInfo");
  const resultsCount = document.getElementById("searchResultsCount");
  const emptyState = document.getElementById("searchEmptyState");

  let matchTotal = 0;
  const filteredData = [];

  menuData.forEach(cat => {
    const matchingItems = cat.items.filter(item => 
      item.name.toLowerCase().includes(query)
    );

    if (matchingItems.length > 0) {
      matchTotal += matchingItems.length;
      filteredData.push({
        id: cat.id,
        category: cat.category,
        items: matchingItems
      });
    }
  });

  if (matchTotal > 0) {
    if (emptyState) emptyState.style.display = "none";
    if (resultsInfo) {
      resultsInfo.style.display = "flex";
      resultsCount.textContent = `${matchTotal} ${matchTotal === 1 ? 'dish found' : 'dishes found'} for "${query}"`;
    }
    renderMenuSections(filteredData, container);
  } else {
    container.innerHTML = "";
    if (resultsInfo) resultsInfo.style.display = "none";
    if (emptyState) emptyState.style.display = "block";
  }
}

function resetFilter() {
  const container = document.getElementById("menuSectionsWrapper");
  const resultsInfo = document.getElementById("searchResultsInfo");
  const emptyState = document.getElementById("searchEmptyState");

  if (resultsInfo) resultsInfo.style.display = "none";
  if (emptyState) emptyState.style.display = "none";

  renderMenuSections(menuData, container);
}

// Coordinate-based Category Scroll Spy
function initCategoryScrollSpy() {
  window.addEventListener("scroll", () => {
    if (isProgrammaticScrolling) return;

    const sections = document.querySelectorAll(".menu-section-block");
    if (sections.length === 0) return;

    const offset = getHeaderOffset() + 20;
    let currentSectionId = null;

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset - 60) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    if (currentSectionId) {
      const activeChip = document.querySelector(`.chip-btn[data-cat-id="${currentSectionId}"]`);
      if (activeChip && !activeChip.classList.contains("active")) {
        updateActiveChip(currentSectionId);
      }
    }
  }, { passive: true });
}

function escapeHTML(str) {
  const p = document.createElement("p");
  p.textContent = str;
  return p.innerHTML;
}