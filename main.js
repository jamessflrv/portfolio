var hamburger = document.getElementById('hamburger');
var drawer    = document.getElementById('drawer');
var overlay   = document.getElementById('drawer-overlay');

function openDrawer() {
    hamburger.classList.add('open');
    drawer.classList.add('open');
    overlay.classList.add('open');
}

function closeDrawer() {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
}

if (hamburger && drawer && overlay) {
    hamburger.addEventListener('click', function () {
        drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    overlay.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeDrawer);
    });
}

document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(function () { window.location.href = href; }, 350);
    });
});

var lightbox    = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');

if (lightbox && lightboxImg) {
    window.openLightbox = function (src) {
        lightboxImg.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function () {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    };

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) window.closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') window.closeLightbox();
    });
}