const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x000000);

// Ajuster la position initiale de la caméra
camera.position.z = 1000;
camera.position.y = 0;
camera.position.x = 0;

// Création des étoiles
const starGeometry = new THREE.BufferGeometry();
const starVertices = [];
const starColors = [];
const starCount = 5000;

for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 4000;
    const y = (Math.random() - 0.5) * 4000;
    const z = (Math.random() - 0.5) * 4000;
    starVertices.push(x, y, z);

    const isYellow = Math.random() > 0.7;
    if (isYellow) {
        starColors.push(1, 0.8, 0);
    } else {
        starColors.push(1, 1, 1);
    }
}

starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3)
);

starGeometry.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(starColors, 3)
);

const starMaterial = new THREE.PointsMaterial({
    size: 3,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 1
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Création de la planète
const planetPosition = new Float32Array(3);
planetPosition[0] = Math.random() * 20 - 10;
planetPosition[1] = Math.random() * 20 - 10;
planetPosition[2] = Math.random() * 20 - 10;

const planetGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const planetMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 },
        lightPosition: { value: new THREE.Vector3(5, 5, 5) }
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float time;
        uniform vec3 lightPosition;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            float elevation = sin(vUv.y * 20.0 + time) * cos(vUv.x * 20.0 - time) * 0.5;
            vec3 baseColor = mix(
                vec3(0.2, 0.4, 0.8),
                vec3(0.1, 0.6, 0.3),
                elevation + 0.5
            );
            
            vec3 lightDir = normalize(lightPosition - vPosition);
            float diff = max(dot(vNormal, lightDir), 0.0);
            
            vec3 viewDir = normalize(-vPosition);
            vec3 reflectDir = reflect(-lightDir, vNormal);
            float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
            
            float atmosphere = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
            vec3 atmosphereColor = vec3(0.5, 0.7, 1.0) * atmosphere;
            
            vec3 finalColor = baseColor * (diff * 0.8 + 0.2);
            finalColor += spec * 0.5;
            finalColor += atmosphereColor;
            
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `
});

const planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.set(planetPosition[0], planetPosition[1], planetPosition[2]);
scene.add(planet);

// Anneaux de la planète
const ringGeometry = new THREE.RingGeometry(0.12, 0.18, 32);
const ringMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 1.0 }
    },
    vertexShader: `
        varying vec2 vUv;
        varying float vDepth;
        
        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vDepth = -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vDepth;
        
        void main() {
            float ring = sin(vUv.x * 50.0 + time) * 0.5 + 0.5;
            float depth = sin(vDepth * 0.1);
            vec3 ringColor = vec3(0.8, 0.8, 1.0) * ring * (depth * 0.5 + 0.5);
            float alpha = ring * 0.7;
            gl_FragColor = vec4(ringColor, alpha);
        }
    `,
    transparent: true,
    side: THREE.DoubleSide
});

const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.position.copy(planet.position);
ring.rotation.x = Math.PI / 4;
scene.add(ring);

// Lumières
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 10);
pointLight.position.set(2, 3, 5);
scene.add(pointLight);

// Animation simplifiée
function animate() {
    requestAnimationFrame(animate);
    
    stars.rotation.y += 0.0002;
    stars.rotation.x += 0.0001;
    
    planet.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.001);
    planet.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);
    
    planet.rotation.y += 0.01;
    planetMaterial.uniforms.time.value += 0.01;
    
    ring.position.copy(planet.position);
    ringMaterial.uniforms.time.value += 0.01;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// S'assurer que l'export est correct
window.threeElements = {
    scene,
    camera,
    stars,
    renderer
};

// Démarrer l'animation
animate();

console.log('Three.js config chargée', window.threeElements);

