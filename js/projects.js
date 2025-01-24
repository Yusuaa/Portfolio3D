// Dans projects.js
const projects = [
  {
    title: "Osu Tournament Management System",
    language: "php",
    description: "Plateforme web pour la gestion des tournois Osu!, remplaçant les solutions Google Docs traditionnelles",
    tools: ["Symfony 7", "PHP 8.2", "Twig", "MySQL", "Osu! API", "Composer"],
    detailedDescription: `
        But : Créer une plateforme dédiée à l'organisation des tournois Osu!
        
        Règles : 
        - Interface utilisateur intuitive
        - Intégration avec l'API Osu!
        - Gestion sécurisée des données
        
        Objectifs : 
        - Remplacer les Google Docs/Sheets par une solution dédiée
        - Automatiser la gestion des tournois
        - Faciliter l'organisation des compétitions
        - Intégrer l'authentification Osu!
        - Gérer les brackets et les matchs
    `,
    skills: [
        "Développement Symfony",
        "Intégration API",
        "Base de données relationnelle",
        "Authentification OAuth",
        "Architecture MVC",
        "Travail collaboratif",
        "Gestion de projet"
    ],
    github: "https://github.com/FofoIsOnInternet/Osu-TMS-Website",
    status: "in-progress",
    tech_stack: {
        "PHP": "50.9%",
        "Twig": "41.5%",
        "JavaScript": "7.5%",
        "CSS": "0.1%"
    }
  },
  {
    title: "Portfolio Dynamique",
    language: "javascript",
    description: "Portfolio interactif avec Three.js",
    tools: ["Three.js", "JavaScript", "HTML5", "CSS3"],
    detailedDescription: `
        But : Créer un portfolio interactif et moderne
        Règles : Interface intuitive et responsive
        Objectifs : 
        - Présenter mes projets de manière interactive
        - Créer une expérience utilisateur unique
        - Apprendre une nouvelle technologie (Three.js)
    `,
    skills: [
        "Développement 3D avec Three.js",
        "Animation et transitions complexes",
        "Optimisation des performances",
        "Design responsive"
    ],
    images: [
        "/images/portfolio1.jpg",
        "/images/portfolio2.jpg",
        "/images/portfolio3.jpg"
    ]
  },
  { 
    title: "Jeu de Plateau - Intelligence Artificielle",
    language: "java",
    description: "Développement d'un jeu de plateau avec multiples IA",
    tools: ["Java", "Git", "NetBeans", "Algorithmes"],
    detailedDescription: `
        But : Créer un jeu de plateau avec plusieurs niveaux d'IA
        Règles : Implémentation d'algorithmes complexes
        Objectifs : 
        - Développement de différentes IA
        - Intégration des règles du jeu
        - Travail collaboratif avec Git
    `,
    skills: [
        "Développement d'algorithmes d'IA",
        "Gestion de versions avec Git",
        "Travail d'équipe",
        "Programmation Java orientée objet",
        "Tests et optimisation d'algorithmes"
    ],
    images: [
        "towa.png"
    ]
  },
  {
    title: "Installation Poste Développement Haskell",
    language: "linux",
    description: "Configuration complète d'un environnement de développement Haskell sur machine virtuelle Linux",
    tools: ["VMware", "Debian", "LXDE", "Haskell", "Git", "VSCode"],
    detailedDescription: `
        But : Mettre en place une machine virtuelle minimale pour le développement Haskell
        Règles : 
        - Espace disque limité (20 Go)
        - Installation complète des outils de développement
        - Configuration multi-utilisateurs
        Objectifs : 
        - Installation et configuration de Debian avec LXDE
        - Mise en place de l'environnement de développement Haskell
        - Configuration des utilisateurs (admin et dev)
        - Installation des outils (VSCode, GHCUP, Git)
        - Documentation complète du processus
    `,
    skills: [
        "Administration système Linux",
        "Configuration de machine virtuelle",
        "Installation d'environnement de développement",
        "Gestion des utilisateurs et permissions",
        "Documentation technique",
        "Optimisation des ressources système"
    ],
    images: [
        "/images/vm-debian.jpg",
        "/images/vm-config.jpg",
        "/images/vm-dev.jpg"
    ]
  },
  {
    title: "Installation d'un service réseau",
    language: "markdown",
    description: "Mise en place et configuration d'une infrastructure réseau complète avec Nextcloud",
    tools: ["Linux", "Nextcloud", "OnlyOffice", "Réseaux"],
    detailedDescription: `
        But : Concevoir et déployer une infrastructure réseau professionnelle
        Règles : 
        - Respect des bonnes pratiques réseau
        - Sécurisation de l'infrastructure
        - Documentation détaillée des procédures
        
        Objectifs : 
        - Configuration du système Linux et des sous-réseaux
        - Déploiement et paramétrage de Nextcloud
        - Installation des services annexes (OnlyOffice)
        - Mise en place des clients et tests
    `,
    skills: [
        "Administration système Linux",
        "Configuration réseau avancée",
        "Déploiement de services cloud",
        "Gestion de la sécurité réseau",
        "Installation et configuration de services",
        "Documentation technique"
    ],
    images: [
        "/images/network1.jpg",
        "/images/network2.jpg",
        "/images/network3.jpg"
    ]
  },
  {
    title: "Analyse de Performance - Dummy Array",
    language: "python",
    description: "Étude comparative des performances d'une structure de données entre C, Java et Python",
    tools: ["C", "Java", "Python", "Matplotlib", "Linux", "Benchmarking"],
    detailedDescription: `
        But : Analyser et comparer les performances d'une structure de données entre différents langages
        
        Règles : 
        - Implémentation d'une structure de données sans doublon
        - Mesures précises des performances
        - Analyse comparative approfondie
        
        Objectifs : 
        - Implémenter un dummy array en C, Java et Python
        - Réaliser des benchmarks précis
        - Analyser les temps d'exécution et l'utilisation mémoire
        - Comprendre les différences entre langages compilés et interprétés
        - Documenter les résultats et conclusions
    `,
    skills: [
        "Programmation multi-langage",
        "Analyse de performances",
        "Utilisation d'outils de benchmarking",
        "Visualisation de données",
        "Rédaction technique",
        "Optimisation de code",
        "Gestion de la mémoire",
        "Analyse comparative"
    ],
    images: [
        "/images/benchmark1.jpg",
        "/images/benchmark2.jpg",
        "/images/benchmark3.jpg"
    ]
  },
  {
    title: "Visualisation de Graphes",
    language: "java",
    description: "Implémentation et visualisation d'algorithmes de graphes (Prim, BFS) avec edge bundling",
    tools: ["Java", "UML", "Algorithmes", "Tests unitaires"],
    detailedDescription: `
        But : Développer une bibliothèque de manipulation et visualisation de graphes
        
        Règles : 
        - Implémentation orientée objet
        - Tests rigoureux des algorithmes
        - Documentation complète du code
        
        Objectifs : 
        - Implémenter les structures de données pour les graphes
        - Développer l'algorithme de Prim pour l'arbre couvrant minimal
        - Implémenter le parcours en largeur (BFS)
        - Réaliser l'edge bundling pour améliorer la visualisation
        - Tester unitairement et fonctionnellement les algorithmes
        - Documenter avec des diagrammes UML
    `,
    skills: [
        "Programmation orientée objet",
        "Conception et implémentation d'algorithmes",
        "Tests unitaires et fonctionnels",
        "Modélisation UML",
        "Optimisation de code",
        "Documentation technique",
        "Travail en équipe",
        "Gestion de projet"
    ],
    images: [
        "/images/graph-uml.jpg",
        "/images/graph-prim.jpg",
        "/images/graph-bfs.jpg",
        "/images/graph-bundle.jpg"
    ]
  }
];

