const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggle 'active' class on both hamburger and menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));