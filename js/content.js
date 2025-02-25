function getSectionContent(section) {
    switch(section) {
        case 'about':
            return `
                <div class="about-section" style="
                    width: 900px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 350px 1fr;
                    gap: 20px;
                    align-items: start;
                ">
                    <!-- Profil à gauche -->
                    <div class="glass-profile" style="
                        background: none;
                        padding: 25px;
                        border-radius: 20px;
                        backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 215, 0, 0.3);
                        text-align: center;
                        position: relative;
                        z-index: 1000;
                        box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
                    ">
                        <img src="Luca.png" alt="Luca Devaux" style="
                            width: 170px;            /* Augmenté de 150px à 170px */
                            height: 170px;           /* Augmenté de 150px à 170px */
                            background: none;
                            border: 2px solid rgba(255, 215, 0, 0.5);
                            border-radius: 50%;
                            margin: 0 auto 20px;
                            object-fit: cover;
                            object-position: center 40%;  /* Modifié de 20% à 30% pour descendre l'image */
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                            cursor: pointer;
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                        " onclick="openImageModal(this.src)" onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 8px 16px rgba(0, 0, 0, 0.3)';" 
                          onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)';"
                        />
                        <h2 style="
                            font-size: 1.8em;
                            margin-bottom: 10px;
                            color: #FFD700;
                            font-family: 'Playfair Display', serif;
                        ">Luca Devaux</h2>
                        <p style="
                            font-size: 1.1em;
                            margin-bottom: 15px;
                            color: rgba(255, 255, 255, 0.9);
                        ">Développeur Junior • 19 ans</p>
                        
                        <!-- Social Links -->
                        <div class="social-links" style="
                            display: flex;
                            justify-content: center;
                            gap: 15px;
                            margin: 20px 0;
                        ">
                            <a href="https://github.com/Yusuaa" target="_blank" style="
                                color: #FFD700;
                                text-decoration: none;
                                padding: 10px;
                                border-radius: 50%;
                                border: 1px solid rgba(255, 215, 0, 0.3);
                                transition: all 0.3s ease;
                            ">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/lucadevaux/" target="_blank" style="
                                color: #FFD700;
                                text-decoration: none;
                                padding: 10px;
                                border-radius: 50%;
                                border: 1px solid rgba(255, 215, 0, 0.3);
                                transition: all 0.3s ease;
                            ">
                                <i class="fab fa-linkedin"></i>
                                LinkedIn
                            </a>
                        </div>

                        <div class="contact-info" style="
                            background: none;
                            padding: 15px;
                            border-radius: 15px;
                            margin-top: 15px;
                            border: 1px solid rgba(255, 215, 0, 0.2);
                            backdrop-filter: blur(5px);
                        ">
                            <p style="color: #FFD700; margin-bottom: 10px;">
                                <i class="fas fa-phone"></i> 06 48 29 95 97
                            </p>
                            <p style="font-style: italic; margin-bottom: 15px;">
                                "Passionné par le développement et les nouvelles technologies"
                            </p>
                        </div>
                    </div>

                    <!-- Contenu à droite -->
                    <div style="display: flex; flex-direction: column; gap: 15px; position: relative; z-index: 1000;">
                        <!-- Formation -->
                        <div class="glass-section" style="
                            background: none;
                            padding: 20px;
                            border-radius: 20px;
                            backdrop-filter: blur(5px);
                            border: 1px solid rgba(255, 215, 0, 0.3);
                            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
                        ">
                            <h3 style="color: #FFD700; margin-bottom: 12px; font-size: 1.2em;">
                                <i class="fas fa-graduation-cap"></i> Formation
                            </h3>
                            <div style="line-height: 1.6;">
                                <p><strong>BUT Informatique</strong> - 2ème année</p>
                                <p>IUT de Bordeaux - Gradignan</p>
                                <p>Spécialisation en développement d'applications</p>
                            </div>
                        </div>

                        <!-- Compétences -->
                        <div class="glass-section" style="
                            background: none;
                            padding: 20px;
                            border-radius: 20px;
                            backdrop-filter: blur(5px);
                            border: 1px solid rgba(255, 215, 0, 0.3);
                            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
                        ">
                            <h3 style="color: #FFD700; margin-bottom: 12px; font-size: 1.2em;">
                                <i class="fas fa-code"></i> Compétences Techniques
                            </h3>
                            <div class="skills-grid" style="
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                gap: 10px;
                            ">
                                <div class="skill-item">Java</div>
                                <div class="skill-item">Python</div>
                                <div class="skill-item">JavaScript</div>
                                <div class="skill-item">HTML/CSS</div>
                                <div class="skill-item">Git</div>
                                <div class="skill-item">SQL</div>
                            </div>
                        </div>

                        <!-- Recherche -->
                        <div class="glass-section highlight" style="
                            background: none;
                            padding: 20px;
                            border-radius: 20px;
                            backdrop-filter: blur(5px);
                            border: 2px solid rgba(255, 215, 0, 0.5);
                            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.2);
                        ">
                            <h3 style="color: #FFD700; margin-bottom: 12px; font-size: 1.2em;">
                                <i class="fas fa-search"></i> Recherche d'Alternance
                            </h3>
                            <p style="line-height: 1.6;">
                                Je suis actuellement à la recherche d'une alternance pour septembre 2025
                                dans le développement d'applications. Passionné par les nouvelles technologies,
                                je souhaite mettre en pratique mes compétences et en développer de nouvelles
                                au sein d'une entreprise dynamique.
                            </p>
                        </div>
                    </div>
                </div>
            `;
        case 'projects':
            return `
                <div style="position: relative; z-index: 1000;">
                    <h2 style="
                        color: #FFD700;
                        font-size: 2.5em;
                        margin-bottom: 30px;
                        text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
                    ">Mes Projets</h2>
                    
                    <div class="language-filter">
                        <button class="filter-btn active" data-language="all">Tous</button>
                        <button class="filter-btn" data-language="java">Java</button>
                        <button class="filter-btn" data-language="python">Python</button>
                        <button class="filter-btn" data-language="linux">Linux</button>
                        <button class="filter-btn" data-language="javascript">JavaScript</button>
                    </div>

                    <div id="projects-container" class="projects-grid">
                        <!-- Les projets seront générés ici -->
                    </div>
                </div>
            `;
        default:
            return 'Section non trouvée';
    }
}

// Ajouter la fonction pour ouvrir l'image en modal
function openImageModal(src) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
    `;

    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 600px;        /* Taille fixe plus grande */
        max-height: 600px;       /* Taille fixe plus grande */
        width: 90vw;             /* Responsive sur petits écrans */
        height: 90vw;            /* Responsive sur petits écrans */
        border-radius: 10px;
        object-fit: cover;
        object-position: center 30%;  /* Mis à jour pour correspondre à la miniature */
        transition: transform 0.3s ease;
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.onclick = () => modal.remove();
}

// Rendre la fonction accessible globalement
window.openImageModal = openImageModal;