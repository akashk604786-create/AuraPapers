/* ==========================================================================
   AURAPAPERS APPLICATION ENGINE
   ========================================================================== */

// --- 1. Beautiful Default Fallback Wallpapers (Demo Mode Database) ---
const fallbackPhotos = [
  // Landscape (Desktop) Wallpapers
  {
    id: "d1",
    photographer: "Sven D.",
    photographer_url: "https://unsplash.com/@sven",
    url: "https://unsplash.com/photos/a-view-of-a-mountain-range-at-sunset-from-a-plane-qjpH2s48R6M",
    alt: "Purple sunset mountains peak misty valleys",
    avg_color: "#4a3c5a",
    orientation: "landscape",
    category: "Mountains",
    src: {
      original: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=200"
    }
  },
  {
    id: "d2",
    photographer: "Ales Krivec",
    photographer_url: "https://unsplash.com/@aleskrivec",
    url: "https://unsplash.com/photos/pine-trees-near-mountain-during-nighttime-t3ZED1NDgCo",
    alt: "Deep starry sky over dark pine forests and mountains",
    avg_color: "#1c1e29",
    orientation: "landscape",
    category: "Space",
    src: {
      original: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=200"
    }
  },
  {
    id: "d3",
    photographer: "Joel Filipe",
    photographer_url: "https://unsplash.com/@joelfilipe",
    url: "https://unsplash.com/photos/blue-pink-and-purple-abstract-painting-d2Z5jRJV5sQ",
    alt: "Vibrant abstract acrylic fluid texture gradient colors",
    avg_color: "#5c3d75",
    orientation: "landscape",
    category: "Abstract",
    src: {
      original: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=200"
    }
  },
  {
    id: "d4",
    photographer: "Manuel Cosentino",
    photographer_url: "https://unsplash.com/@manuelcosentino",
    url: "https://unsplash.com/photos/sea-waves-crashing-on-shore-n-a5r8_P5y4",
    alt: "Deep blue sea ocean waves aerial view shoreline",
    avg_color: "#1e3a47",
    orientation: "landscape",
    category: "Ocean",
    src: {
      original: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200"
    }
  },
  {
    id: "d5",
    photographer: "Efe Kurnaz",
    photographer_url: "https://unsplash.com/@efekurnaz",
    url: "https://unsplash.com/photos/purple-and-blue-neon-light-tube-qgsw7aIpCNE",
    alt: "Vibrant neon cyberpunk aesthetic violet and cyan lines",
    avg_color: "#571661",
    orientation: "landscape",
    category: "Cyberpunk",
    src: {
      original: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=200"
    }
  },
  {
    id: "d6",
    photographer: "Sebastian Spindler",
    photographer_url: "https://unsplash.com/@sebaspin",
    url: "https://unsplash.com/photos/skyscrapers-in-city-during-nighttime-qW296z309bU",
    alt: "Tokyo cityscape neon lights skyscrapers at night",
    avg_color: "#161b2e",
    orientation: "landscape",
    category: "Cityscapes",
    src: {
      original: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=200"
    }
  },
  {
    id: "d7",
    photographer: "Johannes Plenio",
    photographer_url: "https://unsplash.com/@jplenio",
    url: "https://unsplash.com/photos/green-leafed-trees-h2nK02X4tH8",
    alt: "Forest mist rays of light morning fog nature green",
    avg_color: "#273128",
    orientation: "landscape",
    category: "Nature",
    src: {
      original: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=200"
    }
  },
  {
    id: "d8",
    photographer: "Fakurian Design",
    photographer_url: "https://unsplash.com/@fakurian",
    url: "https://unsplash.com/photos/purple-and-pink-light-digital-wallpaper-E8U12puT_3Y",
    alt: "Purple organic glass curves 3D abstract render minimalist design",
    avg_color: "#4d2169",
    orientation: "landscape",
    category: "Minimalist",
    src: {
      original: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560",
      large2x: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920",
      large: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
      medium: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&fit=crop&w=800&h=1200",
      landscape: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&fit=crop&w=1200&h=630",
      tiny: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200"
    }
  },

  // Portrait (Mobile) Wallpapers
  {
    id: "m1",
    photographer: "Jezael Melgoza",
    photographer_url: "https://unsplash.com/@jezael",
    url: "https://unsplash.com/photos/low-angle-photography-of-high-rise-buildings-during-nighttime-0z4Zp8_kF0U",
    alt: "Neon Cyberpunk glowing tower skyscaper looking up Tokyo",
    avg_color: "#181a2e",
    orientation: "portrait",
    category: "Cyberpunk",
    src: {
      original: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=200"
    }
  },
  {
    id: "m2",
    photographer: "Astro",
    photographer_url: "https://unsplash.com/@astro",
    url: "https://unsplash.com/photos/silhouette-of-person-under-starry-night-sky-t1aZJ-5Wq2w",
    alt: "Stars galaxy cosmos cosmic dust purple nebula night sky",
    avg_color: "#120e21",
    orientation: "portrait",
    category: "Space",
    src: {
      original: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=200"
    }
  },
  {
    id: "m3",
    photographer: "Paweł Czerwiński",
    photographer_url: "https://unsplash.com/@pawel_czerwinski",
    url: "https://unsplash.com/photos/pink-and-white-abstract-painting-3y4Jp50s67o",
    alt: "Minimal abstract pastel sand flowing paint curves textures",
    avg_color: "#5c4d4c",
    orientation: "portrait",
    category: "Abstract",
    src: {
      original: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200"
    }
  },
  {
    id: "m4",
    photographer: "Zoltan Tasi",
    photographer_url: "https://unsplash.com/@zoltantasi",
    url: "https://unsplash.com/photos/green-palm-leaves-mR1V229_PzM",
    alt: "Minimalist palm leaves green tropical fronds aesthetic shadows",
    avg_color: "#182c18",
    orientation: "portrait",
    category: "Minimalist",
    src: {
      original: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=200"
    }
  },
  {
    id: "m5",
    photographer: "Kamil Kalbarczyk",
    photographer_url: "https://unsplash.com/@kamilkalbarczyk",
    url: "https://unsplash.com/photos/person-standing-on-top-of-mountain-under-starry-night-sky-fS4t108zZ2g",
    alt: "Lone climber standing on snowy peak summit silhouette night stars",
    avg_color: "#111522",
    orientation: "portrait",
    category: "Mountains",
    src: {
      original: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=200"
    }
  },
  {
    id: "m6",
    photographer: "Masashi Shinmoto",
    photographer_url: "https://unsplash.com/@masashishinmoto",
    url: "https://unsplash.com/photos/pedestrians-crossing-the-street-during-rainy-night-in-city-3P_B81_sK8I",
    alt: "Pedestrians walking Tokyo rainy street reflection neon cyberpunk night",
    avg_color: "#1d1921",
    orientation: "portrait",
    category: "Cityscapes",
    src: {
      original: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=200"
    }
  },
  {
    id: "m7",
    photographer: "Veeterzy",
    photographer_url: "https://unsplash.com/@veeterzy",
    url: "https://unsplash.com/photos/sunbeams-on-green-trees-rny7y8yK_0A",
    alt: "Pine forest sunbeams piercing morning mist green trees nature",
    avg_color: "#222a1f",
    orientation: "portrait",
    category: "Nature",
    src: {
      original: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=200"
    }
  },
  {
    id: "m8",
    photographer: "Ryoji Iwata",
    photographer_url: "https://unsplash.com/@ryoji__iwata",
    url: "https://unsplash.com/photos/silhouette-of-man-walking-on-street-tW1D84Ww2_E",
    alt: "Minimal aesthetic black shadow walker architecture lines street",
    avg_color: "#333333",
    orientation: "portrait",
    category: "Minimalist",
    src: {
      original: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000",
      large2x: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1500",
      large: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000",
      medium: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&fit=crop&w=1080&h=1920",
      landscape: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&fit=crop&w=1920&h=1080",
      tiny: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=200"
    }
  }
];