// S'assurer que la fonction est disponible globalement
window.initializeProjectsSection = function() {
  console.log('Initialisation des projets...');
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
      projectsContainer.innerHTML = generateProjectCards('all');
      
      // Ajouter les écouteurs pour les filtres
      document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', e => {
              const filter = e.target.dataset.language;
              document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
              e.target.classList.add('active');
              projectsContainer.innerHTML = generateProjectCards(filter);
          });
      });
  }
};

function generateProjectCards(filter = 'all') {
    console.log("Generating projects with filter:", filter);
    console.log("Projects array:", projects);

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.language === filter);

    console.log("Filtered projects:", filteredProjects);

    if (!filteredProjects || filteredProjects.length === 0) {
        return '<div class="no-projects">Aucun projet trouvé pour ce filtre</div>';
    }

    return filteredProjects.map((project, index) => `
        <div class="project-card" onclick="window.showProjectDetails(${JSON.stringify(project).replace(/"/g, '&quot;')})">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                ${project.github ? `
                    <a href="${project.github}" class="project-link" target="_blank" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i>
                    </a>
                ` : ''}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech-stack">
                ${project.tools.map(tool => `
                    <span class="tech-badge">${tool}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function showProjectDetails(project) {
    const detailsElement = document.createElement('div');
    detailsElement.className = 'project-details';
    
    detailsElement.innerHTML = `
        <div class="details-content">
            <div class="details-overlay" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
                z-index: -1;
            "></div>
            <button class="close-button" onclick="closeProjectDetails()">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="details-header">
                <h2>${project.title}</h2>
            </div>

            <div class="details-body">
                <div class="details-left-panel">
                    <section class="project-overview">
                        <h3><i class="fas fa-info-circle"></i> Vue d'ensemble</h3>
                        <p class="project-main-description">${project.description}</p>
                        <div class="tech-stack">
                            ${project.tools.map(tool => `
                                <span class="tech-pill">${tool}</span>
                            `).join('')}
                        </div>
                    </section>

                    <section class="project-objectives">
                        <h3><i class="fas fa-bullseye"></i> Objectifs & Réalisations</h3>
                        <div class="objectives-list">
                            ${project.detailedDescription.split('\n')
                                .filter(line => line.trim().startsWith('-'))
                                .map(line => `
                                    <div class="objective-item">
                                        <i class="fas fa-check"></i>
                                        <span>${line.replace('-', '').trim()}</span>
                                    </div>
                                `).join('')}
                        </div>
                    </section>
                </div>

                <div class="details-right-panel">
                    <section class="skills-section">
                        <h3><i class="fas fa-star"></i> Compétences développées</h3>
                        <div class="skills-grid">
                            ${project.skills.map(skill => `
                                <div class="skill-card">
                                    <i class="fas fa-bookmark"></i>
                                    <span>${skill}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    ${project.images && project.images.length > 0 ? `
                        <section class="project-gallery">
                            <h3><i class="fas fa-images"></i> Aperçu</h3>
                            <div class="gallery-grid">
                                ${project.images.map(img => `
                                    <div class="gallery-item">
                                        <img src="${img}" alt="Aperçu du projet">
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(detailsElement);

    // Rendre la fonction closeProjectDetails accessible globalement
    window.closeProjectDetails = function() {
        const details = document.querySelector('.project-details');
        if (details) {
            gsap.to(details, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    details.remove();
                    // Réafficher les éléments de la grille de projets
                    document.querySelectorAll('.projects-grid, .language-filter').forEach(el => {
                        el.style.visibility = 'visible';
                        el.style.opacity = '1';
                    });
                }
            });
        }
    };
}

