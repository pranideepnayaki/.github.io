let lastScrollTop = 0;
const header = document.querySelector("header");
let ticking = false;

function onScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Downscroll
    header.classList.remove("header-visible");
    header.classList.add("header-hidden");
  } else {
    // Upscroll
    header.classList.remove("header-hidden");
    header.classList.add("header-visible");
  }

  lastScrollTop = scrollTop;
  ticking = false;
}

window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove 'active' class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the clicked tab content and mark its link as 'active'
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}