// Curated tag categories listed on UI
const APP_CATEGORIES = [
  "All",
  "Minimalist",
  "Nature",
  "Space",
  "Abstract",
  "Cyberpunk",
  "Cityscapes",
  "Mountains",
  "Ocean"
];

// --- 2. Application State ---
const state = {
  apiKey: localStorage.getItem("pexels_api_key") || (window.PEXELS_API_KEY || ""),
  currentQuery: "",
  currentCategory: "All",
  currentOrientation: "landscape", // Default matches checked radio
  favorites: JSON.parse(localStorage.getItem("pexels_favorites")) || [],
  currentPage: 1,
  photosList: [],
  selectedPhoto: null,
  selectedResolution: "",
  showDeviceFrame: true,
  viewingFavorites: false,
  isLoading: false
};

// --- 3. DOM Elements Cache ---
const elements = {
  searchInput: document.getElementById("search-input"),
  categoriesContainer: document.getElementById("categories-container"),
  orientationRadios: document.getElementsByName("orientation"),
  wallpaperGrid: document.getElementById("wallpaper-grid"),
  loadingSkeleton: document.getElementById("loading-skeleton"),
  emptyState: document.getElementById("empty-state"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),
  statusText: document.getElementById("status-text"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  favoritesToggle: document.getElementById("favorites-toggle"),
  favoritesCount: document.getElementById("favorites-count"),
  settingsToggle: document.getElementById("settings-toggle"),
  scrollSentinel: document.getElementById("scroll-sentinel"),
  
  // Dialogs
  settingsDialog: document.getElementById("settings-dialog"),
  settingsForm: document.getElementById("settings-form"),
  apiKeyInput: document.getElementById("api-key-input"),
  keyStatusIndicator: document.getElementById("key-status-indicator"),
  saveApiKeyBtn: document.getElementById("save-api-key-btn"),
  clearApiKeyBtn: document.getElementById("clear-api-key-btn"),
  
  detailDialog: document.getElementById("detail-dialog"),
  detailTitle: document.getElementById("detail-wallpaper-name"),
  detailAuthorLink: document.getElementById("detail-photographer-link"),
  detailOrientationTag: document.getElementById("detail-orientation-tag"),
  detailSourceTag: document.getElementById("detail-source-tag"),
  detailPalette: document.getElementById("detail-palette"),
  resolutionSelector: document.getElementById("resolution-selector-container"),
  directDownloadBtn: document.getElementById("direct-download-btn"),
  detailFavoriteBtn: document.getElementById("detail-favorite-btn"),
  toggleFrameBtn: document.getElementById("toggle-frame-btn"),
  deviceFrameWrapper: document.getElementById("device-frame-wrapper"),
  desktopMockup: document.getElementById("desktop-mockup"),
  mobileMockup: document.getElementById("mobile-mockup"),
  desktopWallpaperScreen: document.getElementById("desktop-wallpaper-screen"),
  phoneWallpaperScreen: document.getElementById("phone-wallpaper-screen"),
  downloadProgress: document.getElementById("download-progress-indicator"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  progressPercent: document.getElementById("progress-percent")
};

// --- 4. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initCategories();
  initSettingsUI();
  initEventListeners();
  syncFavoritesCount();
  
  // Initial wallpaper load
  loadWallpapers(true);
});

