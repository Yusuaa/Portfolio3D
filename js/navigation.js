// Récupération des éléments
const h1 = document.querySelector('h1');
const subtitle = document.querySelector('.subtitle');
const content = document.getElementById('content');
const backButton = document.getElementById('back-button');
const headerContent = document.querySelector('.header-content');

// Gestion des liens de navigation
document.querySelectorAll('.subtitle a').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        
        // Vérifier que la section est valide
        if (!section || !['about', 'projects', 'contact'].includes(section)) {
            console.error('Section invalide:', section);
            return;
        }
        
        const sectionContent = getSectionContent(section);
        if (sectionContent === 'Section non trouvée') {
            console.error('Contenu de section non trouvé pour:', section);
            return;
        }
        
        await animateLetterTransition(0, 1000, true, sectionContent);
        
        // Initialiser les projets si nécessaire
        if (section === 'projects') {
            setTimeout(() => {
                initializeProjectsSection();
            }, 100);
        }
    });
});

// Gestion du bouton retour
backButton.addEventListener('click', async () => {
    const startTime = performance.now();
    const duration = 1200;
    
    material.uniforms.opacity.value = 0;
    
    return new Promise((resolve) => {
        function animateReturn(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            if (progress <= 0.5) {
                const zoomProgress = progress * 2;
                const currentScale = 3 - (zoomProgress * 2);
                renderer.domElement.style.transform = `scale(${currentScale})`;
                
                content.style.opacity = `${1 - zoomProgress * 2}`;
                backButton.style.opacity = `${1 - zoomProgress * 2}`;
            }
            
            if (progress > 0.5) {
                const fadeInProgress = (progress - 0.5) * 2;
                const smoothFade = 1 - Math.pow(1 - fadeInProgress, 2);
                
                material.uniforms.opacity.value = smoothFade;
                letterL.scale.set(1, 1, 1);
                
                headerContent.style.opacity = smoothFade;
            }

            if (progress < 1) {
                requestAnimationFrame(animateReturn);
            } else {
                content.innerHTML = '';
                content.style.opacity = '0';
                backButton.style.opacity = '0';
                letterL.scale.set(1, 1, 1);
                material.uniforms.opacity.value = 1;
                renderer.domElement.style.transform = 'scale(1)';
                
                headerContent.style.opacity = '1';
                
                resolve();
            }
        }

        requestAnimationFrame(animateReturn);
    });
});