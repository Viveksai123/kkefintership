

// Function to close all dropdowns
function closeAllDropdowns() {
  const dropdowns = [
    document.getElementById("dropdown-menu"),
    document.getElementById("dropdown-menu1"),
    document.getElementById("dropdown-menu2")
  ];
  dropdowns.forEach(dropdown => dropdown.classList.add("hidden"));
}

// Desktop Dropdown Menu
const dropdownBtns = [
  { btn: document.getElementById("dropdown-btn"), menu: document.getElementById("dropdown-menu") },
  { btn: document.getElementById("dropdown-btn1"), menu: document.getElementById("dropdown-menu1") },
  { btn: document.getElementById("dropdown-btn2"), menu: document.getElementById("dropdown-menu2") }
];

dropdownBtns.forEach(({ btn, menu }) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdowns();
    menu.classList.toggle("hidden");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  closeAllDropdowns();
});




document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuTrigger = document.getElementById('menuTrigger');
  const backBtn = document.getElementById('backBtn');
  const menuHeaderBackBtn = document.getElementById('menuHeaderBackBtn'); // New back button in the header
  const menuSections = document.querySelectorAll('.menu-section');
  const mainMenu = document.getElementById('mainMenu'); // Main menu section
  let navigationStack = [];

  // Open the menu
  menuTrigger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      updateHeaderBackBtnVisibility(); // Update visibility of the header back button
  });

  // Navigate to target menu section
  document.querySelectorAll('.menu-item[data-target]').forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              menuSections.forEach(section => section.classList.remove('active'));
              targetSection.classList.add('active');
              navigationStack.push(targetId);
              backBtn.classList.add('active');
              updateHeaderBackBtnVisibility(); // Update visibility when navigating
          }
      });
  });

  // Existing back button functionality
  backBtn.addEventListener('click', () => {
      navigationStack.pop();

      // Determine which section to display
      const previousSection = navigationStack.length > 0
          ? document.getElementById(navigationStack[navigationStack.length - 1])
          : mainMenu;

      menuSections.forEach(section => section.classList.remove('active'));
      previousSection.classList.add('active');

      // Hide the back button if at the top level
      if (navigationStack.length === 0) {
          backBtn.classList.remove('active');
      }

      updateHeaderBackBtnVisibility(); // Update visibility on back navigation
  });

  // New functionality for menu-header back button
  menuHeaderBackBtn?.addEventListener('click', () => {
      closeMenu(); // Close the entire mobile menu
  });

  // Close menu function
  function closeMenu() {
      mobileMenu.classList.remove('active');
  }

  // Update visibility of the menuHeaderBackBtn
  function updateHeaderBackBtnVisibility() {
      if (navigationStack.length === 0) {
          // Show the header back button only if on the main menu
          menuHeaderBackBtn?.classList.add('active');
      } else {
          menuHeaderBackBtn?.classList.remove('active');
      }
  }

  // Reset menu to the initial state
  function resetMenu() {
      navigationStack = [];
      menuSections.forEach(section => section.classList.remove('active'));
      mainMenu.classList.add('active');
      backBtn.classList.remove('active');
      updateHeaderBackBtnVisibility(); // Ensure proper visibility
      closeMenu(); // Ensure the menu is closed
  }

  // Optionally, you can add a listener for an overlay click to close the menu
  document.getElementById('overlay')?.addEventListener('click', closeMenu);
});


// tabview

document.getElementById('menuTriggerTab').addEventListener('click', () => {
  document.getElementById('tabtabMenu').classList.add('active');
});

document.querySelector('.back-btn-tab').addEventListener('click', () => {
  document.getElementById('tabtabMenu').classList.remove('active');
});