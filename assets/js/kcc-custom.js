// Small KCC-specific enhancement. The original Mentor main.js handles navigation,
// scroll behavior, preloading, and AOS initialization.
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
