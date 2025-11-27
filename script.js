let lastScrollY = window.scrollY;
const header = document.querySelector('header');
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('is-visible'); }
        });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('.animated-fade-in, .animated-zoom-in');
    if (animatedElements.length > 0) {
        animatedElements.forEach(element => { observer.observe(element); });
    }
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 50) { header.classList.add('hide-header'); }
        else if (lastScrollY > window.scrollY) { header.classList.remove('hide-header'); }
        lastScrollY = window.scrollY;
    });
});