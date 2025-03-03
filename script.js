// Elements
const searchButton = document.getElementById("searchButton");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const closeSearch = document.getElementById("closeSearch");

let debounceTimer;

// Open Search Overlay
searchButton.addEventListener("click", () => {
    searchOverlay.style.display = "flex";
    setTimeout(() => searchOverlay.classList.add("visible"), 10);
    searchInput.focus();
});

// Close Search Overlay
closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("visible");
    setTimeout(() => {
        searchOverlay.style.display = "none";
        searchResults.innerHTML = "";
    }, 300);
});

// Fetch Search Results
async function fetchSearchResults() {
    const query = searchInput.value.trim();
    searchResults.innerHTML = "";
    
    if (query.length < 1) return;

    try {
        const response = await fetch(`https://api.example.com/search?q=${query}`);
        const data = await response.json();

        data.results.forEach((item) => {
            let div = document.createElement("div");
            div.textContent = item.title;
            div.classList.add("search-result-item", "fade-in");
            div.addEventListener("click", () => {
                window.location.href = item.url;
            });
            searchResults.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching search results:", error);
    }
}