// --- 5. UI Builder Helpers ---

// Initialize tag chips
function initCategories() {
  elements.categoriesContainer.innerHTML = APP_CATEGORIES.map((category, index) => `
    <button 
      class="category-chip ${index === 0 ? 'active' : ''}" 
      role="tab" 
      aria-selected="${index === 0 ? 'true' : 'false'}"
      id="category-tab-${category.toLowerCase()}"
      data-category="${category}"
    >
      ${category}
    </button>
  `).join("");
}

// Update settings dialog values
function initSettingsUI() {
  if (state.apiKey) {
    elements.apiKeyInput.value = state.apiKey;
    updateKeyIndicator(true);
  } else {
    elements.apiKeyInput.value = "";
    updateKeyIndicator(false);
  }
}

// Update the key status pill
function updateKeyIndicator(isLive) {
  const dot = elements.keyStatusIndicator.querySelector(".status-dot");
  const label = elements.keyStatusIndicator.querySelector(".status-label-text");
  
  if (isLive) {
    dot.className = "status-dot status-dot-live";
    if (window.PEXELS_API_KEY && state.apiKey === window.PEXELS_API_KEY && !localStorage.getItem("pexels_api_key")) {
      label.textContent = "Live Pexels API Connected (via config.js)";
    } else {
      label.textContent = "Live Pexels API Connected";
    }
  } else {
    dot.className = "status-dot status-dot-demo";
    label.textContent = "Running in Demo Mode";
  }
}

