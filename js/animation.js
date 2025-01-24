let rotationDirection = 1;
let rotationSpeed = 0.02;
let rotationThreshold = Math.PI / 16;

let lastTime = 0;
const fps = 60;
const interval = 1000 / fps;

// Supprimer toutes les références à letterL et modifier la fonction animate
function animate(currentTime) {
    requestAnimationFrame(animate);

    // Animation des étoiles uniquement
    stars.children.forEach((star, i) => {
        star.position.z += Math.sin(currentTime * 0.001 + i) * 0.01;
        if (star.position.z > 1000) star.position.z = -1000;
    });

    renderer.render(scene, camera);
}

// Fonction d'animation de transition
function animateLetterTransition(toOpacity, duration = 1000, isZoomTransition = false, sectionContent = '') {
    return new Promise((resolve) => {
        const startTime = performance.now();
        const startOpacity = material.uniforms.opacity.value;
        const startScale = letterL.scale.x;

        if (sectionContent) {
            content.innerHTML = sectionContent;
            content.style.opacity = '0';
        }

        function updateTransition(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easedProgress = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            material.uniforms.opacity.value = startOpacity + (toOpacity - startOpacity) * easedProgress;
            
            if (isZoomTransition) {
                const zoomScale = 1 + easedProgress * 2;
                letterL.scale.set(startScale * (1 - easedProgress), startScale * (1 - easedProgress), startScale * (1 - easedProgress));
                renderer.domElement.style.transform = `scale(${zoomScale})`;

                headerContent.style.opacity = 1 - (easedProgress * easedProgress);

                if (sectionContent) {
                    content.style.opacity = easedProgress;
                    backButton.style.opacity = easedProgress;
                }
            }

            if (progress < 1) {
                requestAnimationFrame(updateTransition);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(updateTransition);
    });
}

// Ajout de l'effet de parallaxe
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    gsap.to('.parallax-bg', {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out'
    });

    // Animation des étoiles en fonction du mouvement de la souris
    if (stars) {
        gsap.to(stars.rotation, {
            x: moveY * 0.05,
            y: moveX * 0.05,
            duration: 2,
            ease: 'power2.out'
        });
    }
});

// Système de particules interactives
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // Limite la fréquence des particules
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${x - size/2}px`;
    particle.style.top = `${y - size/2}px`;
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
}

// Écran de chargement
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Amélioration de l'animation de la lettre L
function enhancedLetterAnimation() {
    gsap.to(letterL.position, {
        y: Math.sin(Date.now() * 0.001) * 0.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

animate();