const content = document.getElementById('content');
const backButton = document.getElementById('back-button');
const headerContent = document.querySelector('.header-content');

const INITIAL_CAMERA_Z = 1000;
const ZOOMED_CAMERA_Z = 400;

document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    let isTransitioning = false;
    
    function toggleScrollIndicator(isHome) {
        scrollIndicator.style.opacity = isHome ? '1' : '0';
        scrollIndicator.style.pointerEvents = isHome ? 'auto' : 'none';
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            if (isTransitioning) return;
            navigateToSection(e.target.getAttribute('data-section'));
        });
    });

    backButton.addEventListener('click', async () => {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const sceneElements = window.threeElements;
        if (sceneElements && sceneElements.camera) {
            gsap.to(sceneElements.camera.position, {
                z: INITIAL_CAMERA_Z,
                duration: 1,
                ease: "power2.inOut"
            });
        }

        content.style.opacity = '0';
        backButton.style.opacity = '0';
        document.body.classList.remove('content-page');
        document.body.classList.add('home-page');
        
        await new Promise(resolve => setTimeout(resolve, 500));
        window.scrollTo(0, 0);
        content.innerHTML = '';
        headerContent.style.opacity = '1';
        toggleScrollIndicator(true);
        isTransitioning = false;
    });

    async function navigateToSection(section) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Reset scroll position
        window.scrollTo(0, 0);
        document.body.classList.add('transitioning');

        // Animation et transition
        const sceneElements = window.threeElements;
        if (sceneElements && sceneElements.camera) {
            gsap.to(sceneElements.camera.position, {
                z: ZOOMED_CAMERA_Z,
                duration: 1,
                ease: "power2.inOut"
            });
        }

        headerContent.style.opacity = '0';
        document.body.classList.add('content-page');
        document.body.classList.remove('home-page');
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        content.innerHTML = window.getSectionContent(section);
        content.style.opacity = '1';
        
        if (section === 'projects' && window.initializeProjectsSection) {
            window.initializeProjectsSection();
        }
        
        backButton.style.opacity = '1';
        toggleScrollIndicator(false);
        document.body.classList.remove('transitioning');
        
        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    }
    
    document.body.classList.add('home-page');
});