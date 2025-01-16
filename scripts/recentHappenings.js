// Image and Tab Elements
const images = [
    document.getElementById('recentImage1'),
    document.getElementById('recentImage2'),
    document.getElementById('recentImage3'),
    document.getElementById('recentImage4')
];

const tabs = [
    document.getElementById('tab1'),
    document.getElementById('tab2'),
    document.getElementById('tab3'),
    document.getElementById('tab4')
];

// Function to Update Active Tab and Image
function updateActiveTab(index) {
    // Update Image
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('d-none');
            img.classList.add('d-inline');
        } else {
            img.classList.remove('d-inline');
            img.classList.add('d-none');
        }
    });

    // Update Tab Style
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('recent-happenings-active-tab');
        } else {
            tab.classList.remove('recent-happenings-active-tab');
        }
    });
}

// Add Mouseover Event Listeners
tabs.forEach((tab, index) => {
    tab.addEventListener('mouseover', () => updateActiveTab(index));
});