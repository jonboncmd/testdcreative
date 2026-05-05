document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.showcase-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Function to reassign the highlight class to the center card
    function updateHighlight() {
        const cards = document.querySelectorAll('.product-card');
        
        // Remove highlight from all cards
        cards.forEach(card => card.classList.remove('highlight'));
        
        // In a 3-card desktop layout, the center card is at index 1
        if(cards.length > 1) {
            cards[1].classList.add('highlight');
        }
    }

    // Shift carousel left: Move the last card to the beginning
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            const cards = document.querySelectorAll('.product-card');
            const lastCard = cards[cards.length - 1];
            
            // Insert the last element before the first element
            track.insertBefore(lastCard, cards[0]);
            updateHighlight();
        });
    }

    // Shift carousel right: Move the first card to the end
    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            const cards = document.querySelectorAll('.product-card');
            const firstCard = cards[0];
            
            // Append the first element to the end of the track
            track.appendChild(firstCard);
            updateHighlight();
        });
    }
});