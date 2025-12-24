// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('active');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const phrases = ['transformación digital', 'eficiencia operativa'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 30;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 70;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter after page loads
if (typewriterElement) {
    setTimeout(typeWriter, 1000);
}

// Solutions Carousel
const solutionTabs = document.querySelectorAll('.solution-tab');
const solutionPanels = document.querySelectorAll('.solution-panel');
const carouselDots = document.querySelectorAll('.carousel-dot');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const solutions = ['hr', 'fleet', 'ops', 'biz', 'time'];
let currentSolutionIndex = 0;

function switchSolution(solution) {
    // Update index
    currentSolutionIndex = solutions.indexOf(solution);

    // Remove active class from all elements
    solutionTabs.forEach(t => t.classList.remove('active'));
    solutionPanels.forEach(p => p.classList.remove('active'));
    carouselDots.forEach(d => d.classList.remove('active'));

    // Add active class to corresponding elements
    const tab = document.querySelector(`[data-solution="${solution}"]`);
    const panel = document.querySelector(`[data-panel="${solution}"]`);
    const dot = document.querySelector(`[data-dot="${solution}"]`);

    if (tab) tab.classList.add('active');
    if (panel) panel.classList.add('active');
    if (dot) dot.classList.add('active');
}

// Tab clicks
solutionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchSolution(tab.dataset.solution);
    });
});

// Dot clicks
carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
        switchSolution(dot.dataset.dot);
    });
});

// Arrow navigation
if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
        currentSolutionIndex = currentSolutionIndex > 0 ? currentSolutionIndex - 1 : solutions.length - 1;
        switchSolution(solutions[currentSolutionIndex]);
    });
}

if (carouselNext) {
    carouselNext.addEventListener('click', () => {
        currentSolutionIndex = currentSolutionIndex < solutions.length - 1 ? currentSolutionIndex + 1 : 0;
        switchSolution(solutions[currentSolutionIndex]);
    });
}