// Fonction de fermeture mise à jour
function closeProjectDetails() {
  const detailsElement = document.querySelector('.project-details');
  if (!detailsElement) return;

  const sceneElements = window.threeElements;
  if (!sceneElements || !sceneElements.camera || !sceneElements.stars) {
      console.error('Éléments Three.js non disponibles pour la fermeture');
      return;
  }
 
  const { camera, stars } = sceneElements;

  // Animation du retour
  gsap.to(camera.position, {
      z: 6,
      duration: 2,
      ease: "power2.inOut"
  });

  gsap.to(stars.rotation, {
      x: stars.rotation.x - Math.PI * 2,
      y: stars.rotation.y - Math.PI * 2,
      duration: 2,
      ease: "power2.inOut"
  });

  // Fade out du contenu
  gsap.to(detailsElement.querySelector('.details-content'), {
      opacity: 0,
      duration: 0.3
  });

  // Réapparition des autres projets
  document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = 'block';
      gsap.fromTo(card, 
          { opacity: 0, scale: 0.8 },
          { 
              opacity: 1, 
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.2
          }
      );
  });

  // Fermer le panneau de détails
  gsap.to(detailsElement, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => detailsElement.remove()
  });
}

// Exporter les variables pour le debugging
window.debug = {
    projects,
    generateProjectCards,
    initializeProjectsSection
};

window.showProjectDetails = showProjectDetails;

console.log('Projects.js chargé');

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projects.forEach(project => {
                if (filter === 'all' || project.dataset.status === filter) {
                    project.style.display = 'block';
                    project.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

// Animation pour l'apparition des projets
const fadeIn = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Ajouter l'animation au style
const style = document.createElement('style');
style.textContent = fadeIn;
document.head.appendChild(style);
