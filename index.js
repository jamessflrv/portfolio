function showSection(sectionId) {

    let sections = document.querySelectorAll(".page");
    
    sections.forEach(function(section) {
    
    section.classList.remove("active");
    
    section.style.display = "none";
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    
    });
    
    let activeSection = document.getElementById(sectionId);
    
    activeSection.style.display = "block";
    
    setTimeout(() => {
    
    activeSection.classList.add("active");
    
    activeSection.style.opacity = "1";
    activeSection.style.transform = "translateY(0)";
    
    }, 10);
    
    }