// --- 6. Event Listeners Management ---
function initEventListeners() {
  // Search Input listener (with debounce)
  let searchTimeout;
  elements.searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.currentQuery = e.target.value.trim();
      state.viewingFavorites = false; // Reset favorites view when searching
      toggleFavoritesButtonState(false);
      
      if (state.currentQuery) {
        elements.clearSearchBtn.classList.remove("hidden");
      } else {
        elements.clearSearchBtn.classList.add("hidden");
      }
      
      loadWallpapers(true);
    }, 500);
  });

  // Clear search button clicked
  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.currentQuery = "";
    elements.clearSearchBtn.classList.add("hidden");
    loadWallpapers(true);
  });

  // Category chip tabs clicked
  elements.categoriesContainer.addEventListener("click", (e) => {
    const chip = e.target.closest(".category-chip");
    if (!chip) return;
    
    // Toggle active classes
    elements.categoriesContainer.querySelectorAll(".category-chip").forEach(el => {
      el.classList.remove("active");
      el.setAttribute("aria-selected", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-selected", "true");
    
    // Update state & load
    state.currentCategory = chip.dataset.category;
    state.viewingFavorites = false; // Reset favorites when changing category
    toggleFavoritesButtonState(false);
    loadWallpapers(true);
  });

  // Orientation switch radios
  elements.orientationRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.currentOrientation = e.target.value;
      
      // Update Grid Layout classes
      if (state.currentOrientation === "portrait") {
        elements.wallpaperGrid.className = "wallpaper-grid layout-portrait";
      } else {
        elements.wallpaperGrid.className = "wallpaper-grid layout-landscape";
      }
      
      // Reload wallpapers
      loadWallpapers(true);
    });
  });

  // Set up Infinite Scroll Observer
  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !state.isLoading) {
          state.currentPage++;
          loadWallpapers(false);
        }
      });
    }, {
      rootMargin: "250px" // Trigger loading 250px before screen bottom
    });
    observer.observe(elements.scrollSentinel);
  }

  // Settings Dialog Toggle
  elements.settingsToggle.addEventListener("click", () => {
    initSettingsUI();
    elements.settingsDialog.showModal();
  });

  // Settings Form submit (Save API key)
  elements.settingsForm.addEventListener("submit", (e) => {
    const newKey = elements.apiKeyInput.value.trim();
    state.apiKey = newKey;
    if (newKey) {
      localStorage.setItem("pexels_api_key", newKey);
    } else {
      localStorage.removeItem("pexels_api_key");
    }
    
    elements.settingsDialog.close();
    loadWallpapers(true);
  });

  // Clear API key button click
  elements.clearApiKeyBtn.addEventListener("click", () => {
    elements.apiKeyInput.value = "";
    state.apiKey = "";
    localStorage.removeItem("pexels_api_key");
    updateKeyIndicator(false);
  });

  // Dialog Close buttons (any element with [data-close-dialog])
  document.querySelectorAll("[data-close-dialog]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const dialog = e.target.closest("dialog");
      if (dialog) dialog.close();
    });
  });

  // Dialog Backdrop Light-Dismiss Fallback (for Safari compatibility)
  [elements.settingsDialog, elements.detailDialog].forEach(dialog => {
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isInside = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isInside) {
          dialog.close();
        }
      });
    }
  });

  // Favorites Toggle view button
  elements.favoritesToggle.addEventListener("click", () => {
    state.viewingFavorites = !state.viewingFavorites;
    toggleFavoritesButtonState(state.viewingFavorites);
    
    // Clear search and category highlights
    if (state.viewingFavorites) {
      elements.searchInput.value = "";
      state.currentQuery = "";
      elements.clearSearchBtn.classList.add("hidden");
      elements.categoriesContainer.querySelectorAll(".category-chip").forEach(el => {
        el.classList.remove("active");
        el.setAttribute("aria-selected", "false");
      });
    } else {
      // Restore "All" category highlight
      const allChip = elements.categoriesContainer.querySelector('[data-category="All"]');
      if (allChip) {
        allChip.classList.add("active");
        allChip.setAttribute("aria-selected", "true");
      }
      state.currentCategory = "All";
    }
    
    loadWallpapers(true);
  });

  // Reset Filters / Empty State Reset button
  elements.emptyResetBtn.addEventListener("click", resetAllFilters);

  // Device Mockup frame toggle
  elements.toggleFrameBtn.addEventListener("click", () => {
    state.showDeviceFrame = !state.showDeviceFrame;
    if (state.showDeviceFrame) {
      elements.toggleFrameBtn.textContent = "Hide Device Frame";
      elements.toggleFrameBtn.classList.add("active");
      elements.deviceFrameWrapper.classList.remove("no-frame");
    } else {
      elements.toggleFrameBtn.textContent = "Show Device Frame";
      elements.toggleFrameBtn.classList.remove("active");
      elements.deviceFrameWrapper.classList.add("no-frame");
    }
  });

  // Download Trigger click
  elements.directDownloadBtn.addEventListener("click", handleDownloadTrigger);

  // Favorite button inside Detail modal
  elements.detailFavoriteBtn.addEventListener("click", () => {
    if (!state.selectedPhoto) return;
    toggleFavorite(state.selectedPhoto);
    updateDetailFavoriteButtonState(state.selectedPhoto.id);
  });
}

// Reset all filtering inputs
function resetAllFilters() {
  elements.searchInput.value = "";
  state.currentQuery = "";
  elements.clearSearchBtn.classList.add("hidden");
  
  elements.categoriesContainer.querySelectorAll(".category-chip").forEach(el => {
    el.classList.remove("active");
    el.setAttribute("aria-selected", "false");
  });
  const allChip = elements.categoriesContainer.querySelector('[data-category="All"]');
  if (allChip) {
    allChip.classList.add("active");
    allChip.setAttribute("aria-selected", "true");
  }
  state.currentCategory = "All";
  state.viewingFavorites = false;
  toggleFavoritesButtonState(false);
  
  loadWallpapers(true);
}

// Set active colors on favorites toggle
function toggleFavoritesButtonState(isActive) {
  if (isActive) {
    elements.favoritesToggle.classList.add("active");
  } else {
    elements.favoritesToggle.classList.remove("active");
  }
}

