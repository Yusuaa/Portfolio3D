// Dans projects.js
const projects = [
    { title: "Portfolio Dynamique", language: "javascript", description: "Portfolio interactif avec Three.js" },
    { title: "E-commerce Platform", language: "react", description: "Plateforme de vente en ligne" },
    { title: "AI Task Manager", language: "python", description: "Gestionnaire de tâches avec IA" },
    { title: "CMS Personnalisé", language: "php", description: "Système de gestion de contenu" },
    { title: "Dashboard Analytics", language: "vue", description: "Tableau de bord en temps réel" },
    { title: "Chat Application", language: "javascript", description: "Application de messagerie" },
    { title: "Blog Platform", language: "react", description: "Plateforme de blog moderne" },
    { title: "Data Visualizer", language: "python", description: "Visualisation de données" },
    { title: "Social Network", language: "php", description: "Réseau social personnalisé" },
    { title: "Music Player", language: "javascript", description: "Lecteur de musique web" },
    { title: "Admin Dashboard", language: "vue", description: "Interface d'administration" },
    { title: "Weather App", language: "react", description: "Application météo" },
];

function generateProjectCards(page, filter = 'all') {
    const projectsPerPage = 6;
    const start = (page - 1) * projectsPerPage;
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.language === filter);
    
    return filteredProjects
        .slice(start, start + projectsPerPage)
        .map(project => `
            <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <span class="project-language">${project.language}</span>
            </div>
        `).join('');
}

// Nouvelle fonction de gestion des événements
function handleProjectInteraction(e) {
    const filterBtn = e.target.closest('.filter-btn');
    const pageBtn = e.target.closest('.page-btn');
  
    if (filterBtn) {
      const filter = filterBtn.dataset.language;
      const projectsGrid = document.querySelector('.projects-grid');
      const filterBtns = document.querySelectorAll('.filter-btn');
  
      filterBtns.forEach(btn => btn.classList.remove('active'));
      filterBtn.classList.add('active');
  
      projectsGrid.innerHTML = generateProjectCards(1, filter);
  
      // Réinitialiser la pagination
      const pageBtns = document.querySelectorAll('.page-btn');
      pageBtns.forEach(btn => btn.classList.remove('active'));
      pageBtns[0].classList.add('active');
    }
  
    if (pageBtn) {
      const page = parseInt(pageBtn.dataset.page);
      const projectsGrid = document.querySelector('.projects-grid');
      const pageBtns = document.querySelectorAll('.page-btn');
      const activeFilter = document.querySelector('.filter-btn.active').dataset.language;
  
      pageBtns.forEach(btn => btn.classList.remove('active'));
      pageBtn.classList.add('active');
  
      projectsGrid.innerHTML = generateProjectCards(page, activeFilter);
    }
  }
function initializeProjectsSection() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const pageBtns = document.querySelectorAll('.page-btn');
  
    filterBtns.forEach(btn => {
      btn.addEventListener('click', handleProjectInteraction);
    });
  
    pageBtns.forEach(btn => {
      btn.addEventListener('click', handleProjectInteraction);
    });
  }

  function showProjectDetails(project) {
    // 1. Hide the project grid
    document.querySelector('.projects-grid').style.display = 'none';
  
    // 2. Create the details container
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('project-details');
  
    // 3. Populate the container with project info
    detailsContainer.innerHTML = `
      <div class="project-header">
        <h2 class="project-title">${project.title}</h2>
        <button class="back-button">Back</button>
      </div>
      <div class="project-content">
        <div class="project-info">
          <h3>Tools Used</h3>
          <p>${project.tools}</p>
          <h3>Project Description</h3>
          <p>${project.description}</p>
          <h3>Skills Developed</h3>
          <p>${project.skills}</p>
        </div>
        <div class="project-images">
          ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
        </div>
      </div>
    `;
  
    // 4. Append the details container to the DOM
    document.body.appendChild(detailsContainer);
  
    // 5. Add event listener to the "Back" button
    detailsContainer.querySelector('.back-button').addEventListener('click', () => {
      detailsContainer.remove();
      document.querySelector('.projects-grid').style.display = 'grid';
    });
  }