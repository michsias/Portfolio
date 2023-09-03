const { jsPDF } = window.jspdf;

const doc = new jsPDF();

document.getElementById('download_button').addEventListener('click', () => {
    const cv_box = document.querySelector('.cv_print');
    const cv_text = cv_box.textContent || cv_box.innerText; // Pobranie tekstu z elementu

    doc.text(cv_text, 10, 10);
    doc.save("Michał_Kawczak-CV.pdf");
});


// const content = {
//     title: {
//         en: 'Hello!',
//         pl: 'Witaj!'
//     },
//     description: {
//         en: 'This is sample content.',
//         pl: 'To jest przykładowa zawartość.'
//     }
// };

// const languageButton = document.getElementById('languageButton');
// const titleElement = document.getElementById('title');
// const descriptionElement = document.getElementById('description');

// let currentLanguage = 'pl'; // Domyślny język

// languageButton.addEventListener('click', () => {
//     currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
//     updateContent();
// });

// function updateContent() {
//     titleElement.textContent = content.title[currentLanguage];
//     descriptionElement.textContent = content.description[currentLanguage];
// }

// // Inicjalizacja zawartości
// updateContent();

// const cv_box = document.querySelector('.cv_print');
// const download_button = document.getElementById('download_button');

// download_button.addEventListener('click', () => {
    
//     cv_box.classList.toggle('cv_print_background_download');
    
//     const cv_pdf = new jsPDF();
//     cv_pdf.fromHTML(cv_box, 10, 10);
//     cv_pdf.save('Michał_Kawczak-CV.pdf');
// }) 