// --- 7. Core Wallpapers Loading Logic ---
async function loadWallpapers(isNewQuery) {
  if (state.isLoading) return;
  state.isLoading = true;

  try {
    if (isNewQuery) {
      state.currentPage = 1;
      state.photosList = [];
      
      // Add LCP optimization logic for new content loading
      elements.loadingSkeleton.classList.remove("hidden");
      elements.wallpaperGrid.classList.add("hidden");
      elements.emptyState.classList.add("hidden");
      elements.scrollSentinel.classList.add("hidden");
    }
    
    // Set Status Banner descriptive text
    updateStatusBanner();

    let fetchedPhotos = [];
    
    // 7a. Mode: Favorites View
    if (state.viewingFavorites) {
      fetchedPhotos = state.favorites.filter(photo => {
        const orientationMatch = getPhotoOrientation(photo) === state.currentOrientation;
        const queryMatch = !state.currentQuery || 
          photo.alt?.toLowerCase().includes(state.currentQuery.toLowerCase()) ||
          photo.photographer?.toLowerCase().includes(state.currentQuery.toLowerCase());
        const categoryMatch = state.currentCategory === "All" || 
          (photo.category && photo.category.toLowerCase() === state.currentCategory.toLowerCase()) ||
          (photo.alt && photo.alt.toLowerCase().includes(state.currentCategory.toLowerCase()));
          
        return orientationMatch && queryMatch && categoryMatch;
      });
      
      const itemsPerPage = 12;
      const startIdx = (state.currentPage - 1) * itemsPerPage;
      const paginatedFavorites = fetchedPhotos.slice(startIdx, startIdx + itemsPerPage);
      
      renderGrid(paginatedFavorites, isNewQuery);
      
      if (fetchedPhotos.length > startIdx + itemsPerPage) {
        elements.scrollSentinel.classList.remove("hidden");
      } else {
        elements.scrollSentinel.classList.add("hidden");
      }
      
      return;
    }

    // 7b. Mode: Demo Mode (No API key)
    if (!state.apiKey) {
      fetchedPhotos = fallbackPhotos.filter(photo => {
        const orientationMatch = photo.orientation === state.currentOrientation;
        const queryMatch = !state.currentQuery || 
          photo.alt.toLowerCase().includes(state.currentQuery.toLowerCase()) ||
          photo.photographer.toLowerCase().includes(state.currentQuery.toLowerCase());
        const categoryMatch = state.currentCategory === "All" || 
          photo.category.toLowerCase() === state.currentCategory.toLowerCase() ||
          photo.alt.toLowerCase().includes(state.currentCategory.toLowerCase());
          
        return orientationMatch && queryMatch && categoryMatch;
      });

      const itemsPerPage = 12; // Render 12 papers initially to give lots of content
      const start = (state.currentPage - 1) * itemsPerPage;
      const paginated = fetchedPhotos.slice(0, start + itemsPerPage);
      
      renderGrid(paginated, isNewQuery);
      
      if (fetchedPhotos.length > paginated.length) {
        elements.scrollSentinel.classList.remove("hidden");
      } else {
        elements.scrollSentinel.classList.add("hidden");
      }
      
      return;
    }

    // 7c. Mode: Pexels API
    let url = "";
    const headers = { "Authorization": state.apiKey };
    const perPage = 30; // Fetch 30 images per request for rich visual variety
    
    let queryText = state.currentQuery;
    if (!queryText && state.currentCategory !== "All") {
      queryText = state.currentCategory;
    }
    
    if (queryText) {
      url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(queryText)}&orientation=${state.currentOrientation}&page=${state.currentPage}&per_page=${perPage}`;
    } else {
      url = `https://api.pexels.com/v1/search?query=wallpapers&orientation=${state.currentOrientation}&page=${state.currentPage}&per_page=${perPage}`;
    }

    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }
    
    const data = await response.json();
    fetchedPhotos = data.photos || [];
    
    renderGrid(fetchedPhotos, isNewQuery);
    
    if (fetchedPhotos.length >= perPage) {
      elements.scrollSentinel.classList.remove("hidden");
    } else {
      elements.scrollSentinel.classList.add("hidden");
    }
    
  } catch (error) {
    console.error("API Fetch Error:", error);
    renderGrid([], isNewQuery);
    alert("Unable to fetch wallpapers. Please check your Pexels API Key or network connection.");
  } finally {
    state.isLoading = false;
  }
}

// Helper to determine orientation (Pexels uses dimensions)
function getPhotoOrientation(photo) {
  if (photo.orientation) return photo.orientation;
  return photo.width > photo.height ? "landscape" : "portrait";
}

// Update Header status description banner
function updateStatusBanner() {
  let mode = state.apiKey ? "Live" : "Demo Mode";
  let target = state.currentOrientation === "landscape" ? "Desktop" : "Mobile";
  let desc = "";
  
  if (state.viewingFavorites) {
    desc = `Showing Favorited ${target} Wallpapers`;
  } else if (state.currentQuery) {
    desc = `Results for "${state.currentQuery}" in ${target} (${mode})`;
  } else if (state.currentCategory !== "All") {
    desc = `${state.currentCategory} Wallpapers for ${target} (${mode})`;
  } else {
    desc = `Curated ${target} Wallpapers (${mode})`;
  }
  
  elements.statusText.textContent = desc;
}

