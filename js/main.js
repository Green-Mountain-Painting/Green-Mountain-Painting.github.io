// Lightbox configuration
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'maxWidth': 1200,
    'maxHeight': 800,
    'fitImagesInViewport': false,
    'positionFromTop': 50
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');
    
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 