// DOM Elements
const searchInput = document.querySelector('.search-input');
const searchSelect = document.querySelector('.search-select');
const searchIcon = document.querySelector('.search-icon');
const navSignIn = document.querySelector('.nav-signin');
const navReturn = document.querySelector('.nav-return');
const navCart = document.querySelector('.nav-cart');
const panelAll = document.querySelector('.panel-all');
const panelDeals = document.querySelector('.panel-deals');

// Event Listeners
searchIcon.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
navSignIn.addEventListener('mouseenter', highlightNavItem);
navSignIn.addEventListener('mouseleave', removeHighlightNavItem);
navReturn.addEventListener('mouseenter', highlightNavItem);
navReturn.addEventListener('mouseleave', removeHighlightNavItem);
navCart.addEventListener('mouseenter', highlightNavItem);
navCart.addEventListener('mouseleave', removeHighlightNavItem);
panelAll.addEventListener('click', togglePanelOps);
panelDeals.addEventListener('mouseenter', highlightPanelDeals);
panelDeals.addEventListener('mouseleave', removeHighlightPanelDeals);

// Functions
function handleSearch() {
    const searchText = searchInput.value.trim();
    const searchCategory = searchSelect.value.toLowerCase();

    if (searchText !== '') {
        console.log(`Searching for '${searchText}' in category '${searchCategory}'`);
        // Here you can implement your search functionality
    } else {
        console.log('Please enter a search term');
    }
}

function highlightNavItem(event) {
    event.currentTarget.classList.add('highlight');
}

function removeHighlightNavItem(event) {
    event.currentTarget.classList.remove('highlight');
}

function togglePanelOps() {
    const panelOps = document.querySelector('.panel-ops');
    panelOps.classList.toggle('show-panel-ops');
}

function highlightPanelDeals() {
    panelDeals.classList.add('highlight-deals');
}

function removeHighlightPanelDeals() {
    panelDeals.classList.remove('highlight-deals');
}