// --- 8. Render Engine with View Transitions ---
function renderGrid(photos, isNewQuery) {
  const updateGridDOM = () => {
    // If it's a new search, empty current list
    if (isNewQuery) {
      elements.wallpaperGrid.innerHTML = "";
    }
    
    // Update photos state list
    state.photosList = isNewQuery ? photos : [...state.photosList, ...photos];
    
    // Hide Skeleton
    elements.loadingSkeleton.classList.add("hidden");
    
    if (state.photosList.length === 0) {
      elements.wallpaperGrid.classList.add("hidden");
      elements.emptyState.classList.remove("hidden");
      elements.scrollSentinel.classList.add("hidden");
      return;
    }
    
    elements.wallpaperGrid.classList.remove("hidden");
    elements.emptyState.classList.add("hidden");
    
    // Render photo items
    const newCardsHtml = photos.map((photo, index) => {
      const isFav = state.favorites.some(fav => fav.id === photo.id || fav.id === String(photo.id));
      const imageSrc = photo.src.medium || photo.src.large;
      
      // Use dynamic view transition name on first item or matching item
      const transitionNameStyle = `style="view-transition-name: card-img-${photo.id}"`;
      
      // Set priority loading parameters: high priority fetch for first 2 images
      const fetchPriority = (isNewQuery && index < 2) ? 'fetchpriority="high"' : 'loading="lazy"';
      
      return `
        <div class="wallpaper-card" data-id="${photo.id}">
          <button class="card-fav-btn ${isFav ? 'active' : ''}" aria-label="Favorite wallpaper" data-fav-id="${photo.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <div class="card-img-wrapper" ${transitionNameStyle}>
            <img 
              src="${imageSrc}" 
              alt="${photo.alt || 'Beautiful wallpaper'}" 
              class="card-img"
              ${fetchPriority}
            >
          </div>
          
          <div class="card-overlay">
            <h3 class="card-title">${photo.alt || 'Abstract Wallpaper'}</h3>
            <span class="card-author">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              ${photo.photographer}
            </span>
          </div>
        </div>
      `;
    }).join("");
    
    // Append instead of overwrite for incremental load
    elements.wallpaperGrid.insertAdjacentHTML("beforeend", newCardsHtml);
    
    // Re-bind click event triggers to grid children
    bindCardGridEvents();
  };

  // 8a. Perform SPA View Transition if supported
  if (document.startViewTransition) {
    document.startViewTransition(updateGridDOM);
  } else {
    updateGridDOM();
  }
}

// Grid elements event attachments
function bindCardGridEvents() {
  // Favorite buttons on cards
  elements.wallpaperGrid.querySelectorAll(".card-fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Stop from opening modal details
      const id = btn.dataset.favId;
      const photo = state.photosList.find(p => String(p.id) === String(id));
      if (!photo) return;
      
      toggleFavorite(photo);
      
      // Update UI active class
      const isFav = state.favorites.some(fav => String(fav.id) === String(id));
      btn.classList.toggle("active", isFav);
      const svg = btn.querySelector("svg");
      svg.setAttribute("fill", isFav ? "currentColor" : "none");
    });
  });

  // Click card container to open detail modal
  elements.wallpaperGrid.querySelectorAll(".wallpaper-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const photo = state.photosList.find(p => String(p.id) === String(id));
      if (photo) {
        openDetailModal(photo, card);
      }
    });
  });
}

