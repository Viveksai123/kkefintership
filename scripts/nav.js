

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
              menuHeaderBackBtn.classList.add("hidden");
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
          menuHeaderBackBtn.classList.remove("hidden");
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


document.addEventListener('DOMContentLoaded', function() {
  const tabMenu = document.getElementById('tabMenu1');
  const menuTrigger = document.getElementById('menuTriggerTab');
  const backBtn = document.getElementById('backBtn1');
  const closeBtn = document.getElementById('closeBtn1');
  const menuSections = document.querySelectorAll('.tabtab-menu-section');
  const mainMenu = document.getElementById('mainMenu1');
  
  let navigationStack = [];

  menuTrigger.addEventListener('click', () => {
      tabMenu.classList.add('tabtab-active');
      updateBackButton();
  });

  closeBtn.addEventListener('click', () => {
      tabMenu.classList.remove('tabtab-active');
      resetMenu();
  });

  document.querySelectorAll('.tabtab-menu-item[data-target]').forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              menuSections.forEach(section => section.classList.remove('tabtab-active'));
              targetSection.classList.add('tabtab-active');
              navigationStack.push(targetId);
              updateBackButton();
          }
      });
  });

  backBtn.addEventListener('click', () => {
      navigationStack.pop();
      const previousSection = navigationStack.length > 0
          ? document.getElementById(navigationStack[navigationStack.length - 1])
          : mainMenu;

      menuSections.forEach(section => section.classList.remove('tabtab-active'));
      previousSection.classList.add('tabtab-active');
      updateBackButton();
  });

  function updateBackButton() {
      if (navigationStack.length > 0) {
          backBtn.classList.add('tabtab-active');
          closeBtn.classList.add('hidden');
      } else {
          backBtn.classList.remove('tabtab-active');
          closeBtn.classList.remove('hidden');
      }
  }

  function resetMenu() {
      navigationStack = [];
      menuSections.forEach(section => section.classList.remove('tabtab-active'));
      mainMenu.classList.add('tabtab-active');
      updateBackButton();
  }
});
