let rotationDirection = 1;
let rotationSpeed = 0.02;
let rotationThreshold = Math.PI / 16;

function animate(time) {
    requestAnimationFrame(animate);

    material.uniforms.time.value = time * 0.03;

    letterL.rotation.y += rotationSpeed * rotationDirection;

    if (letterL.rotation.y > rotationThreshold || letterL.rotation.y < -rotationThreshold) {
        rotationDirection *= -1;
    }

    stars.rotation.y += 0.001;
    stars.rotation.x += 0.001;

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

animate();