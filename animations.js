// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            
            // Add different animations based on section
            if (section.classList.contains('hero-section')) {
                section.classList.add('slide-in-right');
            } else if (section.classList.contains('about-section')) {
                section.classList.add('slide-in-left');
            } else if (section.classList.contains('stats-section')) {
                section.classList.add('slide-in-bottom');
            } else if (section.classList.contains('vehicle-models')) {
                section.classList.add('slide-in-right');
            } else if (section.classList.contains('why-choose-us')) {
                section.classList.add('slide-in-left');
            } else if (section.classList.contains('faq-section')) {
                section.classList.add('slide-in-bottom');
            }
            
            // Stop observing once animation is triggered
            observer.unobserve(section);
        }
    });
}, observerOptions);

// Observe all sections when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}); 