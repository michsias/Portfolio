const content = {
    title: {
        en: 'Hello!',
        pl: 'Witaj!'
    },
    description: {
        en: 'This is sample content.',
        pl: 'To jest przykładowa zawartość.'
    }
};

const languageButton = document.getElementById('languageButton');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

let currentLanguage = 'pl'; // Domyślny język

languageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    updateContent();
});

function updateContent() {
    titleElement.textContent = content.title[currentLanguage];
    descriptionElement.textContent = content.description[currentLanguage];
}

// Inicjalizacja zawartości
updateContent();
