// Wait for the DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Check if both elements exist
    if (hamburger && navMenu) {
        // Add click event listener to the hamburger icon
        hamburger.addEventListener("click", () => {
            // Toggle 'active' class on both hamburger and menu
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Add click event listeners to all nav links to close menu on click
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                // Check if the hamburger is active (mobile view)
                if (hamburger.classList.contains("active")) {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            });
        });
    } else {
        console.error("Hamburger or navigation menu element not found.");
    }
});
