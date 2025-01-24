document.addEventListener('DOMContentLoaded', function() {
    // Animation initiale des lettres
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    
    // Fonction pour créer l'animation des lettres
    function animateText(element, text) {
        element.innerHTML = ''; // Vider le contenu existant
        [...text].forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.className = 'letter';
            span.style.opacity = '1'; // S'assurer que la lettre est visible
            span.style.animation = `fadeInLetter 0.5s ease forwards ${index * 0.1}s`;
            element.appendChild(span);
        });
    }

    // Animer LUCA et DEVAUX
    if (h1 && h2) {
        animateText(h1, 'LUCA');
        animateText(h2, 'DEVAUX');
    }

    // Effet de survol sur les lettres
    document.querySelectorAll('.letter').forEach(letter => {
        letter.addEventListener('mouseover', () => {
            letter.style.transform = 'translateY(-5px) scale(1.1)';
            letter.style.textShadow = '0 0 20px rgba(255,255,255,0.8)';
        });

        letter.addEventListener('mouseout', () => {
            letter.style.transform = 'translateY(0) scale(1)';
            letter.style.textShadow = 'none';
        });
    });
});

// Ajout des nouvelles animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInLetter {
        0% {
            opacity: 0;
            transform: translateY(-50px) rotate(15deg);
            filter: blur(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
            filter: blur(0);
        }
    }

    @keyframes letterPop {
        0% { transform: scale(1); }
        50% { 
            transform: scale(1.4) translateY(-10px);
            color: #ffffff;
            text-shadow: 0 0 20px rgba(255,255,255,0.8);
        }
        100% { transform: scale(1); }
    }

    @keyframes letterFloat {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }

    .letter {
        display: inline-block;
        opacity: 0;
        transition: transform 0.3s ease, color 0.3s ease;
    }

    h1 .letter:hover {
        color: #ffffff;
        text-shadow: 0 0 20px rgba(255,255,255,0.8);
    }

    h2 .letter:hover {
        color: #ffffff;
        text-shadow: 0 0 15px rgba(255,255,255,0.6);
    }
`;
document.head.appendChild(style);