// --- 9. Details Modal Logic ---
function openDetailModal(photo, clickedCardElement) {
  state.selectedPhoto = photo;
  
  // Set details content
  elements.detailTitle.textContent = photo.alt || "Abstract Wallpaper";
  elements.detailAuthorLink.textContent = photo.photographer;
  elements.detailAuthorLink.href = photo.photographer_url;
  
  const orientation = getPhotoOrientation(photo);
  const targetTag = orientation === "landscape" ? "Desktop Wallpaper" : "Mobile Wallpaper";
  elements.detailOrientationTag.textContent = targetTag;
  elements.detailSourceTag.textContent = String(photo.id).startsWith("d") || String(photo.id).startsWith("m") ? "Demo Database" : "Pexels API";

  // Palette Generation
  generatePaletteColors(photo.avg_color || "#3A3D40");

  // Load Sizes/Resolution options
  populateResolutions(photo);

  // Set mockup screens background
  const imgUrl = photo.src.large2x || photo.src.original || photo.src.large;
  
  // Choose mockup active view
  elements.deviceFrameWrapper.setAttribute("data-orientation", orientation);
  if (orientation === "landscape") {
    elements.desktopWallpaperScreen.style.backgroundImage = `url('${imgUrl}')`;
    elements.desktopMockup.classList.remove("hidden");
    elements.mobileMockup.classList.add("hidden");
  } else {
    elements.phoneWallpaperScreen.style.backgroundImage = `url('${imgUrl}')`;
    elements.mobileMockup.classList.remove("hidden");
    elements.desktopMockup.classList.add("hidden");
  }

  // Update Favorite button
  updateDetailFavoriteButtonState(photo.id);

  // Reset progress bar
  elements.downloadProgress.classList.add("hidden");
  elements.progressBarFill.style.width = "0%";
  elements.progressPercent.textContent = "Downloading...";
  elements.directDownloadBtn.removeAttribute("disabled");

  // Dynamic Morph View Transition
  const imgWrapper = clickedCardElement.querySelector(".card-img-wrapper");
  
  if (document.startViewTransition) {
    // 1. Temporarily target card elements
    imgWrapper.style.viewTransitionName = "hero-wallpaper";
    const targetScreen = orientation === "landscape" ? elements.desktopWallpaperScreen : elements.phoneWallpaperScreen;
    targetScreen.style.viewTransitionName = "hero-wallpaper";
    
    const transition = document.startViewTransition(() => {
      elements.detailDialog.showModal();
    });
    
    transition.finished.finally(() => {
      // 2. Clean up transition names to avoid layout conflicts on subsequent clicks
      imgWrapper.style.viewTransitionName = "";
      targetScreen.style.viewTransitionName = "";
    });
  } else {
    elements.detailDialog.showModal();
  }
}

// Populate size list elements
function populateResolutions(photo) {
  const orientation = getPhotoOrientation(photo);
  const src = photo.src;
  
  let options = [];
  
  // Custom sizes names
  if (src.original) options.push({ name: "Original Quality", dimensions: "Max Resolution", url: src.original });
  if (src.large2x) options.push({ name: "Large (2K / Retina)", dimensions: "1920p+", url: src.large2x });
  if (src.large) options.push({ name: "Medium (1080p)", dimensions: "1080p", url: src.large });
  
  // Orientation specific
  if (orientation === "portrait" && src.portrait) {
    options.unshift({ name: "Perfect Fit Mobile", dimensions: "Optimized Crop", url: src.portrait });
  } else if (orientation === "landscape" && src.landscape) {
    options.unshift({ name: "Perfect Fit Desktop", dimensions: "Optimized Crop", url: src.landscape });
  }
  
  if (src.medium) options.push({ name: "Small Preview", dimensions: "Standard Preview", url: src.medium });

  // Map to radio UI options
  elements.resolutionSelector.innerHTML = options.map((opt, idx) => `
    <div class="res-option ${idx === 0 ? 'selected' : ''}" data-url="${opt.url}">
      <div class="res-title-info">
        <span class="res-name">${opt.name}</span>
        <span class="res-dimensions">${opt.dimensions}</span>
      </div>
      <div class="res-radio"></div>
    </div>
  `).join("");

  // Select resolution event
  state.selectedResolution = options[0].url;
  
  elements.resolutionSelector.querySelectorAll(".res-option").forEach(item => {
    item.addEventListener("click", () => {
      elements.resolutionSelector.querySelectorAll(".res-option").forEach(el => el.classList.remove("selected"));
      item.classList.add("selected");
      state.selectedResolution = item.dataset.url;
    });
  });
}

// Generate aesthetic matching color palette programmatically from average color
function generatePaletteColors(avgColorHex) {
  // Simple parser: hex to HSL
  let hsl = hexToHsl(avgColorHex);
  
  // Generate 5 harmonious colors based on Hue shifts and Lightness
  const swatches = [
    avgColorHex, // 1. Base color
    hslToHex(hsl.h, Math.min(hsl.s + 10, 100), Math.min(hsl.l + 15, 95)), // 2. Lighter tone
    hslToHex(hsl.h, Math.max(hsl.s - 10, 10), Math.max(hsl.l - 15, 10)),  // 3. Darker tone
    hslToHex((hsl.h + 180) % 360, Math.min(hsl.s + 15, 100), Math.min(hsl.l + 10, 80)), // 4. Complementary
    hslToHex((hsl.h + 30) % 360, hsl.s, Math.max(hsl.l - 5, 20)) // 5. Analogous
  ];

  elements.detailPalette.innerHTML = swatches.map(color => `
    <div class="palette-swatch" style="background-color: ${color};" title="${color}" data-hex="${color}"></div>
  `).join("");

  // Color swatches click updates mockup accent color
  elements.detailPalette.querySelectorAll(".palette-swatch").forEach(sw => {
    sw.addEventListener("click", () => {
      const selectedHex = sw.dataset.hex;
      elements.desktopWallpaperScreen.style.backgroundColor = selectedHex;
      elements.phoneWallpaperScreen.style.backgroundColor = selectedHex;
      
      // Flash glowing hover effect
      sw.style.transform = "scale(1.2) translateY(-4px)";
      setTimeout(() => sw.style.transform = "", 300);
    });
  });
}

