// Small KCC-specific enhancements. Main navigation and template interactions remain in main.js.
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  if (window.AOS) {
    AOS.init({ duration: 750, easing: "ease-in-out", once: true, mirror: false });
  }
});
