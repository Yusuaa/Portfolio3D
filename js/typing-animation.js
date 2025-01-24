const skills = [
    "Python",
    "Java",
    "Backend",
    "JavaScript",
    "Web",
    "Full Stack"
];

const dynamicText = document.querySelector('.dynamic-text');
let currentSkillIndex = 0;

async function typeText(text) {
    for (let i = 0; i < text.length; i++) {
        dynamicText.textContent = text.substring(0, i + 1);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function deleteText() {
    const text = dynamicText.textContent;
    for (let i = text.length; i > 0; i--) {
        dynamicText.textContent = text.substring(0, i - 1);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

async function animateText() {
    while (true) {
        const skill = skills[currentSkillIndex];
        
        await typeText(skill);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await deleteText();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    }
}

// Démarrer l'animation quand le document est chargé
document.addEventListener('DOMContentLoaded', animateText);
