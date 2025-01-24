// Configuration de base Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Positionnement initial de la caméra pour l'intro
camera.position.z = 1000;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ion de la lettre L
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(0, 1.5);
shape.lineTo(0.5, 1.5);
shape.lineTo(0.5, 0.5);
shape.lineTo(1, 0.5);
shape.lineTo(1, 0);

const extrudeSettings = {
    steps: 2,
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.05,
    bevelSegments: 3
};

const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
geometry.center();

// Material pour la lettre L
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
        opacity: { value: 0.0 }
    },
    vertexShader: `
        uniform float time;
        uniform float opacity;
        varying vec3 vPosition;
        varying float vOpacity;

        void main() {
            vec3 newPosition = position;
            newPosition += normal * sin(time + position.x * 10.0) * 0.05;
            
            vPosition = newPosition;
            vOpacity = opacity;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform float opacity;
        varying vec3 vPosition;

        void main() {
            float r = abs(sin(time * 5.0));
            float g = abs(sin(time * 5.0 + 2.0));
            float b = abs(sin(time * 5.0 + 4.0));

            gl_FragColor = vec4(r, g, b, opacity);
        }
    `,
    transparent: true
});

const letterL = new THREE.Mesh(geometry, material);
letterL.scale.set(0.1, 0.1, 0.1);
scene.add(letterL);

// Création des étoiles
const starCount = 5000;
const starGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(starCount * 3);
const colors = new Float32Array(starCount * 3);
const sizes = new Float32Array(starCount);

for (let i = 0; i < starCount; i++) {
    const radius = Math.random() * 50 + 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    
    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    
    sizes[i] = Math.random() * 2 + 0.5;
    
    if (Math.random() < 0.3) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0;
    } else {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
    }
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

const starMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0 },
        speed: { value: 0 }
    },
    vertexShader: `
        uniform float time;
        uniform float speed;
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
            vColor = color;
            vec3 pos = position;
            float z = mod(pos.z + time * 400.0 * speed, 2000.0) - 1000.0;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos.xy, z, 1.0);
            float distance = 1000.0 - abs(z);
            
            vAlpha = smoothstep(0.0, 100.0, distance) * speed;
            gl_PointSize = size * (400.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            gl_FragColor = vec4(vColor, vAlpha);
        }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Lumières
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 10);
pointLight.position.set(2, 3, 5);
scene.add(pointLight);

// Exposer les éléments Three.js globalement
window.threeElements = {
    scene: scene,
    camera: camera,
    stars: stars,
    renderer: renderer
};

// Animation d'intro
let introComplete = false;

// Cacher le contenu initialement
if (document.querySelector('.header-content')) {
    document.querySelector('.header-content').style.visibility = 'hidden';
    document.querySelector('.header-content').style.opacity = '0';
}

const timeline = gsap.timeline({
    onComplete: () => {
        introComplete = true;
        if (document.querySelector('.header-content')) {
            document.querySelector('.header-content').style.visibility = 'visible';
            gsap.to('.header-content', {
                opacity: 1,
                duration: 2,
                ease: 'power2.out'
            });
        }
    }
});

timeline
    .to(starMaterial.uniforms.speed, {
        value: 1,
        duration: 3,
        ease: 'power2.in'
    })
    .to(camera.position, {
        z: 6,
        duration: 3,
        ease: 'power3.inOut'
    }, '-=1')
    .to(starMaterial.uniforms.speed, {
        value: 0.1,
        duration: 1.5,
        ease: 'power2.out'
    }, '-=1.5')
    .to(letterL.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
    }, '-=1')
    .to(material.uniforms.opacity, {
        value: 1,
        duration: 1,
        ease: 'power2.out'
    }, '-=1');

// Animation principale
function animate(time) {
    requestAnimationFrame(animate);

    const delta = time * 0.0002;
    material.uniforms.time.value = time * 0.03;
    starMaterial.uniforms.time.value = delta;

    if (introComplete) {
        letterL.rotation.y += 0.03;
        stars.rotation.y += 0.001;
        stars.rotation.x += 0.001;
        
        planet.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.001);
        planet.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);
        planet.rotation.y += 0.01;
        
        planetMaterial.uniforms.time.value += 0.01;
        ring.position.copy(planet.position);
        ringMaterial.uniforms.time.value += 0.01;
    }

    renderer.render(scene, camera);
}

// Event listeners
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Démarrer l'animation
animate();

console.log('Three.js config chargée', window.threeElements);