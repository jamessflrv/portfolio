function showSection(sectionId) {
    const sections = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-link");
    const targetSection = document.getElementById(sectionId);

    navLinks.forEach(link => link.classList.remove("active"));
    
    const activeNavLink = document.getElementById('nav-' + sectionId);
    if(activeNavLink) activeNavLink.classList.add("active");


    sections.forEach(section => {
        if (section.classList.contains("active")) {
            section.style.opacity = "0";
            section.style.transform = "translateY(-20px)"; // Slide up slightly as it disappears
            
            setTimeout(() => {
                section.classList.remove("active");
                section.style.display = "none";
            }, 400); 
        }
    });

    setTimeout(() => {
        targetSection.style.display = "block";
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

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});