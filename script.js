// Select all anchor links within the navigation
const navLinks = document.querySelectorAll("nav a");

// Attach click event listeners to the links
navLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Smooth scrolling function
function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href");

  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
  });
}
