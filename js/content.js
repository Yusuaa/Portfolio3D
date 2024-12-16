// Fonction pour générer le contenu des sections
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
                    <div style="
                        background: rgba(255, 255, 255, 0.1);
                        padding: 25px;
                        border-radius: 20px;
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        text-align: center;
                        position: relative;
                        z-index: 1000;
                    ">
                        <div style="
                            width: 120px;
                            height: 120px;
                            background: linear-gradient(45deg, #FFD700, #FFA500);
                            border-radius: 50%;
                            margin: 0 auto 15px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 2.5em;
                            color: white;
                            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                            font-family: 'Playfair Display', serif;
                        ">L</div>
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
                        <p style="
                            font-style: italic;
                            color: #FFD700;
                            margin-bottom: 15px;
                        ">"On rigole, on rigole mais on voit pas le fond du bol"</p>
                        <div style="
                            background: rgba(255, 255, 255, 0.05);
                            padding: 15px;
                            border-radius: 15px;
                            margin-top: 15px;
                        ">
                            <p style="line-height: 1.6;">
                                Passionné par la programmation depuis la classe de Première, 
                                je prends beaucoup de plaisir à coder aujourd'hui.
                            </p>
                            <p style="
                                line-height: 1.6;
                                margin-top: 10px;
                                color: #FFD700;
                                font-weight: bold;
                            ">
                                🔍 En recherche d'alternance pour Septembre 2024
                            </p>
                        </div>
                    </div>

                    <!-- Contenu à droite -->
                    <div style="display: flex; flex-direction: column; gap: 15px; position: relative; z-index: 1000;">
                        <!-- Formation -->
                        <div style="
                            background: rgba(255, 255, 255, 0.1);
                            padding: 20px;
                            border-radius: 20px;
                            backdrop-filter: blur(10px);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                        ">
                            <h3 style="color: #FFD700; margin-bottom: 12px; font-size: 1.2em;">Formation 🎓</h3>
                            <p style="line-height: 1.5;">Étudiant en 2ème année d'informatique à l'IUT de Gradignan, Bordeaux</p>
                        </div>

                        <!-- Compétences -->
                        <div style="
                            background: rgba(255, 255, 255, 0.1);
                            padding: 20px;
                            border-radius: 20px;
                            backdrop-filter: blur(10px);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                        ">
                            <h3 style="color: #FFD700; margin-bottom: 12px; font-size: 1.2em;">Compétences Recherchées 💻</h3>
                            <div style="
                                display: grid;
                                grid-template-columns: repeat(4, 1fr);
                                gap: 10px;
                                margin-bottom: 15px;
                            ">
                                <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 10px; text-align: center;">Java</div>
                                <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 10px; text-align: center;">Python</div>
                                <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 10px; text-align: center;">Web</div>
                                <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 10px; text-align: center;">Cybersécurité</div>
                            </div>
                            <p style="line-height: 1.5; text-align: center; margin-top: 10px;">
                                À l'écoute d'opportunités dans ces domaines pour septembre 2024
                            </p>
                        </div>
                    </div>
                </div>
            `;
        
        case 'projects':
            return `
                <div style="position: relative; z-index: 1000;">
                    <h2>Mes Projets</h2>
                    <div class="language-filter" style="position: relative; z-index: 1000;">
                        <button class="filter-btn active" data-language="all">Tous</button>
                        <button class="filter-btn" data-language="javascript">JavaScript</button>
                        <button class="filter-btn" data-language="python">Python</button>
                        <button class="filter-btn" data-language="react">React</button>
                        <button class="filter-btn" data-language="vue">Vue.js</button>
                        <button class="filter-btn" data-language="php">PHP</button>
                    </div>
                    <div class="projects-grid" style="position: relative; z-index: 1000;">
                        ${generateProjectCards(1)}
                    </div>
                    <div class="pagination" style="position: relative; z-index: 1000;">
                        <button class="page-btn active" data-page="1">1</button>
                        <button class="page-btn" data-page="2">2</button>
                        <button class="page-btn" data-page="3">3</button>
                    </div>
                </div>
            `;
        
        case 'contact':
            return `
                <div style="
                    position: relative;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 30px;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    max-width: 500px;
                    margin: 0 auto;
                ">
                    <h2 style="color: #FFD700; margin-bottom: 20px;">Me Contacter</h2>
                    
                    <div style="
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    ">
                        <div style="
                            background: rgba(255, 255, 255, 0.05);
                            padding: 15px;
                            border-radius: 10px;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                        ">
                            <span style="color: #FFD700;">📧</span>
                            <span>luca.portfolio@example.com</span>
                        </div>
                        
                        <div style="
                            background: rgba(255, 255, 255, 0.05);
                            padding: 15px;
                            border-radius: 10px;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                        ">
                            <span style="color: #FFD700;">📱</span>
                            <span>+33 6 12 34 56 78</span>
                        </div>
                        
                        <div style="
                            background: rgba(255, 255, 255, 0.05);
                            padding: 15px;
                            border-radius: 10px;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                        ">
                            <span style="color: #FFD700;">💼</span>
                            <span>LinkedIn: /in/luca-portfolio</span>
                        </div>
                    </div>
                </div>
            `;
        
        default:
            return 'Section non trouvée';
    }
}