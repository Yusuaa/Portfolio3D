// Amélioration des interactions
document.addEventListener('mousemove', (e) => {
    // Parallaxe amélioré pour les étoiles
    if (window.threeElements && window.threeElements.stars) {
        const mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        const mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
        
        gsap.to(window.threeElements.stars.rotation, {
            x: mouseY * Math.PI * 0.15,
            y: mouseX * Math.PI * 0.15,
            duration: 2,
            ease: "power2.out"
        });
    }
});

// Effet de pulse sur les boutons
document.querySelectorAll('.filter-btn, .project-card, .tech-badge').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(el, {
            scale: 1.05,
            duration: 0.3,
            ease: "elastic.out(1, 0.3)"
        });
    });
    
    el.addEventListener('mouseleave', () => {
        gsap.to(el, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
        });
    });
});

// Effet de parallaxe sur les cartes de projet
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        gsap.to(card, {
            rotateX: -yPercent,
            rotateY: xPercent,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5
        });
    });
});

// Effet de scroll smooth personnalisé
const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 30 + 10;
    
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

// Animation smooth scroll
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

// Animation du scroll
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (window.threeElements && window.threeElements.stars) {
        gsap.to(window.threeElements.stars.rotation, {
            y: scrolled * 0.0005,
            duration: 1
        });
    }
});

// Ajout de la détection du scroll
let isTransitioning = false;
let hasScrolled = false;

// Gestion du scroll uniquement sur la page d'accueil
let isHomePage = true;

// Modification de la détection du scroll
window.addEventListener('wheel', (e) => {
    // Vérifier si nous sommes sur la page d'accueil
    if (!document.body.classList.contains('home-page')) return;
    
    if (!hasScrolled && e.deltaY > 0) {
        hasScrolled = true;
        transitionToProjects();
        document.body.classList.remove('home-page');
        document.body.classList.add('content-page');
    }
});

window.addEventListener('touchmove', (e) => {
    if (!hasScrolled) {
        hasScrolled = true;
        transitionToProjects();
    }
});

function transitionToProjects() {
    if (isTransitioning) return;
    isTransitioning = true;

    const sceneElements = window.threeElements;
    if (!sceneElements || !sceneElements.camera) return;

    // Reset de la position de scroll
    window.scrollTo(0, 0);

    // Animation de la caméra
    gsap.to(sceneElements.camera.position, {
        z: 400,
        duration: 1.5,
        ease: "power2.inOut"
    });

    // Fade out du header sans décalage
    gsap.to('.header-content', {
        opacity: 0,
        y: 0,
        duration: 1,
        ease: "power2.inOut"
    });

    // Charger et afficher la section projets
    setTimeout(() => {
        const content = document.getElementById('content');
        content.innerHTML = getSectionContent('projects');
        
        gsap.fromTo('#content', 
            { opacity: 0, y: 0 },
            { 
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    if (typeof initializeProjectsSection === 'function') {
                        initializeProjectsSection();
                    }
                    gsap.to('#back-button', {
                        opacity: 1,
                        duration: 0.5
                    });
                    isTransitioning = false;
                }
            }
        );
    }, 1000);
}

// Ajout de la transition fluide vers les projets
document.querySelector('.scroll-indicator').addEventListener('click', async () => {
    const sceneElements = window.threeElements;
    
    // Animation de la caméra
    gsap.to(sceneElements.camera.position, {
        z: 400,
        duration: 1.5,
        ease: "power2.inOut"
    });

    // Fade out du header
    gsap.to('.header-content', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.inOut"
    });

    // Animation des étoiles
    gsap.to(sceneElements.stars.rotation, {
        y: Math.PI * 0.5,
        duration: 1.5,
        ease: "power2.inOut"
    });

    // Attendre que les animations soient terminées
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Charger et afficher la section projets
    content.innerHTML = getSectionContent('projects');
    
    // Fade in de la section projets
    gsap.fromTo('#content', 
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                // Initialiser les projets
                if (typeof initializeProjectsSection === 'function') {
                    initializeProjectsSection();
                }
                // Afficher le bouton retour
                gsap.to('#back-button', {
                    opacity: 1,
                    duration: 0.5
                });
            }
        }
    );
});

// Mise à jour du gestionnaire de retour
document.getElementById('back-button').addEventListener('click', () => {
    isHomePage = true; // Réactiver le scroll sur la page d'accueil
    hasScrolled = false; // Réinitialiser l'état du scroll
});
