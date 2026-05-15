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