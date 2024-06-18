// Function to open modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

// Function to close modal by ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Function to toggle arrow visibility and animation
function toggleArrow(arrowId, show) {
  const arrow = document.getElementById(arrowId);
  if (show) {
    arrow.classList.add("active");
  } else {
    arrow.classList.remove("active");
  }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
