// Configuration de base Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création de la lettre L
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
        opacity: { value: 1.0 }
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
scene.add(letterL);

// Création des étoiles
const starGeometry = new THREE.BufferGeometry();
const starCount = 999; // Une en moins pour la planète
const positions = new Float32Array(starCount * 3);
const colors = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
    positions[i * 3] = Math.random() * 20 - 10;
    positions[i * 3 + 1] = Math.random() * 20 - 10;
    positions[i * 3 + 2] = Math.random() * 20 - 10;
    
    if (Math.random() < 0.25) {
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

const starMaterial = new THREE.PointsMaterial({
    vertexColors: true,
    size: 0.03 ,
    transparent: true,
    opacity: 0.7
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

camera.position.z = 6;

// Animation
function animate(time) {
    requestAnimationFrame(animate);

    material.uniforms.time.value = time * 0.03;
    letterL.rotation.y += 0.03;
    
    stars.rotation.y += 0.001;
    stars.rotation.x += 0.001;
    
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

animate();