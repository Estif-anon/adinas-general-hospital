// JavaScript functionality for the hospital website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Form submission handling for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle the form submission, e.g., via AJAX
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Animation on page load
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element) => {
        element.classList.add('fade-in');
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    // Add more JS for menu toggle, animations, etc.
});

// Hero slideshow
document.addEventListener('DOMContentLoaded', () => {
    // Hero slideshow logic
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);
});