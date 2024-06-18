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
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the button that opened it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;

  // Initially, show the header
  header.classList.add("header-visible");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      header.classList.add("header-hidden");
      header.classList.remove("header-visible");
    } else {
      // Scrolling up
      header.classList.remove("header-hidden");
      header.classList.add("header-visible");
    }
    lastScrollY = window.scrollY;
  });
});

let lastScrollTop = 0;
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
    header.style.top = `-${headerHeight}px`;
  } else {
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
