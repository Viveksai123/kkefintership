const serviceItems = document.querySelectorAll(".service-item");
const serviceContents = document.querySelectorAll(".service-content");

serviceItems.forEach(item => {
    item.addEventListener("click", () => {
        // Update active class
        serviceItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        // Fetch service data
        const serviceKey = item.getAttribute("data-service");

        // Hide all service content
        serviceContents.forEach(content => content.classList.add("hidden"));

        // Show the clicked service content
        const activeContent = document.getElementById(serviceKey);
        if (activeContent) {
            activeContent.classList.remove("hidden");
        }
    });
});
