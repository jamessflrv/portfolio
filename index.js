function showSection(sectionId) {
    const sections = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-link");
    const targetSection = document.getElementById(sectionId);

    // 1. Remove active state from all nav links
    navLinks.forEach(link => link.classList.remove("active"));
    
    // 2. Set the clicked nav link to active
    const activeNavLink = document.getElementById('nav-' + sectionId);
    if(activeNavLink) activeNavLink.classList.add("active");

    // 3. Fade out and hide all sections
    sections.forEach(section => {
        if (section.classList.contains("active")) {
            section.style.opacity = "0";
            section.style.transform = "translateY(-20px)"; // Slide up slightly as it disappears
            
            // Wait for animation to finish before removing from layout
            setTimeout(() => {
                section.classList.remove("active");
                section.style.display = "none";
            }, 400); 
        }
    });

    // 4. Show the new section after a tiny delay
    setTimeout(() => {
        targetSection.style.display = "block";
        // Small timeout to ensure 'display: block' is rendered before adding the class
        setTimeout(() => {
            targetSection.style.opacity = "1";
            targetSection.style.transform = "translateY(0)";
            targetSection.classList.add("active");
        }, 50);
    }, 450);
}

function openLightbox(src, alt) {
    const lb = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    img.alt = alt;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("open");
    document.body.style.overflow = "";
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});