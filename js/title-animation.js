document.addEventListener('DOMContentLoaded', function() {
    // Initialize title and nav links
    [document.querySelector('h1'), ...document.querySelectorAll('.subtitle a')].forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        [...text].forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.className = 'title-letter';
            element.appendChild(span);
        });
    });

    const navLinks = document.querySelectorAll('.subtitle a');
    const allElements = [document.querySelector('h1'), ...navLinks];
    
    // Faster animation
    async function animateElement(element) {
        const letters = element.querySelectorAll('.title-letter');
        const delay = 150; // Reduced from 200
        
        for (const letter of letters) {
            letter.style.color = '#FFD700';
            letter.style.transform = 'scale(1.2) rotate(5deg)'; // Reduced rotation
            
            await new Promise(resolve => setTimeout(resolve, delay));
            
            letter.style.color = 'white';
            letter.style.transform = 'scale(1) rotate(0deg)';
        }
    }

    async function animateAllElements() {
        for (const element of allElements) {
            await animateElement(element);
            await new Promise(resolve => setTimeout(resolve, 100)); // Reduced delay between elements
        }
        setTimeout(animateAllElements, 500); // Reduced cycle delay
    }

    animateAllElements();
});