// --- 10. Favorites Controller ---
function toggleFavorite(photo) {
  const index = state.favorites.findIndex(fav => String(fav.id) === String(photo.id));
  
  if (index === -1) {
    // Add to favorites list, injecting current selected category as hint
    const toSave = { ...photo };
    if (!toSave.category) toSave.category = state.currentCategory !== "All" ? state.currentCategory : "Curated";
    state.favorites.push(toSave);
  } else {
    // Remove from favorites list
    state.favorites.splice(index, 1);
    
    // If viewing favorites, we should reload/re-render to remove it from view
    if (state.viewingFavorites) {
      setTimeout(() => {
        loadWallpapers(false);
      }, 200);
    }
  }
  
  // Sync to Local Storage
  localStorage.setItem("pexels_favorites", JSON.stringify(state.favorites));
  syncFavoritesCount();
}

function syncFavoritesCount() {
  const count = state.favorites.length;
  elements.favoritesCount.textContent = count;
  elements.favoritesCount.style.display = count > 0 ? "inline-block" : "none";
}

function updateDetailFavoriteButtonState(photoId) {
  const isFav = state.favorites.some(fav => String(fav.id) === String(photoId));
  elements.detailFavoriteBtn.classList.toggle("active", isFav);
  const svg = elements.detailFavoriteBtn.querySelector("svg");
  svg.setAttribute("fill", isFav ? "#FF0844" : "none");
  svg.setAttribute("stroke", isFav ? "#FF0844" : "currentColor");
}

// --- 11. High Fidelity File Downloader ---
async function handleDownloadTrigger() {
  const url = state.selectedResolution;
  if (!url) return;

  // Toggle loader state
  elements.directDownloadBtn.setAttribute("disabled", "true");
  elements.downloadProgress.classList.remove("hidden");
  elements.progressBarFill.style.width = "0%";
  elements.progressPercent.textContent = "Connecting...";

  try {
    // Fetch blob with download status reporting
    const response = await fetch(url);
    if (!response.ok) throw new Error("CORS or Network download error");
    
    const reader = response.body.getReader();
    const contentLength = +response.headers.get("Content-Length") || 0;
    
    let receivedLength = 0;
    let chunks = [];
    
    while(true) {
      const {done, value} = await reader.read();
      if (done) break;
      
      chunks.push(value);
      receivedLength += value.length;
      
      if (contentLength > 0) {
        const percent = Math.round((receivedLength / contentLength) * 100);
        elements.progressBarFill.style.width = `${percent}%`;
        elements.progressPercent.textContent = `Downloading: ${percent}%`;
      } else {
        elements.progressPercent.textContent = `Downloaded ${(receivedLength / 1024 / 1024).toFixed(1)}MB...`;
      }
    }
    
    // Combine chunks into single typed array blob
    const blob = new Blob(chunks, {type: response.headers.get("Content-Type") || "image/jpeg"});
    const blobUrl = URL.createObjectURL(blob);
    
    // Create virtual downloader anchor tag
    const link = document.createElement("a");
    link.href = blobUrl;
    
    // Clean filename mapping
    const fileExt = response.headers.get("Content-Type")?.split("/")[1] || "jpeg";
    const titleClean = (state.selectedPhoto.alt || "aurapaper").toLowerCase().replace(/[^a-z0-9]/g, "-");
    link.download = `aurapaper-${titleClean}-${state.selectedPhoto.id}.${fileExt}`;
    
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    
    // Visual success indicators
    elements.progressPercent.textContent = "Download Complete! ✨";
    setTimeout(() => {
      elements.downloadProgress.classList.add("hidden");
      elements.directDownloadBtn.removeAttribute("disabled");
    }, 2000);
    
  } catch (error) {
    console.error("Advanced download failed, fallback to direct window download:", error);
    elements.progressPercent.textContent = "Opening in new tab...";
    
    // Fallback simple link opener in new tab if CORS fails
    window.open(url, "_blank");
    
    setTimeout(() => {
      elements.downloadProgress.classList.add("hidden");
      elements.directDownloadBtn.removeAttribute("disabled");
    }, 2000);
  }
}

// --- 12. Mathematical HSL Color Conversions ---
function hexToHsl(hex) {
  // Convert hex to r, g, b
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  let rHex = Math.round((r + m) * 255).toString(16).padStart(2, "0");
  let gHex = Math.round((g + m) * 255).toString(16).padStart(2, "0");
  let bHex = Math.round((b + m) * 255).toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}
