document.addEventListener("DOMContentLoaded", () => {
    // --- Carousel Logic ---
    const track = document.querySelector('.showcase-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    function updateHighlight() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => card.classList.remove('highlight'));
        if(cards.length > 1) {
            cards[1].classList.add('highlight');
        }
    }

    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            const cards = document.querySelectorAll('.product-card');
            const lastCard = cards[cards.length - 1];
            track.insertBefore(lastCard, cards[0]);
            updateHighlight();
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            const cards = document.querySelectorAll('.product-card');
            const firstCard = cards[0];
            track.appendChild(firstCard);
            updateHighlight();
        });
    }

    // --- Scroll Reveal Animation Engine ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Ensures animation only runs once per load
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });
});