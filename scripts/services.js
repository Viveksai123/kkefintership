document.addEventListener('DOMContentLoaded', function() {
    // Get our elements
    const erpSection = document.getElementById('erpServices');
    const cardsWrapper = document.getElementById('cardsWrapper');
    
    // Calculate the total scrollable width
    const getMaxScroll = () => {
        return cardsWrapper.scrollWidth - cardsWrapper.clientWidth;
    };

    // Function to handle scroll
    function handleScroll() {
        // Get the section's position relative to the viewport
        const sectionRect = erpSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if section is in view
        if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
            // Calculate scroll progress (0 to 1)
            const progress = (viewportHeight - sectionRect.top) / 
                           (viewportHeight + sectionRect.height);
            
            // Calculate the scroll amount based on progress
            const maxScroll = getMaxScroll();
            const scrollAmount = Math.max(0, Math.min(maxScroll, maxScroll * progress));
            
            // Apply the transform
            cardsWrapper.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }

    // Add scroll event listener with throttling for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Handle window resize
    window.addEventListener('resize', handleScroll);

    // Initial position check
    handleScroll();
});