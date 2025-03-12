// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Down Animation
const scrollDown = document.querySelector('.scroll-down');
scrollDown.addEventListener('click', () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Animate Scroll Down Indicator
function animateScrollDown() {
    scrollDown.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        scrollDown.style.transform = 'translateY(0)';
    }, 500);
}
setInterval(animateScrollDown, 1000);
