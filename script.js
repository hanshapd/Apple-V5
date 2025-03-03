// Elements
const searchButton = document.getElementById("searchButton");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const closeSearch = document.getElementById("closeSearch");

// Open Search Overlay with Animation
searchButton.addEventListener("click", () => {
    searchOverlay.style.display = "flex";
    setTimeout(() => searchOverlay.classList.add("visible"), 10);
    searchInput.focus();
    history.pushState({ searchOpen: true }, ""); // Handle back button
});

// Close Search Overlay
closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("visible");
    setTimeout(() => {
        searchOverlay.style.display = "none";
        searchResults.innerHTML = "";
    }, 300);
    history.back();
});

// Prevent keyboard from covering input on mobile
searchInput.addEventListener("focus", () => {
    if (window.innerWidth <= 768) {
        searchOverlay.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});

// Handle back button to close search
window.addEventListener("popstate", () => {
    if (searchOverlay.classList.contains("visible")) {
        closeSearch.click();
    }
});
