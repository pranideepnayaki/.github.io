function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab and add an "active" class to the button that opened it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function () {
  var defaultTab = document.querySelector(".tablinks");
  if (defaultTab) {
    defaultTab.click();
  }
});

// Function to toggle the menu and overlay
function toggleMenu() {
  var nav = document.querySelector("nav");
  var overlay = document.querySelector(".overlay");

  nav.classList.toggle("active");
  overlay.classList.toggle("active");

  // Ensure the header remains visible when the menu is opened
  var header = document.querySelector("header");
  header.classList.toggle("menu-open");
}

// Function to close menu and overlay when clicking outside
document.addEventListener("click", function (event) {
  var nav = document.querySelector("nav");
  var overlay = document.querySelector(".overlay");
  var toggleButton = document.querySelector(".toggle-menu");

  // Check if the clicked element is outside of the nav and its toggle button
  if (!nav.contains(event.target) && event.target !== toggleButton) {
    // Close the menu and overlay if they are active
    nav.classList.remove("active");
    overlay.classList.remove("active");

    // Ensure the header remains visible when the menu is closed
    var header = document.querySelector("header");
    header.classList.remove("menu-open");
  }
});

// Close menu and overlay when the toggle button is clicked again
var toggleButton = document.querySelector(".toggle-menu");
toggleButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents the event from propagating to the document click listener
});
