document.addEventListener("scroll", () => {
    const cardsContainer = document.querySelector(".cards-container");
    const nextSection = document.querySelector(".next-section");
  
    // Trigger the cards to scroll up
    if (window.scrollY > 50) {
      cardsContainer.style.transform = "translateY(0%)";
    }
  
    // After all cards have scrolled, show the next section
    const cardsContainerBottom = cardsContainer.getBoundingClientRect().bottom;
    if (cardsContainerBottom < window.innerHeight) {
      nextSection.style.display = "flex";
    }
  });
  